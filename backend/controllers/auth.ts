import { Request, Response } from "express";
import { IUser, User } from "../models/user";
import bcryptjs from "bcryptjs"
import { ROLES } from "../helpers/constants";
import randomString from "randomstring"
import { sendEmail } from "../mailer/mailer";
import { generateJWT } from "../helpers/generatorJWT";


export const register = async (req: Request, res: Response): Promise<void> => {

    const {nombre, apellido, email, password, rol}: IUser = req.body;

    const user = new User({nombre, apellido, email, password, rol});

    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, salt)

    const adminKey = req.headers["admin-key"];

    if (adminKey === process.env.KEY_FOR_ADMIN) {

        user.rol = ROLES.admin

    }

    const newCode = randomString.generate(5)

    user.code = newCode;

    await user.save();

    await sendEmail(email, newCode)

    res.status(201).json({
        user
    })

}

export const login = async (req: Request, res: Response): Promise<void> => {

    const {email, password}: IUser = req.body;

    try {
        
        const user = await User.findOne({email})

        if (!user) {
            res.status(404).json({
                msg: "No se encontró el email"
            })
            return
        }

        const validatePassword = bcryptjs.compareSync(password, user.password)

        if (!validatePassword) {
            res.status(401).json({
                msg: 'La contraseña es incorrecta'
            })
            return
        }

        const token = await generateJWT(user.id)

        res.status(200).json({
            user,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }

}

export const verifyUser = async (req: Request, res: Response) => {

    const {email, code}: IUser = req.body;

    try {
        
        const user = await User.findOne({email})

        if (!user) {
            res.status(404).json({
                msg: "No se encontró el email"
            })
            return
        }

        if (user.verified) {
            res.status(400).json({
                msg: "El usuario ya está verificado"
            })
            return
        }

        if (code !== user.code) {
            res.status(401).json({
                msg: "El código es incorrecto"
            })
            return
        }

        await User.findOneAndUpdate({email}, {verified: true})

        res.status(200).json({
            msg: "Usuario verificado"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }
}
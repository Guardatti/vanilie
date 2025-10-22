import { Request, Response } from "express";
import { IUser, User } from "../models/user";
import bcryptjs from "bcryptjs"
import { ROLES } from "../helpers/constants";
import { generateJWT } from "../helpers/generatorJWT";


export const register = async (req: Request, res: Response): Promise<void> => {

    const {name, surname, email, password, rol}: IUser = req.body;

    const user = new User({name, surname, email, password, rol});

    const salt = bcryptjs.genSaltSync();

    user.password = bcryptjs.hashSync(password, salt)

    const adminKey = req.headers["admin-key"];

    if (adminKey === process.env.KEY_FOR_ADMIN) {

        user.rol = ROLES.admin

    }

    await user.save();

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
            name: user.name,
            surname: user.surname,
            email: user.email,
            rol: user.rol,
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Error en el servidor"
        })
    }

}
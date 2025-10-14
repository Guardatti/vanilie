import { sendEmail } from "../mailer/mailer"
import { IUser, User } from "../models/user"



export const existEmail = async (email: string): Promise<void> => {

    const existEmail: IUser | null = await User.findOne({email})

    if (existEmail && existEmail.verified) {

        throw new Error(`El email ${email} ya está registrado`)

    }

    if (existEmail && !existEmail.verified) {

        await sendEmail(email, existEmail.code as string)
        throw new Error(`El usuario ya está registrado. Código de verificación enviado nuevamente al email ${existEmail.email}`)

    }

}
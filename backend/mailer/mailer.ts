import nodemailer from "nodemailer"


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
    },
    from: process.env.FROM_NODEMAILER
})

export const sendEmail = async (to: string, code: string): Promise<void> => {

    const mailOption = {
        from: `"VANILIE" ${process.env.USER_NODEMAILER}`,
        to,
        subject: 'Código de verificación para VANILIE',
        text:`
            Tu código para verificar tu cuenta es ${code}
        `
    }

    try {
        
        await transporter.sendMail(mailOption)
        console.log('Correo electrónico enviado');
        

    } catch (error) {
        console.error('Error al enviar el código de verifiación: ', error)
    }

}
import * as Yup from 'yup'

export const validationSchemaLogin = Yup.object({
    email: Yup.string().required(''),
    password: Yup.string().required(''),
})

export const validationSchemaRegister = Yup.object({
    name: Yup.string().required(''),
    surname: Yup.string().required(''),
    email: Yup.string().email('Ingrese un email válido'),
    password: Yup.string().min(6, 'La contraseña debe contener al menos 6 caracteres.').required('')
})
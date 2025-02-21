import * as Yup from 'yup'

export const validationSchemaContactForm = Yup.object({
    name: Yup.string().trim().min(2, 'Nombre inválido').required('Campo requerido'),
    email: Yup.string().email().required('Campo requerido'),
    message: Yup.string().min(10, 'Mensaje corto').required('Campo requerido'),
})
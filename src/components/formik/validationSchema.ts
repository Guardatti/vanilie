import * as Yup from 'yup'

export const validationSchemaContactForm = Yup.object({
    name: Yup.string().trim().min(2, 'Ingrese un nombre inválido').required(''),
    email: Yup.string().email('Ingrese un email válido').required(''),
    message: Yup.string().min(10, 'Ingrese un mensaje válido [Debe contener al menos 10 caracteres]').required(''),
})
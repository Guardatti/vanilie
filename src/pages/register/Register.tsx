import React from 'react'
import './register.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { initialValueRegiter } from '../../components/formik/initialValues'
import { validationSchemaRegister } from '../../components/formik/validationSchema'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Register: React.FC = () => {
  return (
    <div className='container-general-register'>
        <Formik
        initialValues={initialValueRegiter}
        validationSchema={validationSchemaRegister}
        onSubmit={() => {

        }}
        >
            <Form className='container-register'>
                <div className='container-register-form'>

                    <div className='container-register-form-title'>
                        <h2>Únete a VANILIE.</h2>
                    </div>

                    <div className='container-register-form-inputs'>
                        <div className='container-register-label-input'>
                            <Field
                            type="text"
                            name="name"
                            className="register-input"
                            placeholder='Nombre'
                            />
                        </div>
                        <div className='container-register-label-input'>
                            <Field
                            type="text"
                            name="surname"
                            className="register-input"
                            placeholder='Apellido'
                            />
                        </div>
                        <div className='container-register-label-input'>
                            <Field
                            type="email"
                            name="email"
                            className="register-input"
                            placeholder='Email'
                            autocomplete='off'
                            />
                            <ErrorMessage name="email" component="span" className='register-form-errorMessage'/>
                        </div>
                        <div className='container-register-label-input'>
                            <Field
                            type="password"
                            name="password"
                            className="register-input"
                            placeholder='Contraseña'
                            autocomplete='off'
                            />
                            <ErrorMessage name="password" component="span" className='register-form-errorMessage'/>
                        </div>
                        <div className='container-register-label-input'>
                            <motion.button whileTap={{scale: 0.95}}>Registrarse</motion.button>
                        </div>
                        <div className='register-label-link'>
                            <label>¿Ya tienes cuenta?</label>
                            <Link to='/inicio-de-sesion' className='register-link'>Click aca.</Link>
                        </div>
                    </div>

                </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Register

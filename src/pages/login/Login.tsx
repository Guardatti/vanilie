import { Field, Form, Formik } from 'formik'
import React from 'react'
import { initialValueLogin } from '../../components/formik/initialValues'
import './login.css'
import { validationSchemaLogin } from '../../components/formik/validationSchema'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Login: React.FC = () => {



  return (
    <div className='container-general-login'>
        <Formik
        initialValues={initialValueLogin}
        validationSchema={validationSchemaLogin}
        onSubmit={() => {

            console.log('');
            
        }}
        >
            <Form className='container-login'>
              <div className='container-login-form'>

                <div className='container-login-form-title'>
                  <h2>Iniciar sesión</h2>
                </div>

                <div className='container-login-form-inputs'>

                  <div className='container-login-label-input'>
                    <Field
                      type="email"
                      name="email"
                      className="login-input"
                      placeholder='Email'
                      autocomplete='off'
                    />
                  </div>
                  <div className='container-login-label-input'>
                    <Field
                      type="password"
                      name="password"
                      className="login-input"
                      placeholder='Contraseña'
                    />
                  </div>
                  <div className='container-login-label-input'>
                    <motion.button whileTap={{scale: 0.95}}>Entrar</motion.button>
                  </div>
                  <div className='login-label-link'>
                      <label>¿No tienes cuenta?</label>
                      <Link to='/registro' className='login-link'>Cree una.</Link>
                  </div>
                </div>

              </div>
            </Form>
        </Formik>
    </div>
  )
}

export default Login

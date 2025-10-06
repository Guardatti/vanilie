import React, { useRef } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'


const Register: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const form = useRef<HTMLFormElement>(null);

    const onSubmit = () => {
        return
    }

    return (
        <div className='container-general-register'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className='container-register'>
                <div className='container-register-form'>
                    <div className='container-register-form-title'>
                        <h2>Únete a VANILIE.</h2>
                    </div>
                    <div className='container-register-form-inputs'>
                        <div className='container-register-label-input'>
                            <input type="text" name="name" className='register-input' placeholder='Nombre' />
                        </div>
                        <div className='container-register-label-input'>
                            <input type="text" name="surname" className='register-input' placeholder='Apellido' />
                        </div>
                        <div className='container-register-label-input'>
                            <input type="email" name="email" className='register-input' autoComplete='off' placeholder='Email'/>
                        </div>
                        <div className='container-register-label-input'>
                            <input type="password" name="password" placeholder='Contraseña' autoComplete='off' className='register-input' />
                        </div>
                        <div className='container-register-label-input'>
                            <motion.button whileTap={{scale: 0.95}}>Registrarse</motion.button>
                        </div>
                        <div className='register-label-link'>
                            <label>¿Ya tienes cuenta?</label>
                            <Link to='/cuenta/inicio-de-sesion' className='register-link'>Click aca.</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register

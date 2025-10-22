import React, { useRef } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FormDataRegister } from '../../utils/interfaceFormDataLogin_Register/interfaceFormData'


const Register: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataRegister>();

    const form = useRef<HTMLFormElement>(null);

    const onSubmit = () => {
        return
    }

    return (
        <div className='container-general-register'>
            <form ref={form} onSubmit={handleSubmit(onSubmit)} className='container-register'>
                <div className='container-register-form-title'>
                    <h2>Únete a VANILIE.</h2>
                </div>
                <div className='container-register-form-inputs'>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('name', {required: true})}
                            name="name"
                            className='register-input'
                            placeholder='Nombre'
                        />
                        {errors.name && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('surname', {required: true})}
                            name="surname"
                            className='register-input'
                            placeholder='Apellido'
                        />
                        {errors.surname && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('email', {required: true})}
                            name="email"
                            className='register-input'
                            placeholder='Email'
                        />
                        {errors.email && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('password', {required: true})}
                            name="password"
                            className='register-input'
                            placeholder='Contraseña'
                        />
                        {errors.password && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <motion.button whileTap={{scale: 0.95}}>Registrarse</motion.button>
                    </div>
                    <div className='register-label-link'>
                        <label>¿Ya tienes cuenta?</label>
                        <Link to='/cuenta/inicio-de-sesion' className='register-link'>Click aca.</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Register

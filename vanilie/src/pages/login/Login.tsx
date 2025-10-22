import React, { useRef } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { FormDataLogin } from '../../utils/interfaceFormDataLogin_Register/interfaceFormData'



const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataLogin>();

    const form = useRef<HTMLFormElement>(null);

    const onSubmit = () => {
        return
    }

  return (
    <div className='container-general-login'>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className='container-login'>
          <div className='container-login-form-title'>
              <h2>Iniciar sesión</h2>
          </div>
          <div className='container-login-form-inputs'>
            <div className='container-login-label-input'>
              <input
              type="email"
              autoComplete='off'
              {...register('email', {required: true})}
              name="email"
              placeholder='Email'
              className='login-input' />
              {errors.email && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
            </div>
            <div className='container-login-label-input'>
              <input
                type="password"
                {...register('password', {required: true})}
                name="password"
                autoComplete='off'
                placeholder='Contraseña'
                className='login-input'
              />
              {errors.password && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
            </div>
            <div className='container-login-label-input'>
              <motion.button whileTap={{scale: 0.95}}>Entrar</motion.button>
            </div>
            <div className='login-label-link'>
                <label>¿No tienes cuenta?</label>
                <Link to='/cuenta/registro' className='login-link'>Cree una.</Link>
            </div>
          </div>
      </form>
    </div>
  )
}

export default Login

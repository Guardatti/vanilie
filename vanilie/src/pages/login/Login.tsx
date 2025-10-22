import React, { useRef, useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginUser } from '../../axios/axiosUser'
import { useAppDispatch } from '../../redux/hooks'
import { setCurrentUser } from '../../redux/user/userSlice'
import { ILoginData, IUser } from '../../utils/interfaceFormDataLogin_Register/interfaceFormData'
import { useRedirect } from '../../hooks/useRedirect'
import { toast, ToastContainer } from 'react-toastify'



const Login: React.FC = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>();

    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useAppDispatch();

    useRedirect('/cuenta/perfil/datos-personales')

    const form = useRef<HTMLFormElement>(null);

    const onSubmit: SubmitHandler<ILoginData> = async (values) => {

      try {
            
            setLoading(true)

            const user: IUser = await loginUser(values);

            if (user) {
              dispatch(setCurrentUser({
                ...user
              }))
            }

            if (!user) {
              toast.error('¡Email o contraseña incorrecta!', {
              position: "bottom-center",
              autoClose: 2000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
            }
            

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
      
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
                placeholder='Email'
                className='login-input'
              />
              {errors.email && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
            </div>
            <div className='container-login-label-input'>
              <input
                type="password"
                {...register('password', {required: true})}
                autoComplete='off'
                placeholder='Contraseña'
                className='login-input'
              />
              {errors.password && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
            </div>
            <div className='container-login-label-input'>
              {
                loading ?
                  <button className='loading-login-form' disabled={true}>
                    <div className='spinner-login-form'/>
                  </button>
                  :
                  <motion.button whileTap={{scale: 0.95}}>Entrar</motion.button>
              }
            </div>
            <div className='login-label-link'>
                <label>¿No tienes cuenta?</label>
                <Link to='/cuenta/registro' className='login-link'>Cree una.</Link>
            </div>
          </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login

import React, { useRef, useState } from 'react'
import './register.css'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormDataRegister } from '../../utils/interfaceFormDataLogin_Register/interfaceFormData'
import { createUser } from "../../axios/axiosUser"
import { toast, ToastContainer } from 'react-toastify'
import { useRedirect } from '../../hooks/useRedirect'


interface IUser {
    name: string;
    surname: string;
    email: string;
    rol?: string;
    verified?: boolean;
}


const Register: React.FC = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormDataRegister>();

    const form = useRef<HTMLFormElement>(null);

    const [loading, setLoading] = useState<boolean>(false);

    useRedirect('/cuenta/perfil/datos-personales')

    const onSubmit: SubmitHandler<FormDataRegister> = async (values) => {

        try {
            
            setLoading(true)

            const user: IUser = await createUser(values);

            if (user) {
                toast.success('¡Registro exitoso!', {
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

            if (!user) {
                toast.error('¡Email ya existente!', {
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

            reset();

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }

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
                            className='register-input'
                            placeholder='Nombre'
                        />
                        {errors.name && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('surname', {required: true})}
                            className='register-input'
                            placeholder='Apellido'
                        />
                        {errors.surname && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="text"
                            {...register('email', {required: true})}
                            className='register-input'
                            placeholder='Email'
                        />
                        {errors.email && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        <input
                            type="password"
                            {...register('password', {required: true})}
                            className='register-input'
                            placeholder='Contraseña'
                        />
                        {errors.password && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                    </div>
                    <div className='container-register-label-input'>
                        {
                            loading ?
                            <button className='loading-register-form' disabled={true}>
                                <div className='spinner-register-form'/>
                            </button>
                            :
                            <motion.button whileTap={{scale: 0.95}}>Registrarse</motion.button>
                        }
                    </div>
                    <div className='register-label-link'>
                        <label>¿Ya tienes cuenta?</label>
                        <Link to='/cuenta/inicio-de-sesion' className='register-link'>Click aca.</Link>
                    </div>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register

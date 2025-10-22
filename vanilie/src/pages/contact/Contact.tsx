import React, { useRef, useState } from 'react'
import './contact.css'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import { FormData } from '../../utils/interfaceContact/interfaceContact';

const Contact: React.FC = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const [loading, setLoading] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const onSubmit = () => {

    setLoading(true);

    if (!form.current) return;

    emailjs
      .sendForm('service_9c9qnia', 'template_n7mvs14', form.current, {
        publicKey: '4J18PYcgaGGgyLwvL',
      })
      .then(
        () => {
          toast.success('Mensaje enviado con éxito', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          form.current?.reset();
          setLoading(false);
        },
        () => {
          toast.error('Error al enviar el mensaje', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          setLoading(false);
        },
      );
  };

  return (
    <div className='container-general-contact'>
      <form ref={form} onSubmit={handleSubmit(onSubmit)} className='container-contact-form'>
        <div className='container-title-contact'>
          <h1>Formulario de contacto</h1>
        </div>
        <div className='container-inputs-contact-form'>
          <div className='container-input-contact-form'>
            <input type="text" {...register('user_name', {required: true})} name="user_name" id="nombre" placeholder='Nombre'/>
            {errors.user_name && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
          </div>
          <div className='container-input-contact-form'>
            <input type="email" {...register("user_email", {required: "Campo obligatorio", pattern: {value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "El email no es válido"}})} name="user_email" placeholder="Email" />
            {errors.user_email && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>{errors.user_email.message}</span>}
          </div>
          <div className='container-input-contact-form'>
            <input type="text" {...register("telefono", {required: "Campo obligatorio", pattern: {value: /^[0-9]{10,15}$/, message: "El teléfono no es válido"}})} name="telefono" placeholder="Teléfono"/>
            {errors.telefono && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>{errors.telefono.message}</span>}
          </div>
          <div className='container-textarea-contact-form'>
            <textarea className='textarea-contact-form' {...register('message', {required: true})} name='message' placeholder='Escribe tu mensaje aquí'></textarea>
            {errors.message && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
          </div>
          <div className='container-input-contact-form'>
            {
              loading ? (
                <button className='loading-contact-form' disabled={true}>
                  <div className='spinner-contact-form'/>
                </button>
              )
              :
              (
                <motion.button type='submit' whileTap={{scale: 0.95}}>Enviar</motion.button>
              )
            }
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Contact

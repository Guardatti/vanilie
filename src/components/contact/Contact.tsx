import React, { useRef, useState } from 'react'
import './contact.css'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { validationSchemaContactForm } from '../formik/validationSchema'
import { initialValueContactForm } from '../formik/initialValues'
import { motion } from 'framer-motion'


interface ContactProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Contact: React.FC<ContactProps> = ( {isOpen, setIsOpen} ) => {

  const form = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  

  return (
    <div className={`container-contact-form ${isOpen ? "close" : "open"}`}>
        <Formik
          initialValues={initialValueContactForm}
          validationSchema={validationSchemaContactForm}
          onSubmit={(values, {resetForm}) => {

            setLoading(true);
            resetForm();

          }}
        >
          <Form className='contact-form' ref={form}>

            <div className='container-contact-form-title'>
                <p>CONTACTO</p>
            </div>

            <div className='container-contact-form-inputs'>

              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Nombre</label>
                <Field
                  type="text"
                  name="name"
                  className="contact-input-form"
                />
                <ErrorMessage name="name" component="span" className='contact-form-errorMessage'/>
              </div>

              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Email</label>
                <Field
                  type="email"
                  name="email"
                  className="contact-input-form"
                />
                <ErrorMessage name="email" component="span" className='contact-form-errorMessage'/>
              </div>

              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Mensaje</label>
                <Field
                  name="message"
                  as="textarea"
                  className="contact-textarea-form"
                />
                <ErrorMessage name="message" component="span" className='contact-form-errorMessage'/>
              </div>

            </div>

            <div className='container-contact-form-button'>
              {
                loading ?
                <div className='contact-form-loading'>
                  <div className='loading'/>
                </div>
                :
                <motion.button className='contact-form-button' type='submit' whileTap={{scale: 0.95}}>Enviar</motion.button>
              }
            </div>

          </Form>

        </Formik>
    </div>
  )
}

export default Contact

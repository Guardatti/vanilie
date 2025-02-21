import React from 'react'
import './contact.css'
import { Formik } from 'formik'
import { InitialValueContactForm } from '../formik/InitialValues'
import { validationSchemaContactForm } from '../formik/ValidationSchema'

interface ContactProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const Contact: React.FC<ContactProps> = ( {isOpen, setIsOpen} ) => {
  return (
    <div className={`container-contact-form ${isOpen ? "close" : "open"}`}>
        <Formik
          initialValues={InitialValueContactForm}
          validationSchema={validationSchemaContactForm}
          onSubmit={() => {}}
        >

          <form className='contact-form'>

            <div className='container-contact-form-title'>
                <p>CONTACTO</p>
            </div>

            <div className='container-contact-form-inputs'>
              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Nombre</label>
                <input type="text" className='contact-input-form'/>
              </div>
              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Email</label>
                <input type="email" className='contact-input-form'/>
              </div>
              <div className='container-contact-label-input'>
                <label className='contact-label-form'>Mensaje</label>
                <textarea className='contact-textarea-form'></textarea>
              </div>
            </div>

            <div className='container-contact-form-button'>
              <button className='contact-form-button'>Enviar</button>
            </div>

          </form>

        </Formik>
    </div>
  )
}

export default Contact

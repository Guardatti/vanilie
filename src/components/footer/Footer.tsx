import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom'

interface ImagesPaymentMethods {
  id: number,
  url: string,
  alt: string,
}

const paymentMethods: ImagesPaymentMethods[] = [
  {
    id: 1,
    url: 'img_pay/visa.avif',
    alt: 'Visa',
  },
  {
    id: 2,
    url: 'img_pay/mastercard.avif',
    alt: 'Mastercard',
  },
  {
    id: 3,
    url: 'img_pay/naranjax.avif',
    alt: 'Naranja x',
  },
  {
    id: 4,
    url: 'img_pay/mercadopago.avif',
    alt: 'Mercado pago',
  },
  {
    id: 5,
    url: 'img_pay/banelco.avif',
    alt: 'Banelco',
  },
  {
    id: 6,
    url: 'img_pay/pagofacil.avif',
    alt: 'Pago facil',
  },
  {
    id: 7,
    url: 'img_pay/rapipago.avif',
    alt: 'Rapi pago',
  },

]

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='container-networks'>
          <h2>REDES</h2>
          <div className='networks'>
            <a href="">Instagram</a>
          </div>
        </div>

        <div className='container-categories'>
          <h2>CATEGORÍAS</h2>
          <div className='categories'>
            <Link to='/' className='links'>Productos</Link>
            <Link to='/' className='links'>Hombre</Link>
            <Link to='/' className='links'>Mujer</Link>
          </div>
        </div>

        <div className='container-information'>
          <h2>INFORMACIÓN</h2>
          <div className='information'>
            <Link to='/' className='links'>Sobre nosotros</Link>
            <Link to='/' className='links'>Contacto</Link>
            <p className='information-p'>5493510000000</p>
            <p className='information-p'>vanilieclothing@gmail.com</p>
            <p className='information-p'>José Antonio de Sucre 2247</p>
          </div>
        </div>

        <div className='container-policy'>
          <h2>POLÍTICAS</h2>
          <div className='policy'>
            <Link to='/' className='links'>Política de devolución</Link>
            <Link to='/' className='links'>Política de cambios</Link>
            <Link to='/' className='links'>Política de privacidad</Link>
          </div>
        </div>
      </div>
      <div className='container-paymentmethods'>
        {
          paymentMethods.map((img) => (
            <img key={img.id} src={img.url} alt={img.alt} className='img-card'/>
          ))
        }
      </div>
      <div className='container-copyright'>
        <p>Copyright Nicolás Guardatti - 2025. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

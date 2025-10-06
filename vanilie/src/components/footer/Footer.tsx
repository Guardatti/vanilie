import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'
import { paymentMethods } from '../../utils/interfaceHome/interfacePaymentMethods.ts'


const Footer: React.FC = () => {
  return (
    <footer className= 'footer'>
      <div className='container-footer'>
        <div className='container-networks'>
          <h2>REDES</h2>
          <div className='networks'>
            <a href="https://www.instagram.com/vanilieclothing/" target='_blank'>Instagram</a>
          </div>
        </div>

        <div className='container-categories'>
          <h2>CATEGORÍAS</h2>
          <div className='categories'>
            <Link to='/productos' className='links'>Productos</Link>
            <Link to='/productos/genero/hombre' className='links'>Hombre</Link>
            <Link to='/productos/genero/mujer' className='links'>Mujer</Link>
          </div>
        </div>

        <div className='container-information'>
          <h2>INFORMACIÓN</h2>
          <div className='information'>
            <Link to='/sobre-nosotros' className='links'>Sobre nosotros</Link>
            <p className='information-p' style={{fontFamily: 'none'}}>5493510000000</p>
            <p className='information-p'>vanilieclothing@gmail.com</p>
            <p className='information-p'>José Antonio de Sucre <span style={{fontFamily: 'none'}}>2247</span></p>
          </div>
        </div>

        <div className='container-policy'>
          <h2>POLÍTICAS</h2>
          <div className='policy'>
            <Link to='/politica-de-devolucion' className='links'>Política de devolución</Link>

            <Link to='/politica-de-privacidad' className='links'>Política de privacidad</Link>
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

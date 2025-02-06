import React from 'react'
import Slider from './Slider'
import './home.css'
import { Link } from 'react-router-dom'
import { bottoms, completeLook, upperclothing } from '../../utils/interfaces'


const Home: React.FC = () => {
  return (
    <section className='section'>

      <div className='container-slider'>
        <Slider />
      </div>

      <div className='container-upperclothing'>
        <h2>ROPA SUPERIOR</h2>
        <div className='container-img'>
          {
            upperclothing.map((img) => (
              <Link to='/' className='img'>
                <img key={img.id} src={img.url} alt={img.alt}/>
              </Link>
            ))
          }
        </div>
      </div>

      <div className='container-bottoms'>
        <h2>ROPA INFERIOR</h2>
        <div className='container-img'>
          {
            bottoms.map((img) => (
              <Link to='/' className='img'>
                <img key={img.id} src={img.url} alt={img.alt}/>
              </Link>
            ))
          }
        </div>
      </div>

      <div className='container-completelookfootwear'>
        <h2>LOOK COMPLETO Y CALZADO</h2>
        <div className='container-img'>
          {
            completeLook.map((img) => (
              <Link to='/' className='img'>
                <img key={img.id} src={img.url} alt={img.alt}/>
              </Link>
            ))
          }
        </div>
      </div>
      

    </section>
  )
}

export default Home

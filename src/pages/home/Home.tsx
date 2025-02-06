import React from 'react'
import Slider from './Slider'
import './home.css'
import { Link } from 'react-router-dom'

interface Images{
  id: number,
  url: string,
  alt: string,
}

const upperclothing: Images[] = [
  {
    id: 1,
    url: 'img_upperclothing/remeras.avif',
    alt: 'Remeras',
  },
  {
    id: 2,
    url: 'img_upperclothing/musculosas.avif',
    alt: 'Musculosas',
  },
  {
    id: 3,
    url: 'img_upperclothing/camisas.avif',
    alt: 'Camisas',
  },
  {
    id: 4,
    url: 'img_upperclothing/tops.avif',
    alt: 'Tops',
  },
]

const bottoms: Images[] = [
  {
    id: 1,
    url: 'img_bottoms/pantalon.avif',
    alt: 'Pantalon',
  },
  {
    id: 2,
    url: 'img_bottoms/bermuda.avif',
    alt: 'Bermuda',
  },
  {
    id: 3,
    url: 'img_bottoms/short.avif',
    alt: 'Short',
  },
  {
    id: 4,
    url: 'img_bottoms/pollera.avif',
    alt: 'Pollera',
  },
]

const completeLook: Images[] = [
  {
    id: 1,
    url: 'img_completelook/vestido.avif',
    alt: 'Vestido',
  },
  {
    id: 2,
    url: 'img_completelook/conjunto.avif',
    alt: 'Conjunto',
  },
  {
    id: 3,
    url: 'img_completelook/cartera.avif',
    alt: 'Cartera',
  },
  {
    id: 4,
    url: 'img_completelook/zapatilla.avif',
    alt: 'Zapatilla',
  },
]

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

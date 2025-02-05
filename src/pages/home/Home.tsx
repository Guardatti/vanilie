import React from 'react'
import Slider from './Slider'
import './home.css'

const Home: React.FC = () => {
  return (
    <section className='section'>
      <div className='container-slider'>
        <Slider />
      </div>
    </section>
  )
}

export default Home

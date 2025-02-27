import React from 'react'
import '../products.css'
import { products } from '../../../components/data/products'
import { motion } from 'framer-motion'
import { formatPrice } from '../../../utils/formatPrice'


const Tshirts: React.FC = () => {



  return (
    <div className='container-product-tshirts'>
        <div className='container-tshirts-title-filter'>
            <h1 className='title-tshirts'>REMERAS</h1>
            <div className='filter-tshirts'>
              <select className='select-tshirts'>
                <option value="HOMBRE Y MUJER">HOMBRE Y MUJER</option>
                <option value="HOMBRE">HOMBRE</option>
                <option value="MUJER">MUJER</option>
              </select>
              <select className='select-tshirts'>
                <option value="POR DEFECTO">FILTRAR</option>
                <option value="MAYOR A MENOR">PRECIO: MAYOR A MENOR</option>
                <option value="MENOR A MAYOR">PRECIO: MENOR A MAYOR</option>
              </select>
            </div>
        </div>
        <div className='container-products'>
          {
            products.filter((product) => product.category === 'tshirts').map((product) => (
              <div className='container-product-img-info' key={product.id}>
                <div className='container-product-img'>
                  <img className='img-product' src={product.img}/>
                </div>
                <div className='container-product-top'>
                  <span>{product.title}</span>
                </div>
                <div className='container-product-mid'>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <div className='container-product-bot'>
                  <motion.button className='button-product' whileTap={{scale: 0.95}}>COMPRAR</motion.button>
                </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Tshirts

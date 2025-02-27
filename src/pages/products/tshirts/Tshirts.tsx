import React, { useState } from 'react'
import '../products.css'
import { products } from '../../../components/data/products'
import { motion } from 'framer-motion'
import { formatPrice } from '../../../utils/formatPrice'


const Tshirts: React.FC = () => {

  const [filter, setFilter] = useState<string>('HOMBRE Y MUJER')

  const [filterPrice, setFilterPrice] = useState<string>('POR DEFECTO')

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
    console.log(filter);
  };

  const handleChangeFilterPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPrice(event.target.value)
    console.log(filterPrice);
  }

  return (
    <div className='container-product-tshirts'>
        <div className='container-tshirts-title-filter'>
            <h1 className='title-tshirts'>REMERAS</h1>
            <div className='filter-tshirts'>
              <select className='select-tshirts' value={filter} onChange={handleChangeFilter}>
                <option value="male">HOMBRE Y MUJER</option>
                <option value="male">HOMBRE</option>
                <option value="famele">MUJER</option>
              </select>
              <select className='select-tshirts' value={filterPrice} onChange={handleChangeFilterPrice}>
                <option value="POR DEFECTO">FILTRAR</option>
                <option value="MAYOR A MENOR">PRECIO: MAYOR A MENOR</option>
                <option value="MENOR A MAYOR">PRECIO: MENOR A MAYOR</option>
              </select>
            </div>
        </div>
        <div className='container-products'>
          {
            products.filter((product) => product.category === ' tshirts').map((product) => (
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

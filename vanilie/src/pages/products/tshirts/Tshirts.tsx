import React, { useState } from 'react'
import '../products.css'
import { products } from '../../../components/data/products'
import { motion } from 'framer-motion'
import { formatPrice } from '../../../utils/formatPrice'


const Tshirts: React.FC = () => {

  const [filter, setFilter] = useState<string>('default')

  const [filterPrice, setFilterPrice] = useState<string>('default')

  const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value)
  };

  const handleChangeFilterPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterPrice(event.target.value)
  }

  const filterProducts = products.filter((product) => (product.category === 'tshirts' && filter === 'default') || (product.category === 'tshirts' && product.sex === filter));

  const sortedProducts =  filterPrice === 'high price to low price' ? [...filterProducts].sort((a, b) => b.price - a.price)
                          :
                          filterPrice === 'low price to high price' ? [...filterProducts].sort((a, b) => a.price - b.price)
                          :
                          [...filterProducts]

  return (
    <div className='container-product-general'>
        <div className='container-general-title-filter'>
            <h1 className='title-products'>REMERAS</h1>
            <div className='filter-products'>
              <select className='select-general' value={filter} onChange={handleChangeFilter}>
                <option value="default">HOMBRE Y MUJER</option>
                <option value="male">HOMBRE</option>
                <option value="famele">MUJER</option>
              </select>
              <select className='select-general' value={filterPrice} onChange={handleChangeFilterPrice}>
                <option value="default" hidden>FILTRAR</option>
                <option value="high price to low price">PRECIO: MAYOR A MENOR</option>
                <option value="low price to high price">PRECIO: MENOR A MAYOR</option>
              </select>
            </div>
        </div>
        <div className='container-products'>
          {
            sortedProducts.map((product) => (
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

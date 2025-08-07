import React, { useState } from 'react'
import '../products.css'
import { products } from '../../../components/data/products'
import { motion } from 'framer-motion'
import { formatPrice } from '../../../utils/formatPrice'
import { addToCart } from '../../../redux/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'


const Allproducts: React.FC = () => {

    const [filter, setFilter] = useState<string>('default')

    const [filterPrice, setFilterPrice] = useState<string>('default')

    const [category, setCategory] = useState<string>('default')

    const dispatch = useAppDispatch()

    const cart = useAppSelector(state => state.cart.cart)

    const totalQuantity = cart.reduce((total, quantity) => {
        return total += quantity.quantity
    }, 0)

    const handleChangeFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value)
    };

    const handleChangeFilterPrice = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterPrice(event.target.value)
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value)
    }

    const filterProducts =  products.filter((product) => (category == 'default' && filter === 'default')
                            ||
                            (category === 'default' && product.sex === filter)
                            ||
                            (product.category === category && filter === 'default')
                            ||
                            (product.category === category && product.sex === filter));

    const sortedProducts =  filterPrice === 'high price to low price' ? [...filterProducts].sort((a, b) => b.price - a.price)
                            :
                            filterPrice === 'low price to high price' ? [...filterProducts].sort((a, b) => a.price - b.price)
                            :
                            [...filterProducts]

    return (
        <div className='container-product-general'>
            <div className='container-general-title-filter'>
                <h1 className='title-products'>PRODUCTOS</h1>
                <div className='filter-products'>
                    <select className='select-general-all-products' value={filter} onChange={handleChangeFilter}>
                        <option value="default">HOMBRE Y MUJER</option>
                        <option value="male">HOMBRE</option>
                        <option value="famele">MUJER</option>
                    </select>
                    <select className='select-general-all-products' value={category} onChange={handleChangeCategory}>
                        <option value="default" hidden>CATEGORIA</option>
                        <option value="default">TODAS</option>
                        <option value="tshirts">REMERAS</option>
                        <option value="musculars">MUSCULOSAS</option>
                        <option value="pants">PANTALONES</option>
                        <option value="bermudas">BERMUDAS</option>
                        <option value="shoes">ZAPATILLAS</option>
                        <option value="shirts">CAMISAS</option>
                        <option value="tops">TOPS</option>
                        <option value="skirts">POLLERAS</option>
                        <option value="shorts">SHORTS</option>
                        <option value="dresses">VESTIDOS</option>
                        <option value="sets">CONJUNTOS</option>
                        <option value="wallets">CARTERAS</option>
                    </select>
                    <select className='select-general-all-products' value={filterPrice} onChange={handleChangeFilterPrice}>
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
                        <motion.button
                        className='button-product' whileTap={{scale: 0.95}}
                        disabled={totalQuantity >= 9}
                        onClick={() => dispatch(addToCart({id: product.id, title: product.title, img: product.img, category: product.category, price: product.price, sex: product.sex, quantity: 1}))}
                        >
                            COMPRAR
                        </motion.button>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
    )
}

export default Allproducts
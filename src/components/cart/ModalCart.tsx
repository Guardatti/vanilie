import React from 'react'
import './modalcart.css'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { CgDanger } from "react-icons/cg";
import ModalCard from './ModalCard';
import { motion } from 'framer-motion'
import { formatPrice } from '../../utils/formatPrice';
import { clearCart } from '../../redux/cart/cartSlice';


interface ContactProps {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const ModalCart: React.FC<ContactProps> = ({isOpen, setIsOpen}) => {

    const cart = useAppSelector(state => state.cart.cart)

    const dispatch = useAppDispatch();

    const totalQuantity = cart.reduce((total, quantity) => {
      return total += quantity.quantity
    }, 0)

    const totalPrice = cart.reduce((total, item) => {
      return (total += item.price * item.quantity)
    }, 0)

    const toggleCart = () => {
      setIsOpen(!isOpen)
    }

  return (
    <div className={`container-cart ${isOpen ? "close" : "open"}`}>
      <div className='container-cart-title'>
        <h2>CARRITO DE COMPRAS</h2>
      </div>
        {
            cart.length ?
            (
              <div className='container-general-modalcard'>
                {
                  cart.map((product) => {
                    return <ModalCard key={product.id} {...product}/>
                  })
                }
              </div>
            )

            :

            (
              <div className='container-empty'>
                <div className='container-empty-danger-p'>
                  <CgDanger className='danger'/>
                  <p>El carrito de compras esta vacío</p>
                </div>
              </div>
            )
        }
      <div className='container-cart-price-and-buttons'>
        <div className='container-cart-total-price'>
          <span className='cart-total-title'>TOTAL</span>
          <span className='cart-total-price'>{formatPrice(totalPrice)}</span>
        </div>
        <div className='container-cart-buttons'>
          <motion.button whileTap={{scale: 0.95}} onClick={() => dispatch(clearCart())}>VACIAR</motion.button>
          <motion.button whileTap={{scale: 0.95}} disabled={totalQuantity <= 0} onClick={() => toggleCart()}>COMPRAR</motion.button>
        </div>
      </div>
    </div>
  )
}

export default ModalCart

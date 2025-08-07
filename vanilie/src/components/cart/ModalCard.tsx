import React from 'react'
import './modalcard.css'
import { formatPrice } from '../../utils/formatPrice'
import { GoTrash } from "react-icons/go";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addToCart, decraseToCart, removeToCart } from '../../redux/cart/cartSlice';
import { useSelector } from 'react-redux';

interface Props{
    id: number,
    title: string,
    img: string,
    category: string,
    price: number,
    sex: string,
    quantity: number,
}

const ModalCard: React.FC<Props> = ({id, title, img, category, price, sex, quantity}) => {

    const dispatch = useAppDispatch();

    const cart = useAppSelector(state => state.cart.cart)

    const totalQuantity = cart.reduce((total, quantity) => {
        return total += quantity.quantity
    }, 0)

    return (
    <div className='container-modalcard' key={id} >
        <div className='container-card-img'>
            <img src={img} alt={title}/>
        </div>
        <div className='container-card-info'>
            <p>{title}</p>
        </div>
        <div className='container-card-price'>
            <GoTrash className='icon-trash' onClick={() => dispatch(removeToCart(id))}/>
            <div className='container-card-quantity'>
                <button onClick={() => dispatch(decraseToCart(id))}>-</button>
                <span>{quantity}</span>
                <button disabled={totalQuantity >= 9} onClick={() => dispatch(addToCart({id, title, img, category, price, sex, quantity}))}>+</button>
            </div>
            <span>{formatPrice(price)}</span>
        </div>
    </div>
    )
}

export default ModalCard

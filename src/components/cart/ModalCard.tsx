import React from 'react'
import './modalcard.css'
import { formatPrice } from '../../utils/formatPrice'
import { GoTrash } from "react-icons/go";
import { useAppDispatch } from '../../redux/hooks';
import { decraseToCart, removeToCart } from '../../redux/cart/cartSlice';

interface Props{
    id: number,
    title: string,
    img: string,
    price: number,
    quantity: number,
}

const ModalCard: React.FC<Props> = ({id, title, img, price, quantity}) => {

    const dispatch = useAppDispatch();

    return (
    <div className='container-modalcard' key={id}>
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
                <button>+</button>
            </div>
            <span>{formatPrice(price)}</span>
        </div>
    </div>
  )
}

export default ModalCard

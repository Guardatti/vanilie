import React from 'react'
import './cardcheckout.css'
import { formatPrice } from '../../utils/formatPrice'
import { GoTrash } from "react-icons/go";
import { useAppDispatch } from '../../redux/hooks';
import { addToCart, decraseToCart, removeToCart } from '../../redux/cart/cartSlice';


interface Props{
    id: number,
    title: string,
    description: string,
    img: string,
    brand: string,
    price: number,
    sex: string,
    quantity: number,
}

const CardCheckout: React.FC<Props> = ({id, title, description, img, brand, price, sex, quantity}) => {

    const dispatch = useAppDispatch();

    return (
    <div className='container-modalcardcheckout' key={id} >
        <div className='container-cardcheckout-img'>
            <img src={img} alt={title}/>
        </div>
        <div className='container-cardcheckout-info'>
            <p>{title}</p>
        </div>
        <div className='container-cardcheckout-price'>
            <GoTrash className='icon-trashcheckout' onClick={() => dispatch(removeToCart(id))}/>
            <div className='container-cardcheckout-quantity'>
                <button onClick={() => dispatch(decraseToCart(id))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => dispatch(addToCart({id, title, description ,img, brand, price, sex, quantity}))}>+</button>
            </div>
            <span>{formatPrice(price)}</span>
        </div>
    </div>
    )
}

export default CardCheckout

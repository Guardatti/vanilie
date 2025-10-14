import React, { useState } from 'react';
import './checkout.css';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useAppSelector } from '../../redux/hooks';
import CardCheckout from './CardCheckout';
import { formatPrice } from '../../utils/formatPrice';



const Checkout: React.FC = () => {
    
    const [state, setState] = useState({
        number: '',
        expiry: '',
        cvc: '',    
        name: '',
        focus: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'number') {

            const cleanedValue = value.replace(/\D/g, '').slice(0, 16);

            const formattedValue = cleanedValue.replace(/(\d{4})(?=\d)/g, '$1 ');

            setState((prev) => ({ ...prev, [name]: formattedValue }));
            
        } else if (name === 'name') {

            const cleanedValue = value.replace(/[^a-zA-Z\s]/g, '');

            setState((prev) => ({ ...prev, [name]: cleanedValue }));

        } else if (name === 'expiry') {

            let cleanedValue = value.replace(/\D/g, '').slice(0, 4);

            if (cleanedValue.length > 2) {
                cleanedValue = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2);
            }

            setState((prev) => ({ ...prev, [name]: cleanedValue }));

        } else if (name === 'cvc') {

            const cleanedValue = value.replace(/\D/g, '').slice(0, 4);

            setState((prev) => ({ ...prev, [name]: cleanedValue }));

        } else {
            setState((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        setState((prev) => ({ ...prev, focus: e.target.name }));
    };

    const cart = useAppSelector(state => state.cart.cart)

    const totalQuantity = cart.reduce((total, quantity) => {
        return total += quantity.quantity
    }, 0)

    const totalPrice = cart.reduce((total, item) => {
        return (total += item.price * item.quantity)
    }, 0)

    return (
        <div className="container-checkout-1">
            <div className='container-checkout-2'>
                <div className='container-checkout-3'>
                    <div className='container-checkout-4'>
                        <h2>Resumen de compra</h2>
                    </div>
                    {
                        cart.map((x) => {
                            return <CardCheckout key={x.id} {...x}/>
                        })
                    }
                    <div className='container-checkout-5'>
                        <span>TOTAL</span>
                        <span style={{fontFamily: 'none'}}>{formatPrice(totalPrice)}</span>
                    </div>
                </div>
                <div className='container-checkout-6'>
                    <div className='container-checkout-7'>
                        <h2 className='checkout-title'>Detalles de pago</h2>
                    </div>
                    <div className='container-checkout-8'>
                        <div className='credit-card-preview'>
                            <Cards
                                number={state.number}
                                expiry={state.expiry}
                                cvc={state.cvc}
                                name={state.name}
                                focused={state.focus}
                            />
                        </div>
                        <form>
                            <input
                                type="tel"
                                name="number"
                                placeholder="Número de tarjeta"
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={19}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                value={state.name}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                style={{ fontWeight: 300 }}
                            />
                            <input
                                type="tel"
                                name="expiry"
                                placeholder="Fecha expiración"
                                value={state.expiry}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={5}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            <input
                                type="tel"
                                name="cvc"
                                placeholder="CVC"
                                value={state.cvc}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={4}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            <button type="submit" disabled={totalQuantity <= 0}>PAGAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;

import React, { useRef, useState } from 'react';
import './checkout.css';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CardCheckout from './CardCheckout';
import { formatPrice } from '../../utils/formatPrice';
import { useForm } from 'react-hook-form';
import { ICheckoutFormData } from '../../utils/interfaceCheckout/interfaceCheckout';
import { toast, ToastContainer } from 'react-toastify';
import { createOrder } from '../../axios/axiosOrders';
import { IOrder } from '../../utils/interfaceOrdersSlice/interfaceOrdersSlice';
import { clearCart } from '../../redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';



type FocusedField = "name" | "number" | "expiry" | "cvc" | "";

const Checkout: React.FC = () => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ICheckoutFormData>();

    const navigate = useNavigate()

    const form = useRef<HTMLFormElement>(null);

    const dispatch = useAppDispatch();

    const currentUser = useAppSelector(state => state.user.currentUser)

    const [loading, setLoading] = useState<boolean>(false)

    const [state, setState] = useState<{
        number: string;
        expiry: string;
        cvc: string;
        name: string;
        focus: FocusedField;
    }>({
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
        setState((prev) => ({ ...prev, focus: e.target.name as FocusedField}));
    };

    const cart = useAppSelector(state => state.cart.cart)

    const totalQuantity = cart.reduce((total, quantity) => {
        return total += quantity.quantity
    }, 0)

    const totalPrice = cart.reduce((total, item) => {
        return (total += item.price * item.quantity)
    }, 0)

    const onSubmit = async () => {

        const orderData: IOrder = {
            items: cart,
            total: totalPrice,
        }

        try {

            setLoading(true)

            createOrder(orderData, dispatch, currentUser)

            dispatch(clearCart())

            toast.success('¡Compra realizada!', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });

            setTimeout(() => {
                navigate('/cuenta/perfil/pedidos');
            }, 2000);

        } catch (error) {
            toast.error('¡Error al crear la orden!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        } finally {
            setLoading(false)
            reset()
            setState({
                number: '',
                expiry: '',
                cvc: '',
                name: '',
                focus: '',
            });
        }

    }

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
                        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="tel"
                                {...register('number', {required: true})}
                                placeholder="Número de tarjeta"
                                value={state.number}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={19}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            {errors.number && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                            <input
                                type="text"
                                {...register('name', {required: true})}
                                placeholder="Nombre"
                                value={state.name}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                style={{ fontWeight: 300 }}
                            />
                            {errors.name && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                            <input
                                type="tel"
                                {...register('expiry', {required: true})}
                                placeholder="Fecha expiración"
                                value={state.expiry}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={5}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            {errors.expiry && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                            <input
                                type="tel"
                                {...register('cvc', {required: true})}
                                placeholder="CVC"
                                value={state.cvc}
                                onChange={handleInputChange}
                                onFocus={handleInputFocus}
                                maxLength={4}
                                style={{ fontWeight: 300, fontFamily: 'none' }}
                            />
                            {errors.cvc && <span style={{fontSize: '12px', color: 'red', width: '80%'}}>Campo obligatorio</span>}
                            {
                                loading ?
                                <button className='loading-checkout-form' disabled={true}>
                                    <div className='spinner-checkout-form'/>
                                </button>
                                :
                                <button type="submit" disabled={totalQuantity <= 0}>PAGAR</button>
                            }
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Checkout;

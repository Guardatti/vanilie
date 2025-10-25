import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { useParams } from 'react-router-dom'
import { getOrders } from '../../axios/axiosOrders'
import { IOrder } from '../../utils/interfaceOrdersSlice/interfaceOrdersSlice'
import { formatPrice } from '../../utils/formatPrice'
import './orderDetail.css'




const OrderDetail: React.FC = () => {

    const dispatch = useAppDispatch()

    const currentUser = useAppSelector(state => state.user.currentUser) 

    const { id } = useParams()

    const [visitedOrder, setVisitedOrder] = useState<IOrder | null>(null)
    
    const orders = useAppSelector(state => state.orders.orders)

    const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)

    const unslugify = (text: string) => {
        return text
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    useEffect(() => {

        if (!orders) {
            getOrders(dispatch, currentUser)
        }

        setVisitedOrder(orders?.find((order) => order._id === id) || null)
        
    }, [id, currentUser, orders, dispatch])

    return (
        <div className='table-container-detail-1'>
            <div className='table-container-detail-2'>
                {
                    !visitedOrder ?
                    <h2>Numero de orden inexistente</h2>
                    :
                    <h2>Orden ${id?.slice(0, 10)}</h2>
                }
            </div>
            <div className='table-container-detail-3'>
                {
                    !visitedOrder ?
                    <div className='container-orders-empty'>
                        <p>La orden no existe.</p>
                    </div>
                    :
                    <table className='order-table'>
                        <thead className='order-thead'>
                            <tr className='order-tr'>
                                <th className='order-th'>Producto</th>
                                <th className='order-th'>Marca</th>
                                <th className='order-th'>Genero</th>
                                <th className='order-th'>Cantidad</th>
                                <th className='order-th'>Total</th>
                            </tr>
                        </thead>
                        <tbody className='order-tbody'>
                            {
                                visitedOrder.items?.map((x) => (
                                    <tr className='order-tr' key={x.id}>
                                        <th className='order-th'>{x.title}</th>
                                        <td className='order-td'>{unslugify(x.brand)}</td>
                                        <td className='order-td'>{capitalize(x.sex)}</td>
                                        <td className='order-td' style={{fontFamily: 'none'}}>{x.quantity}</td>
                                        <td className='order-td' style={{fontFamily: 'none'}}>{formatPrice(x.price * x.quantity)}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                }
            </div>
        </div>
    )
}

export default OrderDetail
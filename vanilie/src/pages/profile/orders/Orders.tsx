import React, { useEffect } from 'react'
import './orders.css'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getOrders } from '../../../axios/axiosOrders';
import { clearError, fetchOrdersFail } from '../../../redux/orders/ordersSlice';
import { formatPrice } from '../../../utils/formatPrice';
import { formatDate } from '../../../utils/formatDate';
import { useNavigate } from 'react-router-dom';



const Orders: React.FC = () => {

    const dispatch = useAppDispatch();

    const navigate = useNavigate()

    const currentUser = useAppSelector(state => state.user.currentUser)

    const { orders, error, loading } = useAppSelector(state => state.orders)
    
    useEffect( () => {
        
        if (!currentUser?.token) {
            dispatch(fetchOrdersFail('No se proporcionó token de autenticación.'))
        } else {
            error && dispatch(clearError())
        }

        if (!orders) {
            getOrders(dispatch, currentUser)
        }

    }, [dispatch, currentUser, orders, error])

    return (
        <div className='table-container-1'>
            <div className='table-container-2'>
                <h2>MIS PEDIDOS</h2>
            </div>
            <div className='table-container-3'>
                <table className='orders-table'>
                    <thead className='orders-thead'>
                        <tr className='orders-tr'>
                            <th className='orders-th'>Id</th>
                            <th className='orders-th'>Fecha</th>
                            <th className='orders-th'>Total</th>
                            <th className='orders-th'>Detalle</th>
                        </tr>
                    </thead>
                    <tbody className='orders-tbody'>
                        {loading && !orders ? (
                            <tr className='orders-tr'>
                                <td className='orders-td' colSpan={4} style={{textAlign: 'center'}}>
                                    <div className="spinner-table-orders" />
                                </td>
                            </tr>
                        ) : orders?.length ? (
                            orders.map((x) => (
                                <tr className='orders-tr' key={x._id}>
                                    <th className='orders-th' data-label="Id" style={{fontFamily: 'none'}}>{x._id?.slice(0,10)}</th>
                                    <td className='orders-td' data-label="Fecha" style={{fontFamily: 'none'}}>{formatDate(x.createdAt)}</td>
                                    <td className='orders-td' data-label="Total" style={{fontFamily: 'none'}}>{formatPrice(x.total)}</td>
                                    <td className='orders-td' data-label="Detalle">
                                        <button className='detail-button' onClick={() => navigate(`id/${x._id}`)}>Detalle</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className='orders-tr'>
                                <td className='orders-td' colSpan={4} style={{ textAlign: 'center'}}>
                                    No hay pedidos registrados.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Orders

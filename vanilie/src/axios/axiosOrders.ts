import axios from "axios";
import { createOrderFail, fetchOrdersFail, fetchOrdersStart, fetchOrdersSuccess } from "../redux/orders/ordersSlice";
import { AppDispatch } from "../redux/store";
import { IUser } from "../utils/interfaceFormDataLogin_Register/interfaceFormData";
import { IOrder } from "../utils/interfaceOrdersSlice/interfaceOrdersSlice";


export const getOrders = async (dispatch: AppDispatch, currentUser: IUser | null) => {

    dispatch(fetchOrdersStart());

    try {
        
        const orders = await axios.get(`http://localhost:8080/orders`, {headers: {'x-token': currentUser?.token}});

        if (orders) {
            dispatch(fetchOrdersSuccess(orders.data.data));
        }

    } catch (error) {
        console.log(error);
        dispatch(fetchOrdersFail(error as string))
    }

}

export const createOrder = async(order: IOrder, dispatch: AppDispatch, currentUser: IUser | null) => {
    
    try {
        const response = await axios.post(`http://localhost:8080/orders`, order, {headers: {'x-token': currentUser?.token}});

        if (response) {
            getOrders(dispatch, currentUser)
        }

    } catch (error) {
        console.log(error);
        dispatch(createOrderFail(error as string));
    }
    
}
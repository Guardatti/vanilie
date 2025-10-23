import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOrder } from '../../utils/interfaceOrdersSlice/interfaceOrdersSlice'



interface OrdersState {
    orders: IOrder[] | null
    loading: boolean
    error: string | null
}

const initialState: OrdersState = {
    orders: null,
    loading: false,
    error: null,
}

const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers:{
        createOrderFail: (state = initialState, action: PayloadAction<string>) => {
            return{
                ...state,
                error: action.payload
            }
        },
        fetchOrdersSuccess: (state, action: PayloadAction<IOrder[]>) => {
            return{
                ...state,
                loading: false,
                error: null,
                orders: [...action.payload],
            }
        },
        fetchOrdersFail: (state, action: PayloadAction<string>) => {
            return{
                ...state,
                loading: false,
                error: action.payload,
            }
        },
        fetchOrdersStart: (state) => {
            return{
                ...state,
                loading: true,
            }
        },
        clearError: (state) => {
            return{
                ...state,
                error: null,
            }
        },
        clearOrders: (state) => {
            return{
                ...state,
                orders: null,
            }
        }
    }
})

export const { createOrderFail, fetchOrdersSuccess, fetchOrdersFail, fetchOrdersStart, clearError, clearOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
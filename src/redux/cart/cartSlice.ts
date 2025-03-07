import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, decraseItemToCart, removeItemToCart } from "./cartUtils";
import { CartItems, CartState } from "../interface";


const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action: {payload: CartItems}) => {
            return{
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
        },

        decraseToCart: (state, action: {payload: number}) => {
            return{
                ...state,
                cart: decraseItemToCart(state.cart, action.payload)
            }
        },

        removeToCart: (state, action: {payload: number}) => {
            return{
                ...state,
                cart: removeItemToCart(state.cart, action.payload)
            }
        },

        clearCart: (state) => {
            return{
                ...state,
                cart: []
            }
        },

    },

})

export const {addToCart, decraseToCart, removeToCart, clearCart} = cartSlice.actions

export default cartSlice.reducer
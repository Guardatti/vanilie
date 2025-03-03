import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart } from "./cartUtils";


const initialState: {cart: {id: number, title: string, img: string, category: string, price: number, sex: string} []}= {
    cart: []
}

const cartSlice = createSlice({

    name: 'cart',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            return{
                ...state,
                cart: addItemToCart(state.cart, action.payload)
            }
        },

        removeToCart: () => {

        },

        clearCart: () => {

        },

    },

})

export const {addToCart, removeToCart, clearCart} = cartSlice.actions

export default cartSlice.reducer
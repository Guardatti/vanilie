import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../redux/cart/cartSlice'

export const store = configureStore({
    
    reducer: {
        cart: cartSlice,
    }

})
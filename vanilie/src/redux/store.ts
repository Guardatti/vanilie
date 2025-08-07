import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/cart/cartSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';


const reducers = combineReducers({
    cart: cartReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'],
}


const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer: persistedReducer,
})


export const persistor = persistStore(store)

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
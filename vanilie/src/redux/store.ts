import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/cart/cartSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from '../redux/user/userSlice'


const reducers = combineReducers({
    cart: cartReducer,
    user: userReducer,
})


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart', 'user'],
}


const persistedReducer = persistReducer(persistConfig, reducers)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
        serializableCheck: false
    })
})


export const persistor = persistStore(store)

export type AppStore = typeof store

export type RootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']
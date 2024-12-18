import { configureStore } from "@reduxjs/toolkit";
 import productReducer from '../ShopCart/productSlice'
 import cartReducer from '../ShopCart/cartSlice'
const store = configureStore({
    reducer:{
        products:productReducer ,  
            cart:cartReducer
    }
})

export default store;
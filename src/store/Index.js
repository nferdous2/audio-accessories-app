import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice";
//1.Create reducer
const rootReducer = combineReducers({
    counter: counterReducer,
    products: productReducer,
    cart: cartReducer,
});

//2. Create store
const store= configureStore({
    reducer:rootReducer,
});


export default store;
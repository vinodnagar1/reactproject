import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice"
import CheckoutReducer from "./Checkoutslice"
import userreducer from "./Userslice"

const appStore=configureStore({
reducer:{
    cart:cartReducer,
    Checkout:CheckoutReducer,
    user:userreducer
}

})
export default appStore;
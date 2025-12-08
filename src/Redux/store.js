import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./Slices/ProductSlice";



const store = configureStore({
    reducer: {
        productReducer,
    }
});

export default store
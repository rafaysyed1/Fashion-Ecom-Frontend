import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./product/productReducer";
export const rootReducer = combineReducers({
    product : productReducer
})
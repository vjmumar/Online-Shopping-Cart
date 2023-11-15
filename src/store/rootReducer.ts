import { combineReducers } from "@reduxjs/toolkit";
// Reducers
import products from "@features/Products/store/slice";
import cart from "@features/Cart/store/slice";

export const rootReducer = combineReducers({
	products,
	cart,
});

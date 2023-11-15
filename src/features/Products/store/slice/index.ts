import { createSlice } from "@reduxjs/toolkit";
// Types
import { IState, TActionPayload } from "./types";
import { TProduct } from "@features/Products/types";
// Utils
import { products as allProducts } from "@features/Products/utils/products";
import { categories } from "@features/Products/utils/categories";

const products = createSlice({
	name: "products",
	initialState: {
		allProducts: {
			items: allProducts,
		},
		products: {
			items: [],
		},
		categories: {
			items: categories,
		},
	} as IState,
	reducers: {
		productsUpdate: (state, { payload }: TActionPayload) => {
			state.products.items = payload.products as Array<TProduct>;
		},
	},
});

export const { productsUpdate } = products.actions;
export default products.reducer;

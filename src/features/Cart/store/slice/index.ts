import { createSlice } from "@reduxjs/toolkit";
// Types
import { IState, TActionPayload } from "./types";
import { TCartProduct } from "@features/Cart/types";

const cart = createSlice({
	name: "cart",
	initialState: {
		cartProducts: {
			items: [],
		},
	} as IState,
	reducers: {
		cartPushItem: (state, { payload }: TActionPayload) => {
			const isProductALreadyInTheCart = state.cartProducts.items.find(
				(product) => product.id === payload.cartProduct?.id,
			);
			/**
			 * If it already exist inside the cart we will just gonna
			 * increment the quantity of the product.
			 */
			if (isProductALreadyInTheCart) {
				const updatedCartProducts = state.cartProducts.items.map(
					(product) => {
						if (product.id === payload.cartProduct?.id) {
							product.quantity = ++product.quantity;
							product.unitPrice = Number(
								(product.origPrice * product.quantity).toFixed(
									2,
								),
							);
						}
						return product;
					},
				);
				state.cartProducts.items = updatedCartProducts;
			} else {
				state.cartProducts.items.unshift(
					payload.cartProduct as TCartProduct,
				);
			}
		},
		cartProductUpdateQuantity: (state, { payload }: TActionPayload) => {
			state.cartProducts.items.map((product) => {
				if (product.id === payload.cartProductId) {
					product.quantity = payload.cartProductQuantity as number;
					product.unitPrice = Number(
						(product.origPrice * product.quantity).toFixed(2),
					);
				}

				return product;
			});
		},
		cartRemoveItem: (state, { payload }: TActionPayload) => {
			const filteredCartProducts = state.cartProducts.items.filter(
				(product) => product.id !== payload.cartProductId,
			);
			state.cartProducts.items = filteredCartProducts;
		},
		cartClearProducts: (state) => {
			state.cartProducts.items = [];
		},
	},
});

export const {
	cartPushItem,
	cartRemoveItem,
	cartClearProducts,
	cartProductUpdateQuantity,
} = cart.actions;
export default cart.reducer;

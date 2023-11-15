import { TCartProduct } from "@features/Cart/types";
import { TStateStructure } from "@store/types";

export type IState = {
	cartProducts: TStateStructure<Array<TCartProduct>>;
};

export type TActionPayload = {
	payload: {
		cartProducts?: Array<TCartProduct>;
		cartProduct?: TCartProduct;
		cartProductQuantity?: number;
		cartProductId?: string;
	};
};

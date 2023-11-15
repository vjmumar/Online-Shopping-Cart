import { TCategory } from "@features/Cart/types";
import { TProduct } from "@features/Products/types";
import { TStateStructure } from "@store/types";

export type IState = {
	allProducts: TStateStructure<Array<TProduct>>;
	products: TStateStructure<Array<TProduct>>;
	categories: TStateStructure<Array<TCategory>>;
};

export type TActionPayload = {
	payload: {
		products?: Array<TProduct>;
	};
};

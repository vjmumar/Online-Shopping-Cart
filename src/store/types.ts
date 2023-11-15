import { store } from "@store/index";

export type RootState = ReturnType<typeof store.getState>;
export type TStateStructure<Items> = {
	items: Items;
};

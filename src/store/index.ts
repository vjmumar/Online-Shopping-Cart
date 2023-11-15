import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
	TypedUseSelectorHook,
	useSelector as reduxSelector,
} from "react-redux";
// Types
import { RootState } from "./types";

export const store = configureStore({
	reducer: rootReducer,
});
// To access the store
export const getStoreState = store.getState() as RootState;
// To access store inside a component
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;

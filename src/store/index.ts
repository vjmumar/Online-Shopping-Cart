import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import {
	TypedUseSelectorHook,
	useSelector as reduxSelector,
} from "react-redux";
// Redux persist
import {
	persistStore as persistStoreFunction,
	persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// Types
import { RootState } from "./types";

const persistConfig = {
	key: "store",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Our store
export const store = configureStore({
	reducer: persistedReducer,
});

// OUr persist store
export const persistStore = persistStoreFunction(store);

// To access the store
export const getStoreState = store.getState() as RootState;
// To access store inside a component
export const useSelector: TypedUseSelectorHook<RootState> = reduxSelector;

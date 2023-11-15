import { createContext } from "react";
// Types
import { TUseToggle } from "@hooks/useToggle";

interface IContext {
	isModalOpen: TUseToggle[0];
	modalToggler: TUseToggle[1];
}

export const Context = createContext({} as IContext);

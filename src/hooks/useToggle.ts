import { useState, useCallback } from "react";

type ConfigType = {
	defaultValue?: boolean;
};
export type TUseToggle = [boolean, (newValue?: boolean) => void];

export const useToggle = (configs?: ConfigType): TUseToggle => {
	const [isToggled, setToggle] = useState(configs?.defaultValue || false);

	const handleToggler = useCallback(
		(newValue?: boolean) => {
			if (typeof newValue === "boolean") {
				setToggle(newValue);
			} else {
				setToggle((prev) => !prev);
			}
		},
		[isToggled],
	);

	return [isToggled, handleToggler];
};
``;

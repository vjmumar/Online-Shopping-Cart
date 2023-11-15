// Types
import { TCategory } from "../../Cart/types";
// Utils
import { products } from "./products";
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter";

export const categories: Array<TCategory> = (() => {
	const allCategories = products.reduce((a: Array<TCategory>, c) => {
		// We will capitalize the first letter of the category first
		const category = capitalizeFirstLetter(c.category);
		// We will check if the category is already inside the array
		// * Note: We compare it by category
		const isAlreadyInAccumulator = a.find((e) => e.label === category);
		// If not we will push it to our array
		if (!isAlreadyInAccumulator) {
			a.push({
				label: category,
				type: c.category,
			});
		}

		return a;
	}, []);

	// Finally we return all the categories and we also added the "All" in the first index
	return [
		{
			label: "All",
			type: "all",
		},
		...allCategories,
	];
})();

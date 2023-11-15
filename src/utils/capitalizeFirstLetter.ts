export const capitalizeFirstLetter = (text: string): string => {
	return text
		.split(" ")
		.map((e) => e[0].toUpperCase() + e.slice(1))
		.join(" ");
};

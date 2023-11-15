export type TProduct = {
	id: string;
	productName: string;
	description: string;
	unitPrice: number;
	imageUrl: string;
	category: string;
};

export type TSortDirection = "high" | "low" | "";

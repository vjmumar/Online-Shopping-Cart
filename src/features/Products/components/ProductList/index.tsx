import { useCallback, useEffect, useMemo, useState } from "react";
// Components
import Product from "../Product";
// Redux
import { useSelector } from "@store/index";
import { useDispatch } from "react-redux";
// Actions
import { productsUpdate } from "@features/Products/store/slice";
import { cartPushItem } from "@features/Cart/store/slice";
// Material UI
import { Box, Button } from "@mui/material";
// Types
import { TProduct, TSortDirection } from "@features/Products/types";

interface IProps {
	// To filter by category
	category?: string;
	// To filter by price
	sortBy?: TSortDirection;
	// To filter by search keyword
	search?: string;
}

const ProductList = ({ category, sortBy, search }: IProps) => {
	const [perPage, setPerPage] = useState(10);
	// Redux method
	const dispatch = useDispatch();
	const { products, allProducts } = useSelector((state) => state.products);
	// Paginated products
	const isAllProductsShowed = useMemo<boolean>(() => {
		return perPage >= products.items.length;
	}, [products, perPage]);

	const paginatedProducts = useMemo<Array<TProduct>>(() => {
		return products.items.slice(0, perPage);
	}, [products, perPage]);

	const handleIncrementProducts = () => {
		setPerPage((prev) => {
			return (prev += 5);
		});
	};

	const handleAddToCart = useCallback((product: TProduct) => {
		dispatch(
			cartPushItem({
				cartProduct: {
					id: product?.id,
					imageUrl: product?.imageUrl,
					productName: product?.productName,
					quantity: 1,
					unitPrice: product?.unitPrice,
				},
			}),
		);
	}, []);

	useEffect(() => {
		// We will reset the perPage first
		setPerPage(10);
		// Then scroll back to top
		window.scrollTo({
			top: 0,
		});
		// Then create an updated products
		const updatedProducts = allProducts.items
			// First we will filter by category
			.filter((product) => product.category === category || !category)
			// Then we will filter by search keyword
			.filter((product) =>
				product.productName
					.toLowerCase()
					.includes(search?.toLowerCase() as string),
			)
			// Then we will sort it by price
			.sort((a, b) => {
				if (sortBy === "high" && a.unitPrice > b.unitPrice) {
					return -1;
				} else if (sortBy === "low" && a.unitPrice < b.unitPrice) {
					return -1;
				}

				return 0;
			});

		// Finally dispatch the changes
		dispatch(productsUpdate({ products: updatedProducts }));
	}, [category, sortBy, search]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			{paginatedProducts.map((product) => (
				<Product
					key={product.id}
					product={product}
					onAddToCart={handleAddToCart}
				/>
			))}
			{!isAllProductsShowed && (
				<Button
					sx={{
						p: "10px 30px",
						m: "auto",
						minWidth: "55%",
						color: "black",
						background: "#A5F951",
						mb: "25px",
						textTransform: "none",
					}}
					size="medium"
					onClick={handleIncrementProducts}
				>
					Load more
				</Button>
			)}
		</Box>
	);
};

export default ProductList;

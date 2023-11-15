import { useCallback } from "react";
// Components
import CartProduct from "../CartProduct";
// Material UI
import { Typography } from "@mui/material";
// Redux
import { useSelector } from "@store/index";
import { useDispatch } from "react-redux";
// Actions
import {
	cartProductUpdateQuantity,
	cartRemoveItem,
} from "@features/Cart/store/slice";

const CartProductList = () => {
	const dispatch = useDispatch();
	const { cartProducts } = useSelector((state) => state.cart);

	const handleOnRemoveProduct = useCallback((cartProductId: string) => {
		dispatch(
			cartRemoveItem({
				cartProductId,
			}),
		);
	}, []);

	const handleUpdateProductQuantity = useCallback(
		(quantity: number, cartProductId: string) => {
			dispatch(
				cartProductUpdateQuantity({
					cartProductQuantity: quantity,
					cartProductId,
				}),
			);
		},
		[],
	);

	if (!cartProducts.items.length) {
		return (
			<Typography
				variant="h5"
				sx={{
					textAlign: "center",
				}}
			>
				Cart empty!
			</Typography>
		);
	}

	return (
		<>
			{cartProducts.items.map((cartProduct) => (
				<CartProduct
					key={cartProduct.id}
					cartProduct={cartProduct}
					onRemove={handleOnRemoveProduct}
					onUpdateQuantity={handleUpdateProductQuantity}
				/>
			))}
		</>
	);
};

export default CartProductList;

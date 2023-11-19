import { memo, useContext, useMemo } from "react";
// Material UI
import { Box, Button, Typography } from "@mui/material";
// Redux
import { useSelector } from "@store/index";
import { useDispatch } from "react-redux";
// Context
import { Context } from "@pages/Home/context";
// Actions
import { cartClearProducts } from "@features/Cart/store/slice";

const CartSidebarFooter = () => {
	const { modalToggler } = useContext(Context);
	// Redux methods
	const dispatch = useDispatch();
	const { cartProducts } = useSelector((state) => state.cart);

	const onCheckout = () => {
		// Toggle the modal
		modalToggler();
		// Then clear the cart
		dispatch(cartClearProducts());
	};

	const totalAmount = useMemo(() => {
		return cartProducts.items
			.reduce((a, c) => {
				a += c.unitPrice;

				return a;
			}, 0)
			.toFixed(2);
	}, [cartProducts]);

	return (
		<Box
			component="div"
			sx={{
				width: "100%",
				px: {
					lg: "30px",
					xs: "15px",
				},
				pt: "30px",
				pb: "15px",
				backgroundColor: "#CBCBCB",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography fontWeight={"500"}>Total Items</Typography>
				<Typography fontWeight={"500"} color={"red"}>
					{cartProducts?.items.length}
				</Typography>
			</Box>
			<Box
				sx={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography fontWeight={"500"}>Total Amount</Typography>
				<Typography fontWeight={"500"} variant={"h5"} color="red">
					₱{totalAmount}
				</Typography>
			</Box>
			<Button
				size={"medium"}
				onClick={onCheckout}
				disabled={!cartProducts?.items.length}
				sx={{
					background: "#A5F951",
					color: "black",
					p: "8px 25px",
					borderRadius: 0,
					fontSize: "16px",
					width: "100%",
					mt: "25px",
					textTransform: "unset",
				}}
			>
				Checkout
			</Button>
		</Box>
	);
};

export default memo(CartSidebarFooter);

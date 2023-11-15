// Material UI
import { Box, Button, Typography } from "@mui/material";
// Redux
import { useDispatch } from "react-redux";
// Actions
import { cartClearProducts } from "@features/Cart/store/slice";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Router
import { useSearchParams } from "react-router-dom";

const CartSidebarHeader = () => {
	// Router methods
	const [searchParams, setSearchParams] = useSearchParams();
	// Redux methods
	const dispatch = useDispatch();

	const handleClearCart = () => {
		dispatch(cartClearProducts());
	};

	const handleCloseCart = () => {
		searchParams.delete("cart", "true");
		setSearchParams(searchParams);
	};

	return (
		<Box
			component="div"
			sx={{
				width: "100%",
				px: {
					lg: "30px",
					xs: "15px",
				},
				pt: {
					lg: "30px",
					xs: "50px",
				},
				pb: {
					lg: "15px",
					xs: "20px",
				},
				backgroundColor: "#CBCBCB",
				display: "flex",
				flexDirection: {
					lg: "column",
					xs: "row",
				},
				alignItems: {
					lg: "unset",
					xs: "center",
				},
			}}
		>
			<CloseIcon
				sx={{
					display: {
						lg: "none",
						xs: "block",
					},
					position: "absolute",
					width: "25px",
					height: "25px",
					top: "-15px",
					right: "-10px",
					ml: "auto",
					mr: "20px",
					mt: "20px",
				}}
				onClick={() => handleCloseCart()}
			/>
			<Typography variant="h5">My Cart</Typography>
			<Button
				size={"small"}
				sx={{
					background: "red",
					color: "white",
					p: "8px 25px",
					borderRadius: 0,
					fontSize: "13px",
					ml: "auto",
				}}
				onClick={handleClearCart}
			>
				Clear Cart
			</Button>
		</Box>
	);
};

export default CartSidebarHeader;

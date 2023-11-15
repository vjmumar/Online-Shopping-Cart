// Material UI
import { Box, Stack } from "@mui/material";
// Components
import CartSidebarHeader from "./subComponents/Header";
import CartSidebarFooter from "./subComponents/Footer";
import CartProductList from "@features/Cart/components/CartProductList";

const CartSidebar = () => {
	return (
		<Stack
			sx={{
				backgroundColor: "#F3F3F3",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
			}}
		>
			<CartSidebarHeader />
			<Box
				sx={{
					maxHeight: "100%",
					overflowY: "auto",
					mt: "30px",
					mb: "30px",
					minHeight: "200px",
				}}
			>
				<CartProductList />
			</Box>
			<Box
				sx={{
					mt: "auto",
				}}
			>
				<CartSidebarFooter />
			</Box>
		</Stack>
	);
};

export default CartSidebar;

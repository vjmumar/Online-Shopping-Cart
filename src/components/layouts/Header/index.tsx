import { memo } from "react";
// Material UI
import { AppBar, Box, Typography } from "@mui/material";
// Icons
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// Router
import { useSearchParams } from "react-router-dom";
// Redux
import { useSelector } from "@store/index";

const Header = () => {
	const { cartProducts } = useSelector((state) => state.cart);
	// Router methods
	const [searchParams, setSearchParams] = useSearchParams();

	const handleOpenCart = () => {
		searchParams.set("cart", "true");
		setSearchParams(searchParams);
	};

	return (
		<AppBar
			sx={{
				backgroundColor: "#505050",
				boxShadow: "none",
				position: "sticky",
				top: "0",
			}}
		>
			<Box
				sx={{
					p: {
						lg: "15px 30px",
						xs: "15px",
					},
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="h5"
					sx={{
						color: "#FFFFFF",
						weight: 600,
					}}
				>
					Online Shopping Store
				</Typography>
				<Box
					sx={{
						display: {
							md: "block",
							lg: "none",
						},
						position: "relative",
					}}
					onClick={handleOpenCart}
				>
					<Typography
						sx={{
							background: "#A5F951",
							color: "black",
							fontSize: "10px",
							width: "20px",
							height: "20px",
							display: cartProducts.items.length
								? "flex"
								: "none",
							alignItems: "center",
							justifyContent: "center",
							borderRadius: "50%",
							position: "absolute",
							right: "-8px",
							top: "-8px",
						}}
					>
						{cartProducts.items.length}
					</Typography>
					<ShoppingCartIcon
						sx={{
							cursor: "pointer",
						}}
					/>
				</Box>
			</Box>
		</AppBar>
	);
};

export default memo(Header);

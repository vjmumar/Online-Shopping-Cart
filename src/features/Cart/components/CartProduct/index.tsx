import { memo } from "react";
// Material UI
import { Box, Typography } from "@mui/material";
// Components
import QuantityRange from "@components/common/QuantityRange";
// Icons
import CloseIcon from "@mui/icons-material/Close";
// Types
import { TCartProduct } from "@features/Cart/types";

interface IProps {
	cartProduct: TCartProduct;
	onRemove?: (cartProductId: string) => void;
	onUpdateQuantity?: (quantity: number, cartProductId: string) => void;
}

const CartProduct = ({ cartProduct, onRemove, onUpdateQuantity }: IProps) => {
	const onUpdateQuantityChange = (quantity: number) => {
		onUpdateQuantity?.(quantity, cartProduct?.id);
	};

	return (
		<Box
			component="div"
			sx={{
				p: "10px 25px",
				display: "flex",
			}}
		>
			<Box
				component="div"
				sx={{
					mr: "15px",
					position: "relative",
				}}
			>
				<Box
					onClick={() => onRemove?.(cartProduct?.id)}
					sx={{
						position: "absolute",
						width: "20px",
						height: "20px",
						cursor: "pointer",
						left: "-10px",
						top: "-10px",
						background: "red",
						borderRadius: "50%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<CloseIcon
						sx={{
							fontSize: "10px",
							color: "white",
						}}
					/>
				</Box>
				<Box
					sx={{
						width: "70px",
						height: "80px",
					}}
					component="img"
					src={cartProduct?.imageUrl}
				/>
			</Box>
			<Box
				component="div"
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<Typography
					variant="body2"
					fontSize={"17px"}
					fontWeight={"500"}
					sx={{
						mb: "10px",
					}}
				>
					{cartProduct?.productName}
				</Typography>
				<Box
					component="div"
					sx={{
						display: "flex",
						width: "100%",
						justifyContent: "space-between",
						mt: "auto",
					}}
				>
					<Typography color="red">
						₱{cartProduct?.unitPrice}
					</Typography>
					<QuantityRange
						onChange={onUpdateQuantityChange}
						defaultNumber={cartProduct?.quantity}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default memo(CartProduct);

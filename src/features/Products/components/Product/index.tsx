// Material UI
import { Grid, Box, Typography, Button } from "@mui/material";
// Types
import { TProduct } from "@features/Products/types";
// Utils
import { capitalizeFirstLetter } from "@utils/capitalizeFirstLetter";

interface IProps {
	onAddToCart?: (product: TProduct) => void;
	product: TProduct;
}

const Product = ({ product, onAddToCart }: IProps) => {
	return (
		<Grid
			container
			sx={{
				backgroundColor: "#F3F3F3",
				p: {
					xs: "20px",
					lg: "30px",
				},
				mb: {
					xs: "20px",
					lg: "30px",
				},
				justifyContent: "space-between",
			}}
		>
			<Grid item lg={2} xs={12}>
				<Box
					sx={{
						width: "100%",
						height: "100%",
						maxHeight: {
							lg: "180px",
							xs: "200px",
						},
						objectFit: {
							xs: "contain",
							lg: "unset",
						},
						objectPosition: {
							xs: "center",
							lg: "unset",
						},
						maxWidth: {
							lg: "180px",
							xs: "100%",
						},
					}}
					component={"img"}
					src={product.imageUrl}
				/>
			</Grid>
			<Grid item lg={8} xs={12}>
				<Typography variant={"h6"}>{product.productName}</Typography>
				<Typography variant={"subtitle1"} color="#008000">
					{capitalizeFirstLetter(product.category)}
				</Typography>
				<Typography variant={"body1"}>{product.description}</Typography>
			</Grid>
			<Grid item lg={1.5} xs={12}>
				<Typography
					variant={"h6"}
					sx={{
						color: "#FF0000",
						mt: {
							xs: "20px",
							lg: "unset",
						},
					}}
				>
					₱{product.unitPrice}
				</Typography>
				<Button
					sx={{
						backgroundColor: "#A5F951",
						p: "10px 20px",
						fontSize: "13px",
						color: "#000000",
						mt: {
							xs: "20px",
							lg: "30px",
						},
						width: {
							xs: "100%",
							lg: "unset",
						},
					}}
					onClick={() => onAddToCart?.(product)}
				>
					Add to cart
				</Button>
			</Grid>
		</Grid>
	);
};

export default Product;

import { memo } from "react";
// Material UI
import { Box, Grid, Typography } from "@mui/material";
// Components
import CategorySidebar from "./components/CategorySidebar";
import ProductList from "@features/Products/components/ProductList";
import SearchForm from "./components/SearchForm";
import CartSidebar from "./components/CartSidebar";
import ThankyouModal from "./components/ThankyouModal";
import SortButton from "./components/SortButton";
// Router
import { useSearchParams } from "react-router-dom";
// Types
import { TSortDirection } from "@features/Products/types";
// Context
import { Context } from "./context";
// Hooks
import { useToggle } from "@hooks/useToggle";
// Icons
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";

const Home = () => {
	const [isModalOpen, modalToggler] = useToggle({ defaultValue: false });
	const [isMobileFilterOpen, mobileFilterToggler] = useToggle({
		defaultValue: false,
	});
	// Router methods
	const [searchParams] = useSearchParams();
	const isCartOpen = searchParams.get("cart") === "true";
	const category = searchParams.get("category") || "";
	const searchedKeyword = searchParams.get("search") || "";
	const sort = searchParams.get("sort") as TSortDirection;

	return (
		<Context.Provider
			value={{
				isModalOpen,
				modalToggler,
			}}
		>
			<Grid
				container
				justifyContent={"space-between"}
				sx={{
					minHeight: "calc(100vh - 62px)",
					overflow: "unset",
					position: "relative",
				}}
			>
				<Grid
					xs={12}
					lg={1.4}
					item
					sx={{
						backgroundColor: "#F3F3F3",
						width: "100%",
						height: {
							lg: "unset",
							xs: "100%",
						},
						zIndex: {
							lg: "unset",
							xs: "1",
						},
						left: {
							lg: "unset",
							xs: isMobileFilterOpen ? "0%" : "-100%",
						},
						position: {
							lg: "relative",
							xs: "absolute",
						},
					}}
				>
					<CloseIcon
						sx={{
							display: {
								lg: "none",
								xs: "block",
							},
							width: "30px",
							height: "30px",
							ml: "auto",
							mr: "20px",
							mt: "20px",
						}}
						onClick={() => mobileFilterToggler()}
					/>
					<CategorySidebar />
				</Grid>
				<Grid
					lg={7.3}
					xs={12}
					sx={{
						p: {
							xs: "15px",
							lg: "unset",
						},
					}}
					item
					mt={{
						lg: "50px",
						xs: "20px",
					}}
				>
					<Box>
						<SearchForm />
					</Box>
					<Box
						sx={{
							display: "flex",
							justifyContent: {
								lg: "flex-end",
								xs: "space-between",
							},
							mb: "30px",
							mt: "30px",
						}}
					>
						<Typography
							sx={{
								display: {
									xs: "flex",
									lg: "none",
								},
								alignItems: "center",
							}}
							onClick={() => mobileFilterToggler()}
						>
							<FilterListIcon
								sx={{
									cursor: "pointer",

									mr: "8px",
								}}
							/>
							Filters
						</Typography>
						<SortButton />
					</Box>
					<ProductList
						category={category}
						sortBy={sort}
						search={searchedKeyword}
					/>
				</Grid>

				<Grid
					item
					lg={2.3}
					xs={12}
					sx={{
						display: {
							lg: "block",
							xs: isCartOpen ? "block" : "none",
						},
						backgroundColor: "#F3F3F3",
						position: {
							lg: "relative",
							xs: "absolute",
						},
						height: {
							lg: "unset",
							xs: "100%",
						},
						width: "100%",
					}}
				>
					<Box
						sx={{
							position: "sticky",
							top: "62px",
							height: "100%",
							maxHeight: "calc(100vh - 62px)",
						}}
					>
						<CartSidebar />
					</Box>
				</Grid>
			</Grid>
			<ThankyouModal />
		</Context.Provider>
	);
};

export default memo(Home);

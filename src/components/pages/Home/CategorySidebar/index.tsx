import { memo } from "react";
// Material UI
import { Box } from "@mui/material";
// Components
import CategoryList from "@features/Products/components/CategoryList";
// Router
import { useSearchParams } from "react-router-dom";

const CategorySidebar = () => {
	// Router methods
	const [searchParams, setSearchParams] = useSearchParams();
	const activeCategory = searchParams.get("category");

	const onCategoryClick = (category: string) => {
		if (category !== "all") {
			searchParams.set("category", category);
		} else {
			searchParams.delete("category");
		}
		setSearchParams(searchParams);
	};

	return (
		<Box
			sx={{
				backgroundColor: "#F3F3F3",
				py: "20px",
				width: "100%",
				position: "sticky",
				top: "62px",
			}}
		>
			<CategoryList
				currentActiveId={activeCategory || "all"}
				onClick={onCategoryClick}
			/>
		</Box>
	);
};

export default memo(CategorySidebar);

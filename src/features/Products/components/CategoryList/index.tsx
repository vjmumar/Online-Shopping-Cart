import { memo } from "react";
// Material UI
import { Typography } from "@mui/material";
// Redux
import { useSelector } from "@store/index";

interface IProps {
	// To retrieve the category of the clicked item
	onClick?: (category: string) => void;
	// To make an item active
	currentActiveId?: string;
}

const CategoryList = ({
	onClick = () => null,
	currentActiveId = "all",
}: IProps) => {
	const { categories } = useSelector((state) => state.products);

	return (
		<>
			{categories?.items?.map((category) => (
				<Typography
					key={category.type}
					onClick={() => onClick(category.type)}
					variant={"body1"}
					sx={{
						opacity: 0.5,
						p: "10px 20px",
						color: "#000000",
						cursor: "pointer",
						"&:hover": {
							opacity: 1,
							backgroundColor: "#A5F951",
						},
						...(currentActiveId === category.type
							? {
									opacity: 1,
									backgroundColor: "#A5F951",
							  }
							: {}),
					}}
				>
					{category.label}
				</Typography>
			))}
		</>
	);
};

export default memo(CategoryList);

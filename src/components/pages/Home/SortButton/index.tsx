import React from "react";
// Material UI
import { Typography } from "@mui/material";
// Router
import { useSearchParams } from "react-router-dom";
// Icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const SortButton = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const sort = searchParams.get("sort");

	const sortToggler = () => {
		if (!sort) {
			searchParams.set("sort", "high");
		} else if (sort === "high") {
			searchParams.set("sort", "low");
		} else if (sort === "low") {
			searchParams.delete("sort");
		}
		setSearchParams(searchParams);
	};

	return (
		<Typography
			onClick={sortToggler}
			sx={{
				cursor: "pointer",
			}}
			variant={"subtitle1"}
			style={{
				display: "flex",
				alignItems: "center",
			}}
		>
			Sort price high to low
			{sort === "high" ? (
				<ArrowUpwardIcon />
			) : sort === "low" ? (
				<ArrowDownwardIcon />
			) : (
				""
			)}
		</Typography>
	);
};

export default React.memo(SortButton);

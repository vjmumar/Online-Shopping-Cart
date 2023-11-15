import { ChangeEvent, memo } from "react";
// Material UI
import { Input } from "@mui/material";
// Router
import { useSearchParams } from "react-router-dom";

const SearchForm = () => {
	// Router methods
	const [searchParams, setSearchParams] = useSearchParams();
	const searchedKeyword = searchParams.get("search");

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value: string = e.target.value;

		if (value) {
			searchParams.set("search", value);
		} else {
			searchParams.delete("search");
		}

		setSearchParams(searchParams);
	};

	return (
		<Input
			sx={{
				backgroundColor: "#F3F3F3",
				width: "100%",
				p: "13px 30px",
			}}
			disableUnderline
			onChange={handleOnChange}
			type="text"
			defaultValue={searchedKeyword}
			placeholder="Search Item"
		/>
	);
};

export default memo(SearchForm);

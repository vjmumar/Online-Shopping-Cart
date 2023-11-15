import { ChangeEvent, useEffect, useState } from "react";
// Material UI
import { Box, Input } from "@mui/material";
// Icons
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

interface IProps {
	// To add default number
	defaultNumber?: number;
	// To add disable the decrease button when user hits the minimumNumber range
	minimumNumber?: number;
	// To listen to the chanegs
	onChange?: (number: number) => void;
}

const QuantityRange = ({
	defaultNumber = 1,
	minimumNumber = 1,
	onChange,
}: IProps) => {
	const [number, setNumber] = useState(defaultNumber);

	const handleUpdateValue = (type: "increment" | "decrement") => {
		// We will update the state
		setNumber((prev) => {
			const newValue = type === "increment" ? ++prev : --prev;
			// Then call the onChange props
			onChange?.(newValue);
			// Finally update the state
			return newValue;
		});
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = Number(e.target.value);
		const newValue = value >= minimumNumber ? value : minimumNumber;
		// We will update the the state
		setNumber(newValue);
		// Then call the onChange props
		onChange?.(newValue);
	};

	/**
	 * Inside here we will update the number when the default number
	 * is updated.
	 */
	useEffect(() => {
		setNumber(defaultNumber);
	}, [defaultNumber]);

	return (
		<Box
			component="div"
			sx={{
				display: "flex",
				height: "20px",
			}}
		>
			<Box
				sx={{
					backgroundColor: "#CBCBCB",
					width: "18px",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
					pointerEvents: number === minimumNumber ? "none" : "",
					opacity: number === minimumNumber ? 0.7 : 1,
				}}
				onClick={() => handleUpdateValue("decrement")}
			>
				<RemoveIcon
					sx={{
						width: "8px",
						height: "8px",
					}}
				/>
			</Box>
			<Input
				type="number"
				disableUnderline={true}
				value={number}
				onChange={handleInputChange}
				sx={{
					width: "30px",
					border: "none",
					background: "white",
					fontSize: "10px",
					padding: 0,
					"& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
						{
							display: "none",
						},
				}}
				inputProps={{
					style: {
						textAlign: "center",
					},
				}}
			/>
			<Box
				sx={{
					backgroundColor: "#CBCBCB",
					width: "18px",
					height: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					cursor: "pointer",
				}}
				onClick={() => handleUpdateValue("increment")}
			>
				<AddIcon
					sx={{
						width: "8px",
						height: "8px",
					}}
				/>
			</Box>
		</Box>
	);
};

export default QuantityRange;

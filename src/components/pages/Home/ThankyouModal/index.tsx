import { memo, useContext } from "react";
// Components
import Modal from "@components/common/Modal";
// Material UI
import { Typography } from "@mui/material";
// Context
import { Context } from "@pages/Home/context";

const ThankyouModal = () => {
	const { isModalOpen, modalToggler } = useContext(Context);

	return (
		<Modal isOpen={isModalOpen} handleClose={modalToggler}>
			<Typography
				variant="h5"
				sx={{
					fontSize: {
						lg: "unset",
						xs: "20px",
					},
				}}
			>
				Thank you for purchasing
			</Typography>
		</Modal>
	);
};

export default memo(ThankyouModal);

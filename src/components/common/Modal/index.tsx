import { ReactNode } from "react";
// Material UI
import { Box, Modal as MaterialModal } from "@mui/material";
// Icons
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
	// To show/hide modal
	isOpen?: boolean;
	// To add something inside the modal
	children?: ReactNode;
	// To close the modal
	handleClose?: () => void;
}

const Modal = ({
	isOpen = false,
	handleClose = () => null,
	children,
}: IProps) => {
	return (
		<MaterialModal open={isOpen} onClose={handleClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					minWidth: {
						lg: "315px",
						xs: "300px",
					},
					minHeight: "200px",
					height: "auto",
					bgcolor: "background.paper",
					borderRadius: "10px",
					pt: 2,
					px: 4,
					pb: 3,
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				<CloseIcon
					onClick={handleClose}
					sx={{
						position: "absolute",
						top: "10px",
						right: "10px",
						cursor: "pointer",
					}}
				/>
				<Box>{children}</Box>
			</Box>
		</MaterialModal>
	);
};

export default Modal;

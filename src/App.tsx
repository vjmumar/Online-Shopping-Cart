// Router
import { Route, Routes } from "react-router-dom";
// Pages
import Home from "@pages/Home/index";
// Material UI
import { CssBaseline } from "@mui/material";
// Components
import Header from "@components/layouts/Header";

const App = () => {
	return (
		<>
			<CssBaseline />
			<Header />
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<h1>404 Page not found!</h1>} path="*" />
			</Routes>
		</>
	);
};

export default App;

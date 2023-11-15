import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Router
import { BrowserRouter } from "react-router-dom";
// Store
import { store } from "@store/index.ts";
// Redux
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
);

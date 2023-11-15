import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Router
import { BrowserRouter } from "react-router-dom";
// Store
import { store } from "@store/index.ts";
import { persistStore } from "@store/index.ts";
// Redux
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistStore}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);

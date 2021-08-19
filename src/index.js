import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Providers from "./Providers";
import { GlobalStyle } from "./Components/GlobalStyle/styles";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Providers>
				<App />
				<GlobalStyle />
			</Providers>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);

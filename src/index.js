import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Providers from './Providers';
import { GlobalStyle } from "./Components/GlobalStyle/styles";

ReactDOM.render(
	<React.StrictMode>
		<Providers>
			<BrowserRouter>
				<App />
                <GlobalStyle />
			</BrowserRouter>
		</Providers>
	</React.StrictMode>,
	document.getElementById("root")
);


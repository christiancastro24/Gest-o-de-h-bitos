import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle `

    :root {
        --background: #30336B;
        --black: #000;
        --pink: rgb(247, 37, 133);
        --lightGreen: #1FDED4;
        --lightBlue: #1C90B4;
        --purple: #7D69CB;
        --white: #FFF;
    }

    h1 {
        font-family: 'Oleo Script Swash Caps', cursive;
        font-size: 3rem;
    }
    

    body {
        background-color: var(--background);
        scrollbar-arrow-color:#000000;

    }
`
export const Window = styled.div`
	width: 75%;

	@media (max-width: 1000px) {
		margin-top: clamp(3rem, 15vw, 7rem);
	}
	@media (max-width: 580px){
        margin-top: 160px;
    };
`;
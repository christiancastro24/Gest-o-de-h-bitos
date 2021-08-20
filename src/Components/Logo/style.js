import styled from "styled-components";

const LogoContainer = styled.h1`
	color: white;
	font-size: 3.5rem;
	font-family: "Lobster", cursive;
	cursor: pointer;
	filter: drop-shadow(10px 8px 4px black);
	margin: 0 auto;

	.logo_d {
		color: var(--pink);
	}

	.logo_y {
		color: var(--lightGreen);
	}
`;

export default LogoContainer;

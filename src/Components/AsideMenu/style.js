import styled from "styled-components";

export const Container = styled.div`
	height: 100%;
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 0 1rem 0.2rem;
	overflow: hidden;
	box-sizing: border-box;
    /* position: relative; */

	/* Temp */
	/* border: 1px solid; */
	background: linear-gradient(
		to bottom,
		#30336b 0%,
		#6095b9 30%,
		#6095b9 80%,
		#30336b 100%
	);
`;

export const SubContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
export const Header = styled.div`
    width: 100%;
    height: auto;
`
export const Logo = styled.h1`
    
`;
export const Avatar = styled.img`
    width: 30%;
    box-sizing: border-box;
    border-radius: 100%;
    background-color: white;
    padding: .3rem;

`;

export const UserName = styled.h2`
    color: white;
    margin-top: .5rem;
`;

export const MenuItem = styled.div`
	background-color: ${(props) =>
		props.foq ? "var(--background)" : "#6095b9"};
	color: ${(props) => (props.foq ? "white" : "MidnightBlue")};
	height: auto;
	width: 100%;
	padding: 1rem 0;
	position: relative;
	border-radius: 20px 0 0 20px;
	cursor: pointer;
	margin: 0.5rem 0;
	font-weight: bold;
	font-size: 1.5rem;
	transition: all 280ms ease-in-out;

	&:hover {
		letter-spacing: ${(props) => (props.foq ? "unset" : "5px")};
	}
	&::before,
	&::after {
		border: 1px solid transparent;
		bottom: 0px;
		content: " ";
		display: block;
		margin: 0 auto;
		position: relative;
		transition: all 280ms ease-in-out;
		width: 0;
	}
	&:hover::after,
	&:hover::before {
		backface-visibility: hidden;
		border-color: ${(props) => (props.foq ? "transparent" : "#30336B")};
		transition: width 350ms ease-in-out;
		width: 70%;
	}
	&:hover::before {
		bottom: auto;
		top: 0;
		width: 70%;
	}

	& > b {
		display: ${(props) => (props.foq ? "unset" : "none")};
	}
`;

export const Menu = styled.div`
    width: 100%;
    height: auto;
    transform: translateY(-25%);
`;

export const Footer = styled.div`
	width: 100%;
	height: auto;
	cursor: pointer;
	color: white;
    z-index: 10;
	font-size: 1rem;
	position: relative;
	transition: all 280ms ease-in-out;

	&::before {
		content: " ";
        z-index: -10;
		position: absolute;
		right: 0;
		width: 0;
		height: 100%;
		background-color: var(--background);
		transition: width 350ms ease-in-out;
	}
	&:hover::before {
		width: 100%;
	}
`;

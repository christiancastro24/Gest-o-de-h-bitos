import styled from "styled-components";

const tamanhoAvatar = "clamp(3rem, 10vw, 6rem)";

export const Container = styled.div`
	height: 100%;
	width: 25%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 1rem 0rem;
	/* overflow: hidden; */
	box-sizing: border-box;
	background: linear-gradient(
		to bottom,
		#30336b 0%,
		#6095b9 30%,
		#6095b9 80%,
		#30336b 100%
	);

	@media (max-width: 1000px) {
		position: fixed;
		top: 0;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		flex-wrap: nowrap;
		width: 100%;
		height: clamp(3rem, 15vw, 7rem);
		padding: 0;
		background: linear-gradient(
			to right,
			#30336b 0%,
			#6095b9 30%,
			/* #6095b9 90%, */ #30336b 100%
		);
		h1 {
			margin: 0;
			margin-left: 1rem;
		}
	}
	@media (max-width: 580px) {
        flex-wrap: wrap;
        height: max-content;
        justify-content: space-around;
        padding-bottom: 1rem;

        h1 {
            flex-shrink: 0;
            width: 100%;
            
        }
    };
`;

export const SubContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
    padding-left: .5rem;

	@media (max-width: 1000px){
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        padding-right: 1rem;
        width: auto;
    };
`;

export const Header = styled.div`
	width: 100%;
	height: auto;

	@media (max-width: 1000px) {
		display: flex;
        flex-direction: row;
        width: max-content;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
	} ;
`;

export const Logo = styled.h1`
    color: white;
    font-family: 'Lobster', cursive;
`;

export const BurguerMenu = styled.div`
	display: none;
	place-items: center;
	border: 2px solid;
	border-radius: 100%;
	padding: 0.5rem;
    position: relative;

	& svg {
		font-size: 3rem;
	}
	@media (max-width: 1000px) {
        display: grid;
    };
`;

export const Avatar = styled.img`
	width: 30%;
	box-sizing: border-box;
	border-radius: 100%;
	background-color: white;
	padding: 0.3rem;
	cursor: pointer;

	&:hover {
		border: 2px solid #6095b9;
	}
	&:hover + div {
		display: grid;
	}
	@media (max-width: 1000px) {
		width: ${tamanhoAvatar};
	} ;
`;

export const MultiFrameContainer = styled.div`
	position: relative;
	width: auto;
	display: grid;
	place-items: center;

	@media (max-width: 1000px) {
		width: ${tamanhoAvatar};
	} ;
`;

export const UserName = styled.h2`
    color: white;
    margin-top: .5rem;
`;

export const MenuItem = styled.div`
	background-color: ${(props) => (props.foq ? "#1C90B4" : "#6095b9")};
	color: ${(props) => (props.foq ? "white" : "MidnightBlue")};
	height: auto;
	width: 100%;
	padding: 1rem 3rem;
	position: relative;
	border-radius: 20px;
	cursor: pointer;
	margin: 0.5rem 0;
	font-weight: bold;
	font-size: 1.6rem;
	transition: all 280ms ease-in-out;
	@media (min-width: 1000px) {
		background-color: ${(props) =>
			props.foq ? "var(--background)" : "#6095b9"};
		border-radius: 20px 0 0 20px;
		padding: 1rem 0;
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
	}
`;

export const Menu = styled.div`
	width: 100%;
	height: auto;
	transform: translateY(-25%);

	@media (max-width: 1000px) {
		display: ${(props) => (props.show ? "unset" : "none")};
		position: absolute;
		width: max-content;
		bottom: -20rem;
		left: 50%;
		background-color: #6095b9;
		box-sizing: border-box;
		border-radius: 20px;
		transform: translateX(-50%);
	}
	@media (max-width: 580px){
        bottom: -200%;
        left: 30%;
    };
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
	@media (max-width: 1000px) {
		display: none;
	} ;
`;

export const EditHover = styled.div`
	width: ${tamanhoAvatar};
	height: 101%;
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 100%;
	background-color: hsla(0, 0%, 0%, 0.5);
	display: none;
	place-items: center;
	color: white;
	cursor: pointer;

	&:hover {
		display: grid;
	}
	@media (min-width: 1000px){
        width: 30%;
    };
`;
// import styled from "styled-components";
import styled from 'styled-components';
import Login from "../../Assets/Images/login.svg";

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: stretch;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    text-align: center;
`;

export const Background = styled.div`
    @media(min-width: 1100px) {
        flex:1;
        background: url(${Login}) no-repeat center, var(--black);
        background-size: contain;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 40%;
`;

export const ContainerRegisterForm = styled.div`
	font-family: sans-serif;
	color: #fff;
	height: 724px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	@media (max-width: 450px) {
		width: 180%;
	}

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	input {
		width: 340px;
		height: 24px;
		padding-left: 6px;
	}

	input::placeholder {
		color: black;
		opacity: 1;
	}

	button {
		background-color: #b5179e;
		margin-top: 16px;
		width: 12rem;
		height: 3rem;
		color: #fff;
		border: none;
		border-radius: 0.4rem;
		font-size: 1.3rem;
		box-shadow: 5px 6px 10px -2px black;
		cursor: pointer;
	}

	button:hover {
		filter: var(--btnHover);
	}

	p {
		font-size: 1rem;
		width: 90%;
	}

	p > span > a {
		color: var(--lightGreen);
		text-decoration: none;
	}

	.invalid_username_message {
		top: 0%;
		right: 10%;
	}

	.invalid_password_message {
		top: 39%;
		right: 10%;
	}
`;
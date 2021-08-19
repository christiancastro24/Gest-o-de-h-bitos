import styled from "styled-components";

const ContainerRegisterForm = styled.div`
	font-family: sans-serif;
	color: #fff;
	height: 724px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h1 {
		color: var(--white);
	}

	@media (max-width: 450px) {
		width: 160%;
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
		width: 100%;
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
	}

	p > span > a {
		color: var(--lightGreen);
		text-decoration: none;
	}

	.title_D {
		color: var(--pink);
	}

	.title_Y {
		color: var(--lightGreen);
	}

	.invalid_username_message {
		top: 0;
		right: 10%;
	}

	.invalid_email_message {
		top: 26%;
		right: 10%;
	}

	.invalid_password_message {
		top: 51%;
		right: 10%;
	}
`;

export default ContainerRegisterForm;
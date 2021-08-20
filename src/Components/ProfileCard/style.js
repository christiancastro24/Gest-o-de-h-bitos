import styled from "styled-components";

const ProfileContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;

	@media screen and (max-width: 1450px) and (min-width: 1001px) {
		width: 95%;
		height: 100vh;
	}

	.profile_card {
		border-radius: 21px;
		background: linear-gradient(
			to bottom,
			#30336b 0%,
			#6095b9 30%,
			#6095b9 90%
		);
		box-shadow: 21px 21px 42px #13142b, -21px -21px 42px #4d52ab;
		width: 90%;
		max-width: 28rem;
		height: 320px;
		display: flex;
		flex-direction: column;
		border-radius: 4px;
		background-color: var(--lightBlue);
		justify-content: center;
		align-items: center;
		margin: 0 auto;

		@media screen and (max-width: 1450px) and (min-width: 1001px) {
			width: 95%;
			height: 100vh;
		}
	}

	.user_avatar {
		max-width: 180px;
		filter: drop-shadow(10px 5px 4px #000000);
	}

	h1 {
		color: white;
		text-transform: capitalize;
		filter: drop-shadow(10px 5px 4px #000000);
		animation: logoAnimation 6s ease-out infinite running;
	}

	@keyframes logoAnimation {
		0% {
			transform: rotate(0deg);
		}

		25% {
			transform: rotate(-5deg);
		}

		75% {
			transform: rotate(5deg);
		}

		100% {
			transform: rotate(0deg);
		}
	}

	.profile_footer {
		width: 100%;
		max-width: 1200px;
		text-align: right;
		margin-top: 100px;
	}

	.user_infos {
		margin: 0;
		font-weight: 500;
		font-size: 1rem;
		color: var(--white);
		font-weight: bold;
	}

	@media screen and (max-width: 1450px) and (min-width: 1001px) {
		.profile_footer {
			width: 100%;
			max-width: 1200px;
			text-align: right;
			margin-top: 3rem;
		}

		.user_infos {
			margin: 0;
			font-weight: 500;
			font-size: 1rem;
			color: var(--white);
			font-weight: bold;
		}
	}

	@media (max-width: 580px) {
		.profile_footer {
			width: 100%;
			max-width: 1200px;
			text-align: right;
			margin: 1rem;
		}
	}

	form {
		position: relative;
	}

	& input {
		margin: 8px auto;
		padding: 1rem;
		outline: none;
		border: none;
		height: 28px;
		width: 80%;
		border-radius: 2px;
	}

	input::placeholder {
		color: black;
	}

	.invalid_username_message {
		top: 20%;
		transform: translateX(220px);
	}

	.invalid_email_message {
		top: 43%;
		transform: translateX(225px);
	}

	@media screen and (max-width: 1450px) and (min-width: 1001px) {
		.invalid_username_message {
			top: 10%;
			transform: translateX(220px);
		}

		.invalid_email_message {
			top: 40%;
			transform: translateX(225px);
		}
	}

	@media screen and (max-width: 580px) and (min-width: 321px) {
		.invalid_username_message {
			top: 22%;
			transform: translateX(137px);
		}

		.invalid_email_message {
			top: 45%;
			transform: translateX(142px);
		}
	}

	@media (max-width: 320px) {
		.invalid_username_message {
			top: 22%;
			transform: translateX(125px);
		}

		.invalid_email_message {
			top: 45%;
			transform: translateX(130px);
		}
	}

	.fake_button {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #b5179e;
		margin: 16px 0;
		width: 128px;
		height: 2.5rem;
		color: #fff;
		border: none;
		border-radius: 0.4rem;
		font-size: 1.3rem;
		box-shadow: 5px 6px 10px -2px black;
		cursor: pointer;
		text-transform: uppercase;
		margin-left: 16px;

		&:hover {
			filter: var(--btnHover);
		}
	}

	.change_profile_buttons {
		display: flex;
		width: 100%;
	}

	@media (max-width: 1080px) {
		.profile_footer {
			text-align: center;
		}

		h1 {
			font-size: 2rem;
		}

		.user_avatar {
			width: 50%;
		}

		.user_infos {
			margin: 0;
			font-weight: 500;
			font-size: 1rem;
			color: var(--white);
			font-weight: bold;
		}

		.change_profile_buttons button,
		.change_button,
		.change_profile_buttons .fake_button {
			width: 92px;
			font-size: 1rem;
		}
	}
`;

export default ProfileContainer;

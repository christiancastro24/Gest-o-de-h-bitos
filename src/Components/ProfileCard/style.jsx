import styled from "styled-components";

const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0 auto;
    

    .profile_card {
        border-radius: 21px;
        background: linear-gradient(145deg, #333772, #2b2e60);
        box-shadow:  21px 21px 42px #13142b,
                    -21px -21px 42px #4d52ab;
        width: 90%;
        max-width: 28rem;
        height: 340px;
        display: flex;
        flex-direction: column;
        border-radius: 4px;
        background-color: var(--lightBlue);
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }

    .profile_footer {
            background-color: #6b64642f;
            width: 100%;
            max-width: 1200px;
            text-align: right;
        }

    form {
        position: relative;
    }

    & input {
        margin: 4px auto;
        outline: none;
        border: none;
        height: 24px;
        width: 80%;
    }

    input::placeholder {
            color: black;
        }

    button {
        width: 8rem;
    }

    .invalid_password_message {
        top: 34%;
        right: 55%;
    }

    .invalid_username_message {
        top: 21%;
        right: 15%;
    }

    @media (max-width: 1080px) {
        .profile_footer {
            text-align: center;
        }
    }
`

export default ProfileContainer;
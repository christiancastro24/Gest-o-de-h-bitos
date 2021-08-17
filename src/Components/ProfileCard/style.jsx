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

    h1 {
            color: white;
            text-transform: capitalize;
        }


    .profile_footer {
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
        height: 28px;
        width: 80%;
        border-radius: 2px;
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

    .fake_button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #B5179E;
        margin: 16px 0      ;
        width: 128px;
        height: 3rem;
        color: #fff;
        border: none;
        border-radius: .4rem;
        font-size: 1.3rem;
        box-shadow: 5px 6px 10px -2px black;
        cursor: pointer;
        text-transform: uppercase;
        margin-left: 16px;

        &:hover{
            filter: var(--btnHover)
        }
    }

    .change_profile_buttons {
        display: flex;
        width: 100%;
    }
    
    .delete_button {
        width: 104px;
        height: 2rem;
        background-color: #ac1919;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: var(--white);

        &:hover {
            filter: var(--btnHover)
        }
    }
    @media (max-width: 1080px) {
        .profile_footer {
            text-align: center;
        }
    }
`

export default ProfileContainer;
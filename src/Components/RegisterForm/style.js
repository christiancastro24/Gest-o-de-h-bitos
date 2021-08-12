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

    form {
        width: 100%;
        height: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        background-color: #B5179E;
        margin-top: 16px;
        width: 12rem;
        height: 3rem;
        color: #fff;
        border: none;
        border-radius: .4rem;
        font-size: 1.3rem;
        box-shadow: 5px 6px 10px -2px black;
    }

    p {
        font-size: 1.4rem;
    }

    p > span > a {
        color: #1FDED4;
        text-decoration: none;
    }

    .title_D {
        color: var(--pink);
    }

    .title_Y {
        color: var(--lightGreen)
    }
`

export default ContainerRegisterForm;
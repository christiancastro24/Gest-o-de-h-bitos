import styled from "styled-components";

const CreateGroupContainer = styled.div`
    background-color: var(--purple);
    border-radius: .4rem;
    width: 260px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    input {
            margin: 8px auto;
            border-radius: 2px;
            border: none;
            padding: 4px;
            font-weight: bold;
            width:14rem;
            outline: none;
    }

    button {
        width: 11rem;
        border: none;
        background-color: #0095F6;
        color: var(--white);
        font-weight: bold;
        border-radius: 2px;
        margin-top: 60px;
        height: 32px;
        cursor: pointer;
    }

    input::placeholder {
        color: black;
        text-align: center;
    }
`

export default CreateGroupContainer;
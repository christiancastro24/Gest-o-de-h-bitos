import styled from "styled-components";

const CreateGroupContainer = styled.div`
    background-color: #7D69CB;
    border-radius: .4rem;
    width: 280px;
    height: 424px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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
            width:88%;
    }

    button {
        width: 132px;
        border: none;
        background-color: #0095F6;
        color: #fff;
        font-weight: bold;
        border-radius: 2spx;
        margin-top: 60px;
        height: 32px;
    }

    input::placeholder {
        color: black;
        opacity: 1;
        text-align: center;
    }
`

export default CreateGroupContainer;
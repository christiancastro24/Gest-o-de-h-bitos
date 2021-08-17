import styled from "styled-components";

const ConfirmationPopupContainer = styled.div`
    width: 340px;
    height: 240px;
    background-color: var(--white);
    border-radius: 4px;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
        font-size: 1.5rem;
        font-weight: bold;
    }

    button {
        width: 6rem;
        height: 2rem;
        background-color: #df0e6f;
        border: none;
        margin: 4px;
        cursor: pointer;
        color: var(--white);
        border-radius: 4px;

        &:hover {
            filter: var(--btnHover)
        }
    }

    .yes_button {
        background-color: red;
    }

    .no_button {
        background-color: black;
    }
`

export default ConfirmationPopupContainer;
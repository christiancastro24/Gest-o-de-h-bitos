import styled from "styled-components";

const ConfirmationPopupContainer = styled.div`
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    width: 340px;
    height: 240px;
    background-color: var(--white);
    border-radius: 4px;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    
    p {
        font-weight: 500;
        font-size: 1.25rem;
    }

    button {
        text-transform: uppercase;
        font-weight: 500;
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
        background-color: #f50057;
    }

    .no_button {
        background-color: #3f51b5;
    }
`

export default ConfirmationPopupContainer;
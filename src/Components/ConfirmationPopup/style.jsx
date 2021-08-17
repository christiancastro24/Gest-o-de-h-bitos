import styled from "styled-components";

const ConfirmationPopupContainer = styled.div`
    width: 340px;
    height: 240px;
    background-color: blanchedalmond;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 6rem;
        height: 2rem;
        background-color: #df0e6f;
        border: none;
        margin: 4px;
        cursor: pointer;
    }
`

export default ConfirmationPopupContainer;
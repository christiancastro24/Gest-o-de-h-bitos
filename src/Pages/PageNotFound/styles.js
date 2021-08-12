import styled from "styled-components";

export const ContainerNotFound = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 5%;


    h2 {
        color: var(--white);  
        font-family: monospace;
        text-align: center;
    }

    img {
        height: 60vh;
        width: 60vw;
    }

    button {
        height: 2.5rem;
        width: 17rem;
        border: none;
        color: var(--white);
        background-color: var(--purple);
    }
`;
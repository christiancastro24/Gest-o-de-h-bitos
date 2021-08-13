import styled from "styled-components"


export const ContainerSearch = styled.section `
    margin: 2%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    height: 5rem;
    border-radius: 10px;
    
    input {
        height: 2.2rem;
        width: 20rem;
        border-radius: 10px;
        margin-top: 0.5rem;
        outline: none;
    }

    span:nth-child(4) {
        padding-left: 1rem;
    }
    button {
        background-color: #0095F6;
        color: var(--white);
        font-weight: bold;
        margin: 0.5rem;
        height: 2rem;
    }

    button:nth-child(4) {
        background-color: red;
        color: var(--white);
        font-weight: bold;
        margin: 0.5rem;
    }
`

export const ContainerItemsSearch = styled.section `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--lightGreen);
    padding: 0.4rem;
    max-width: 32rem;
    margin: 0 auto;
    text-align: center;

    button {
        background-color: #0095F6;
        color: var(--white);
        font-weight: bold;
        margin: 0.5rem;
        height: 2rem;
    }
`

export const Container = styled.section`
    margin: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const ContainerGroup = styled.div `
    width: 12rem;
    height: 13rem;
    background-color: var(--lightGreen);
    margin: 1rem;
    border-radius: 3rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
        width: 75%;
        display: block;
        margin: 0 auto;
        border: none;
        border-radius: 8px;
        background-color: #0095F6;
        color: var(--white);
        font-weight: bold;
    }
`
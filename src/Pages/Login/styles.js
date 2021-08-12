import styled from "styled-components"

export const ContainerLogin = styled.form `

    h1 {
        color: var(--white);
    }

        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin: auto;

        a {
            color: #0095;
        }

        svg {
            position: relative;
            top: -0.10rem;
            left: -0.2rem;
        }

        h1 {
            font-family: 'Oleo Script Swash Caps', cursive;
            font-size: 3rem;
            margin-top: 4.5rem;
        }

        img {
            height: 65vh;
            position: relative;
            top: 8rem;
            left: 1rem;
        }

        p {
            font-size: 1rem;
            color: var(--white);
            text-align: center;
        }

        a {
            color: #0095f6;
        }
`


export const ContainerInput = styled.section `

    @media (min-width: 300px) and (max-width: 1299px) {
        margin-left: -1rem;
        margin-top: 3rem;
        
    input {
        width: 10rem;
    }

    }
    margin-left: 10rem;
    margin-top: -6rem;

    input {
        width: 14rem;
    }

    h1 {
        text-align: center;
        font-size: 3.8rem;
    }

    button {
        display: block;
        margin: 0.5rem auto;
        background-color: var(--pink);
        color: var(--white);
        font-weight: bold;
        width: 9rem;
        height: 2.5rem;
    }

`

export const Image = styled.div`
    background-color: #282c34;
    height: 100vh;
    width: 70rem;
    margin-left: 10rem;
    overflow: hidden;

    @media (min-width: 300px) and (max-width: 1300px) {
        display: none;
        
    }
`
import styled from "styled-components";

export const ContainerLogin = styled.form `
    width: 100%;
    text-align: center;

    h1 {
        color: var(--white);
    }

        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;

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
            height: 75vh;
            position: relative;
            top: 6rem;
            left: 1rem;
        }

        p {
            font-size: 1rem;
            color: var(--white);
            text-align: center;
        }

        a {
            padding-top: 1rem;
            color: var(--lightGreen);
        }
`

export const ContainerInput = styled.section `
    display: grid;
    place-items: center;
    justify-content: center;
    margin: 0 auto;


    @media (min-width: 300px) and (max-width: 1299px) {
        margin: 0 auto;

        .container-teste {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 auto;
    }

    input {
        width: 7rem;
    }

    
    h1 {
        text-align: center;
        font-size: 3rem;
    }
}
`

export const Image = styled.div`
    background-color: #000;
    height: 100vh;
    width: 60%;
    display: grid;
    place-items: stretch;
    overflow: hidden;

    @media (min-width: 300px) and (max-width: 1300px) {
        display: none;
    }
`
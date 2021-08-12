import styled from "styled-components";

export const ContainerHome = styled.section`
        
    color: var(--white);

    @media (min-width: 280px) and (max-width: 1109px) {
        display: flex;
        margin: 20.5% 2rem;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        h2 {
            font-size: 3rem;
            text-align: center;
            font-family: 'Lobster', cursive;
        }

        img {
            display: none;
        }
    }

    @media (min-width: 561px) and (max-width: 1110px) {

        display: flex;
        margin: 7.5% 2rem;
        align-items: center;
        flex-direction: column;
        justify-content: center;

        img {
            display: none;
        }

        h2 {
            font-size: 3.5rem;
            text-align: center;
            font-family: 'Lobster', cursive;
        }
    }

    @media (min-width: 1111px) {
        color: var(--white);
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 8.5% 0;

        h2 {
            font-size: 3.8rem;
            letter-spacing: 8px;
            font-family: 'Lobster', cursive;
        }
        
        img {
            height:  60vh;
        }
    }
`

export const ContainerAbout = styled.section`

    @media (min-width: 280px) and (max-width: 560px) {
        
        p {
            width: 17.5rem;
            font-weight: bold;
            text-align: center;
            font-family: Arial;
        }
    }

    @media (min-width: 561px) and (max-width: 885px) {
        p {
            width: 35rem;
            font-weight: bold;
            text-align: center;
        }
    }

    @media (min-width: 886px) {
        p {
            width: 22rem;
            font-weight: bold;
            text-align: center;
            font-family: Arial;
        }
        display: flex;
        flex-direction: column; 
}

`

export const ContainerButton = styled.section`

    button:hover {
        filter: brightness(90%);
    }

    button:nth-child(1) {
        background-color: var(--pink);
    }   

    button:nth-child(2) {
        background-color: var(--purple);
    }

    @media (min-width: 280px) and (max-width: 885px) {

        display: flex;

        button {
            width: 8rem;
            height: 40px;
            margin: 1rem auto;
            color: var(--white);
        }
    }


    @media (min-width: 886px) {
        button {
            width: 9rem;
            height: 45px;
            margin: 1.5rem 0.5rem;
            color: var(--white);
        }
        
        display: flex;
        flex-direction: row;
        border-radius: 10px;      
}

`
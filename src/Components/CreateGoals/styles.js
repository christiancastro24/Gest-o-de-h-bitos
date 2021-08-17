import styled from "styled-components"

export const ContainerPopUp = styled.div`
        
        input {
        height: 2.2rem;
        width: 95%;
        border-radius: 10px;
        margin-top: 0.5rem;
        outline: none;
        
        }

        h3 {
            color: var(--white);
        }

        input {
            height: 3rem;
            border: 2px solid var(--pink);
            color: black;
        }

        button {
            cursor: pointer;
            color: var(--white);
        }
        
        button:nth-child(1) {
            margin-left: auto;
            height: 1.8rem; 
            width: 2rem;
            background-color: var(--pink);
        }
        
        button:nth-child(5) {
            display: block; 
            margin: 1.5rem auto;
            border-radius: 4%;
            width: 85%;
            height: 2.5rem;
            background-color: transparent;
            border: 1px solid var(--pink);
            box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0.4);
        }

        button:hover {
            background-color: var(--pink);
        }


    @media (min-width: 300px) and (max-width: 767px) {
        display: flex; 
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        border-radius: 1rem;
        width: 17rem; 
        height: 19rem; 
        background-color: rgb(19, 15, 64);
        position: absolute; 
        top: 25%;
        left: 10%; 
        z-index: 1000;
    }



    @media (min-width: 768px) {

        display: flex; 
        flex-direction: column;
        width: 22rem; 
        height: 22rem; 
        background-color: rgb(19, 15, 64);
        position: absolute; 
        top: 25%;
        left: 38%; 
        padding: 0.3rem;
        justify-content: center; 
        align-items: center;
        border-radius: 1rem;
        padding: 1rem;    
    }
        `
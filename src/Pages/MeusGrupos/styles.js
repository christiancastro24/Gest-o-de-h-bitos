import styled from "styled-components"


export const ContainerAll = styled.section `
    h1 {
        color: white;
        text-align: center;
        font-family: Helvetica;
    }
`

export const ContainerSearch = styled.section `
    
    input {
        height: 2.2rem;
        width: 95%;
        border-radius: 10px;
        margin-top: 0.5rem;
        outline: none;
        
    }
    
    span:nth-child(4) {
        padding-left: 1rem;
    }
    
    button {
        background-color: rgba(255,25,244,0.4);
        color: var(--white);
        font-weight: bold;
        margin-left: auto;
        margin-right: 2rem;
        margin-bottom: 0.2rem;
        height: 3rem;
        width: 3rem;
        font-size: 1.1rem;
        display: block;
        border-radius: 35rem;
        cursor: pointer;
    }
`

export const ContainerPopUp = styled.div`

        input {
            height: 3rem;
            border: 2px solid var(--pink);
        }
        
        button:nth-child(1) {
            margin-left: auto;
            height: 1.8rem; 
            width: 2rem;
            background-color: var(--pink);
        }
        
        button:nth-child(6) {
            display: block; 
            margin: 1.5rem auto;
            border-radius: 4%;
            width: 85%;
            height: 2.5rem;
            background-color: transparent;
            border: 1px solid var(--pink);
            box-shadow: 0 0 2px 5px rgba(0, 0, 0, 0.4);
        }

        button:nth-child(5):hover {
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

export const Container = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-height: 85vh;
    background-color: #000;
    color: var(--white);
    overflow-y: scroll;
    margin-top: 0;

    @media (min-width: 300px) and (max-width:508px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20rem;
        margin: 0 -2rem;
    }

   
`
export const ContainerGroup = styled.div `
    width: 100%;
    display: flex;
    margin: 0.8rem;
    margin-top: 10px;
    border-radius: 8px;
    justify-content: space-around;
    background-color: #30336B;
    align-items: center;
    box-shadow: 5px 1px 5px 3px rgba(155, 155, 220);
    box-sizing: border-box;

    .btn-add-actvi {
        background-color: #0095f7;
        margin-left: 0.2rem;
    }
    
    .Items {
        display: flex;
        flex-direction: column;
    }

    h2, h3 {
        color: var(--white);
        padding-left: 1rem;
    }

    button {
        width: 25%;
        height: 3rem;
        display: block;
        margin-left: auto;
        border: none;
        border-radius: 8px;
        background-color: var(--pink);
        font-weight: bold;
        color: var(--white);
        cursor: pointer;
    }

    .btn-info {
        width: 9%;
        margin-right: 1rem;
    }

    button:hover {
        filter: brightness(90%);
    }
`
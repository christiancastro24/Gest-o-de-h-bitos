import styled from "styled-components";

export const ContainerPopUp = styled.div`
  border-radius: 0.2rem;
  border: 2px solid var(--white);
  gap: 1rem;

  input {
    width: 75vw;
    height: 2vh;
    border: 2px solid var(--white);
    border-radius: 0.2rem;
    background-color: var(--white);
  }

  h3 {
    font-size: 1.8rem;
    color: var(--white);
  }

  button:nth-child(1) {
    left: 6rem;
  }

  button {
    cursor: pointer;
    color: var(--white);
  }

  @media (min-width: 300px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.2rem;
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
    border-radius: 0.2rem;
    padding: 1rem;
  }
`;

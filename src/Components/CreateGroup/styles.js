import styled from "styled-components";

export const ContainerPopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
  border: 2px solid var(--white);
  width: 17rem;
  height: 19.5rem;
  background-color: rgb(19, 15, 64);
  position: absolute;
  top: 25%;
  left: 10%;
  z-index: 1000;
  gap: 1rem;

  input {
    border-radius: 0.1rem;
    background-color: var(--white);
  }

  h4 {
    font-size: 2rem;
    color: var(--white);
  }

  button:nth-child(1) {
    width: 0;
    bottom: 0.6rem;
    left: 6rem;
  }

  button:nth-last-child() {
    cursor: pointer;
    color: var(--white);
    width: 37vw;
  }

  @media (min-width: 375px) {
    left: 3.3rem;
  }

  @media (min-width: 425px) {
    left: 4.6rem;
  }

  @media (min-width: 768px) {
    left: 16rem;
  }

  @media (min-width: 1024px) {
    left: 31.5rem;
  }

  @media (min-width: 1440px) {
    left: 47.5rem;
  }

  @media (min-width: 1866px) {
    left: 64.5rem;
  }
`;

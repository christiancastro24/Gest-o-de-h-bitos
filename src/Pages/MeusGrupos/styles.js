import styled from "styled-components";

export const ContainerGoalsAndAct = styled.div`
  position: absolute;
  z-index: 1000;
  overflow-y: scroll;
  background-color: rgb(19, 15, 64);
  color: var(--white);
  height: 100vh;
  width: 100vw;
  border-radius: 7px;
  border: 2px solid var(--white);
  top: 18.5rem;

  h2 {
    margin: 1rem 0;
    color: var(--white);
  }

  h4 {
    color: var(--white);
  }

  .group-actv {
    padding: 1rem 0;
    border-bottom: 1px solid var(--pink);
  }

  button {
    margin-top: 0.5rem;
    margin-left: 0.5rem;
  }

  input {
    background-color: var(--white);
  }

  @media (min-width: 768px) {
    width: 50vw;
    top: 15rem;
  }

  @media (min-width: 1024px) {
    height: 60vh;
    width: 30vw;
    top: 8rem;
  }
`;

export const ContainerAll = styled.section`
  h1 {
    color: white;
    text-align: left;
    font-size: 2.2rem;
    text-decoration: underline;
    letter-spacing: 1.2px;
    padding-left: 2.5rem;
    font-family: "Georama", sans-serif;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerPopUp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.1rem;
  border: 2px solid var(--white);
  width: 17rem;
  height: 18rem;
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
`;

export const Container = styled.section`
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  max-height: 85vh;
  background-color: #000;
  color: var(--white);
  margin-top: 0;
  overflow-y: scroll;

  button {
    width: 55vw;
  }

  button:last-child {
    width: 20vw;
  }

  @media (min-width: 425px) {
    width: 87vw;

    button:nth-last-child(1) {
      width: 10vw;
    }
  }

  @media (min-width: 768px) {
    button {
      width: 23vw;
    }
  }

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    max-height: 85vh;
    background-color: #000;
    color: var(--white);
    overflow-y: scroll;
    overflow-x: hidden;
    margin-top: 0;

    button:nth-last-child(1) {
      width: 17vw;
    }
  }
`;

export const ContainerGroup = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 0.8rem;
  margin-top: 10px;
  border-radius: 8px;
  background-color: #30336b;
  box-shadow: 5px 1px 5px 3px rgba(155, 155, 220);
  box-sizing: border-box;
  align-items: center;
  padding: 0.5rem;
  gap: 0.5rem;

  h2,
  h3 {
    color: var(--white);
    padding-left: 1rem;
  }

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 72vw;
    justify-content: space-between;
  }
`;

export const ContainerMyGroups = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;

  h2 {
    color: var(--white);
  }
`;

export const ContainerPopUpInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  position: absolute;
  border: 2px solid var(--white);
  width: 17rem;
  height: 13rem;
  background-color: rgb(19, 15, 64);
  z-index: 1010;
  top: 20rem;
  left: 1.5rem;

  h4 {
    font-size: 1.4rem;
    color: var(--white);
  }

  input {
    background-color: var(--white);
    font-size: 1rem;
    padding: 0.5rem;
  }

  button {
    width: 0px;
    margin: 0.8rem 0;
  }

  button:nth-child(1) {
    left: 6rem;
    bottom: 0.8rem;
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

export const Atividades = styled.h4``;

export const ContainerTextDesktop = styled.div`
  @media (min-width: 1024px) {
    width: 50vw;
    text-align: left;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    button {
      width: 17vw;
    }
  }
`;

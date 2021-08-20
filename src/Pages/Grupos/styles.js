import styled from "styled-components";

export const ContainerSearch = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  height: 4rem;
  border-radius: 10px;
  width: 95%;
  margin: 1rem auto;

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
    background-color: var(--pink);
    color: var(--white);
    font-weight: bold;
    margin-left: 0.2rem;
    height: 2rem;
    border-radius: 100%;
    width: 3rem;
    cursor: pointer;
  }

  button:nth-child(3) {
    background-color: var(--pink);
    color: var(--white);
    font-weight: bold;
    margin: 0.2rem;
  }
`;

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

  button:nth-child(5) {
    display: block;
    margin: 1.5rem auto;
    border-radius: 4%;
    width: 70%;
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
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 22rem;
    height: 22rem;
    background-color: rgb(19, 15, 64);
    position: absolute;
    top: 25%;
    left: 42%;
    padding: 0.3rem;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    padding: 1rem;
  }
`;

export const ContainerItemsSearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--lightGreen);
  padding: 0.8rem;
  max-width: 32rem;
  margin: 0 auto;
  text-align: center;

  button {
    background-color: #0095f6;
    color: var(--white);
    font-weight: bold;
    margin: 0.5rem;
    height: 2rem;
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
    width: 26vw;
    height: 4vh;
  }

  @media (min-width: 425px) {
    width: 87vw;
  }

  @media (min-width: 768px) {
    button {
      width: 11vw;
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
  }
`;

export const ContainerGroup = styled.div`
  width: 90vw;
  height: 35vh;
  display: flex;
  justify-content: space-between;
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

  @media (min-width: 425px) {
    width: 80vw;
  }

  @media (min-width: 768px) {
    width: 40vw;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 72vw;
    height: 18vh;
    justify-content: space-between;
  }
`;

export const ContainerGoalsAndAct = styled.div`
  position: absolute;
  z-index: 1000;
  overflow-y: scroll;
  background-color: rgb(19, 15, 64);
  color: var(--white);
  height: 50vh;
  width: 100vw;
  border-radius: 7px;
  top: 19rem;
  border: 2px solid var(--white);

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

  @media (min-width: 425px) {
    width: 70vw;
  }

  @media (min-width: 768px) {
    top: 15rem;
    width: 40vw;
  }

  @media (min-width: 1024px) {
    top: 8rem;
    height: 50vh;
    width: 30vw;
  }
`;

export const Loading = styled.span`
  color: ${(props) => (props.visible ? "white" : "var(--background)")};
`;

export const ContainerTextDesktop = styled.div`
  height: 25vh;
  width: 38vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 1024px) {
    width: 50vw;
    text-align: left;
    justify-content: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  @media (min-width: 1024px) {
    flex-direction: column;
  }
`;

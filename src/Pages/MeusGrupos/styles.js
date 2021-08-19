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
  border: 2px solid var(--white);
  input {
    height: 3rem;
    border: 2px solid var(--pink);
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
    position: fixed;
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
`;

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
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
  @media (min-width: 300px) and (max-width: 508px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20rem;
    margin: 0 -2rem;
  }
`;
export const ContainerGroup = styled.div`
  width: 100%;
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

  .Items {
    display: flex;
    flex-direction: column;
  }

  h2,
  h3 {
    color: var(--white);
    padding-left: 1rem;
  }
`;

export const ContainerMyGroups = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 0.5rem;
`;

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
  margin: 0.8rem;
  margin-top: 10px;
  border-radius: 8px;
  justify-content: space-around;
  background-color: #30336b;
  align-items: center;
  box-shadow: 5px 1px 5px 3px rgba(155, 155, 220);
  box-sizing: border-box;

  h2,
  h3 {
    color: var(--white);
    padding-left: 1rem;
  }

  .Items {
    display: flex;
    flex-direction: column;
  }

  button:nth-child(2) {
    width: 25%;
    height: 3rem;
    display: block;
    margin-left: auto;
    margin-right: 1rem;
    border: none;
    border-radius: 8px;
    background-color: var(--pink);
    font-weight: bold;
    color: var(--white);
    cursor: pointer;
  }

  button:nth-child(3) {
    width: 10%;
    height: 1.7rem;
    border: none;
    border-radius: 8px;
    background-color: var(--lightBlue);
    font-weight: bold;
    color: var(--white);
    cursor: pointer;
  }

  button:hover {
    filter: brightness(90%);
  }
`;

export const ContainerGoalsAndAct = styled.div`
  position: absolute;
  top: 5rem;
  left: 30%;
  z-index: 1000;
  overflow-y: auto;
  background-color: rgb(19, 15, 64);
  width: 30rem;
  border-radius: 5%;
  text-align: center;
  max-height: 100vh;
  padding: 1rem;

  .group-actv {
    color: white;
    border-bottom: 2px solid var(--pink);
    margin: 0.2rem;
  }

  h4 {
    color: var(--white);
  }

  .btn-delete {
    background-color: var(--pink);
    color: var(--white);
    cursor: pointer;
  }

  button:nth-child(1) {
    display: block;
    margin-left: auto;
    background-color: var(--pink);
    color: var(--white);
    cursor: pointer;
  }
`;

export const Loading = styled.span`
  color: ${(props) => (props.visible ? "white" : "var(--background)")};
`;

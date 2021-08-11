import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;


    /* Temp */
    border: 1px solid;
    background-color: gray;
`;

export const Header = styled.div`
    width: 100%;
`
export const Logo = styled.img`
    align-self: flex-start;
`;
export const Avatar = styled.img`
    width: 30%;

`;

export const UserName = styled.h2`
    color: white;
`;

export const MenuItem = styled.div`
    color: white;
    height: auto;
    width: 100%;
`;

export const Menu = styled.div`
    width: 100%;
    height: auto;
`;

export const Logout = styled.div`
	width: 100%;
	height: auto;
`;
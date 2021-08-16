import styled from 'styled-components';
import Register from "../../Assets/Images/register.svg";

export const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: stretch;
    width: 100%;
    justify-content: center;
    overflow: hidden;
`;

export const Background = styled.div`
    @media(min-width: 1100px) {
        flex:1;
        background: url(${Register}) no-repeat center, var(--black);
        background-size: contain;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 40%;
`;
import styled from "styled-components";

export const Container = styled.div`
    min-height: 70%;
    position: relative;

    /* temp */
    border: 1px solid red;
    margin: 0 auto;
    min-width: 50%;
    max-width: 90%;
`

export const ListItem = styled.div`
    width: 100%;
    height: auto;
`

export const Title = styled.span `
    text-decoration: ${props=> props.done ? 'line-through' : 'none'};
`
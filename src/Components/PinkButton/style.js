import styled from "styled-components";

const PinkButtonContainer = styled.button`
        background-color: #B5179E;
        /* margin-top: 16px; */
        margin: 16px 0      ;
        width: 12rem;
        height: 3rem;
        color: #fff;
        border: none;
        border-radius: .4rem;
        font-size: 1.3rem;
        box-shadow: 5px 6px 10px -2px black;
        cursor: pointer;
        text-transform: uppercase;

    &:hover {
        filter: var(--btnHover);
    }
`

export default PinkButtonContainer;
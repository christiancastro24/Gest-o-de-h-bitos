
import styled from "styled-components";

const ContainerMessageBalloon = styled.span`
    position: absolute;
    background-color: red;
    color: #FFFFFF;
    font-size: .75rem;
    text-align: center;
    border-radius: 8px;
    padding: 4px;
    z-index: 1;
    right: -8%;
    margin: 0 auto;
    right: 50%;
    transform: translate(50%, -50%);

    &:after {
        content: '';
        position: absolute;
        display: block;
        width: 0;
        z-index: 1;
        border-style: solid;
        border-width: 6px 10px 0px 10px;
        border-color: red transparent transparent transparent;
        bottom: -6px;
        left: 50%;
        margin-left: -10.5px;
    }
`


export default ContainerMessageBalloon;
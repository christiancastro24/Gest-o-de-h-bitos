import { PinDropSharp } from "@material-ui/icons";
import styled from "styled-components";
import {css} from "styled-components";

const ContainerMessageBalloon = styled.span`
    position: absolute;
    background-color: red;
    color: #FFFFFF;
    font-family: Arial;
    font-size: .8rem;
    text-align: center;
    border-radius: 10px;
    padding: 7px;
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
        border-width: 20px 16px 0px 16px;
        border-color: red transparent transparent transparent;
        bottom: -10px;
        left: 50%;
        margin-left: -10.5px;
    }

    &.invalid_user_message {
        transform: translateX(180%);
        top: 2%;
    }

    &.invalid_email_message {
        top: 24%;
        transform: translateX(170%)

    }

    &.invalid_password_message {
        top: 46%;
        transform: translateX(190%)
    }    
`


export default ContainerMessageBalloon;
import PinkButtonContainer from "./style"

const PinkButton = ({text, onClick}) => {
    return (
        <PinkButtonContainer onClick = {onClick}>
            {text}
        </PinkButtonContainer>
    )
}

export default PinkButton;
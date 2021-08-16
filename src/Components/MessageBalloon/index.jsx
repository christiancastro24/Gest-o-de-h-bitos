import ContainerMessageBalloon from "./style"

const MessageBalloon = ({message, className}) => {
    return (
        <>
        <ContainerMessageBalloon className = {className}>
            {message}
        </ContainerMessageBalloon>
        </>
    )
}

export default MessageBalloon;
import ConfirmationPopupContainer from "./style";

const ConfirmationPopup = () => {
    return (
        <ConfirmationPopupContainer>
            <p>Tem certeza?</p>
            <div>
            <button>Sim</button>
            <button>Não</button>
            </div>
        </ConfirmationPopupContainer>

    )
}

export default ConfirmationPopup;
import ConfirmationPopupContainer from "./style";

const ConfirmationPopup = () => {
    return (
        <ConfirmationPopupContainer>
            <p>Tem certeza?</p>
            <div>
            <button className = "">Sim</button>
            <button>Não</button>
            </div>
        </ConfirmationPopupContainer>

    )
}

export default ConfirmationPopup;
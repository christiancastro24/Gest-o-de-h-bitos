import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import pageNotFound from "../../Assets/Images/pageNotFound.svg";
import { ContainerNotFound } from "./styles";

const PageNotFound = () => {

    const history = useHistory();

    return (
        <ContainerNotFound>
            <img src={pageNotFound} alt={pageNotFound} />
            <h2>Ops... parece que não existe nada aqui</h2>
            <Button variant="contained" onClick={() => history.push("/")}>HOME</Button>
        </ContainerNotFound>
    )
}

export default PageNotFound;
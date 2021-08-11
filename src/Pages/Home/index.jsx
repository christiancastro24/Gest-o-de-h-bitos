import { ContainerHome, ContainerAbout, ContainerButton } from "./styles";
import home from "../../Assets/Images/home.svg"
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom"


const HomePage = () => {

    const history = useHistory();

    return ( 
        <ContainerHome>
            <img src={home} alt={home} />

        <ContainerAbout>
            <h2><span style={{color: "var(--pink)"}}>D</span>evHealth<span style={{color: "var(--lightGreen)"}}>y</span></h2>

            <p>O DevHealthy é um Aplicativo que busca ajudar o Dev a criar seus hábitos e rotinas. podendo fazer parte de grupos para auxiliá-lo a manter o foco e a disciplina.
            </p>

        <ContainerButton>
            <Button variant="contained" onClick={() => history.push("/registerPage")}>Registre-se</Button>
            <Button variant="contained" onClick={() => history.push("/loginPage")}>Login</Button>
        </ContainerButton>

        </ContainerAbout>
        </ContainerHome>
     );
}
 
export default HomePage;
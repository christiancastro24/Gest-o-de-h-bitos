import { ContainerHome, ContainerAbout, ContainerButton } from "./styles";
import home from "../../Assets/Images/home.svg";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useAuthenticated } from "../../Providers/authentication";
import Logo from "../../Components/Logo";
import { motion } from 'framer-motion'

const HomePage = () => {
	const history = useHistory();

	const { authenticated } = useAuthenticated()

	if(authenticated) {
		history.push("/habits")
	}
	
	return (
		<motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
		<ContainerHome>
			<img src={home} alt={home} />

			<ContainerAbout>
				<Logo />
				<p>
					O DevHealthy é um Aplicativo que busca ajudar o Dev a criar
					seus hábitos e rotinas. podendo fazer parte de grupos para
					auxiliá-lo a manter o foco e a disciplina.
				</p>

				<ContainerButton>
					<Button
						variant="contained"
						onClick={() => history.push("/registerPage")}
					>
						Registre-se
					</Button>
					<Button
						variant="contained"
						onClick={() => history.push("/loginPage")}
					>
						Login
					</Button>
				</ContainerButton>
			</ContainerAbout>
		</ContainerHome>
	 </motion.div>
	);
};
export default HomePage;

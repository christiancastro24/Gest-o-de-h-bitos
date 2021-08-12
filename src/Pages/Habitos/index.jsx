import { useHistory } from "react-router-dom";
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useAuthenticated } from "../../Providers/authentication";

const HabitsPage = () => {

	const history = useHistory()

	const { authenticated } = useAuthenticated() 

	if(!authenticated) {
		history.push("/loginPage")
	}

	return (
		<>
			<AsideMenu />
			<Window >
            </Window>
		</>
	);
};

export default HabitsPage;

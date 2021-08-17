import { useHistory } from "react-router-dom";
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import HabitsList from "../../Components/HabitsList";
import { useAuthenticated } from "../../Providers/authentication";
import ActivitiesToDo from "../../Components/ActivitiesToDo";
import { Flex } from "./styles";

const HabitsPage = () => {

	const history = useHistory()

	const { authenticated } = useAuthenticated() 

	if(!authenticated) {
		history.push("/loginPage")
	}

	return (
		<>
			<AsideMenu />
			<Window>
				<Flex>
						<HabitsList />
					<ActivitiesToDo />
				</Flex>
			</Window>
		</>
	);
};

export default HabitsPage;

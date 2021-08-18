import { useHistory } from "react-router-dom";
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import HabitsList from "../../Components/HabitsList";
import { useAuthenticated } from "../../Providers/authentication";
import ActivitiesToDo from "../../Components/ActivitiesToDo";
import { Flex } from "./styles";
import 'react-calendar/dist/Calendar.css';
import Calendar from "react-calendar"
import { useState } from "react"

const HabitsPage = () => {

	const history = useHistory()

	const { authenticated } = useAuthenticated() 

	const [value, onChange] = useState(new Date());

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
				<div style={{display: "flex", justifyContent: "center"}}>
				<Calendar
					onChange={onChange}
					value={value}
				/>
				</div>
			</Window>
		</>
	);
};

export default HabitsPage;

import {
	Container,
	Title,
	ListItem,
	SectionTitle,
	Column,
	TableRow,
	ActionsColumn,
	Counter,
} from "../HabitsList/styles";

import { CircularProgress } from "@material-ui/core";
import { Tooltip, Fab } from "@material-ui/core";
import { Switch } from "antd";
import { CheckCircleOutline, ErrorOutline, DeleteForever } from "@material-ui/icons";
import { useGroups } from "../../Providers/groups";
import { useEffect, useState } from "react";
import Draggable from "react-draggable";
const ActivitiesToDo = () => {

    const { myGroups } = useGroups();
    const [appIsThinking, setAppIsThinking] = useState(false);
    const activities = myGroups.map(item => item.activities).filter(item=> item.length > 0).map(item=> item[0]);
    const [localActivitiesStore, setLocalActivitiesStore] = useState(JSON.parse(localStorage.getItem('localSaveActivities')) || {});
    const dateInfo = [new Date().getDate(), new Date().getMonth()];
    const [shouldReload, setShouldReload] = useState(false);
    
    
//     
    const handleRepeat = (activityId) => {
		if (!JSON.parse(localStorage.getItem("localSaveActivities"))) {
			return false;
		}
		const savedDate =
			JSON.parse(localStorage.getItem("localSaveActivities"))[
				activityId
			] || "";
		if (!savedDate) {
			return false;
		}
		if (savedDate[1] < dateInfo[1]) {
			return false;
		}
		if (savedDate[0] < dateInfo[0]) {
			return false;
		}
		return true;
	};

    const handleAddLocalActivitiesStore = (activityId) => {
        const temp = localActivitiesStore;
        temp[activityId] = dateInfo;
        localStorage.setItem("localSaveActivities", JSON.stringify(temp));
        setShouldReload(!shouldReload);
	}
    const handleUndoLocalStivitiesStore = (activityId) => {
        const rollBackDate = [
			new Date(new Date().setHours(-1)).getDate(),
			new Date(new Date().setHours(-1)).getMonth(),
		];
        const temp = localActivitiesStore;
        temp[activityId] = rollBackDate;
        localStorage.setItem("localSaveActivities", JSON.stringify(temp));
        setShouldReload(!shouldReload);
    }

	return (
		<Draggable>
			<Container>
				<SectionTitle>
					Atividades a realizar por seus grupos:
				</SectionTitle>
				<p>Para gerenciar seus grupos utilize o menu "Meus Grupos"</p>
				{appIsThinking ? (
					<CircularProgress
						style={{
							position: "absolute",
							top: "50%",
							right: "50%",
							transform: "translate(50%, -50%)",
						}}
						color="secondary"
					/>
				) : null}
				<TableRow>
					{activities.length > 0 && (
						<h3>Atividades para se realizar hoje:</h3>
					)}
					{activities.length > 0 &&
					activities.filter((item) => !handleRepeat(item.id))
						.length === 0 ? (
						<h5>Tudo certo por hoje! Relaxe e volte amanhã!</h5>
					) : null}

					{activities.length > 0 ? (
						activities
							.filter((item) => !handleRepeat(item.id))
							.map((item, ind) => (
								<ListItem key={ind}>
									<Column>
										<Title done={false}>{item.title}</Title>
										<Tooltip
											title="Quantas vezes você realizou essa tarefa."
											placement="top"
										>
											<Counter>
												{item.how_much_achieved}
											</Counter>
										</Tooltip>
									</Column>
									<ActionsColumn>
										<Switch
											checkedChildren={
												<CheckCircleOutline />
											}
											unCheckedChildren={<ErrorOutline />}
											disabled={false}
											checked={handleRepeat(item.id)}
											onClick={() =>
												handleAddLocalActivitiesStore(
													item.id
												)
											}
										/>
									</ActionsColumn>
								</ListItem>
							))
					) : (
						<h3>
							Você ainda não se inscreveu em nenhum grupo. No menu
							grupos você pode procurar por grupos que contenham
							atividades que lhe ajudem a desenvolver um hábito.
						</h3>
					)}
					{activities.length > 0 &&
					activities.filter((item) => handleRepeat(item.id)).length >
						0 ? (
						<h3>Atividades já completadas hoje:</h3>
					) : null}
					{activities.length > 0 &&
					activities.filter((item) => handleRepeat(item.id)).length >
						0
						? activities
								.filter((item) => handleRepeat(item.id))
								.map((item, ind) => (
									<ListItem key={ind}>
										<Column>
											<Title done={false}>
												{item.title}
											</Title>
											<Tooltip
												title="Quantas vezes você realizou essa tarefa."
												placement="top"
											>
												<Counter>
													{item.how_much_achieved}
												</Counter>
											</Tooltip>
										</Column>
										<ActionsColumn>
											<Switch
												checkedChildren={
													<CheckCircleOutline />
												}
												unCheckedChildren={
													<ErrorOutline />
												}
												disabled={false}
												checked={handleRepeat(item.id)}
												onClick={() =>
													handleUndoLocalStivitiesStore(
														item.id
													)
												}
											/>
										</ActionsColumn>
									</ListItem>
								))
						: null}
				</TableRow>
			</Container>
		</Draggable>
	);
};

export default ActivitiesToDo;

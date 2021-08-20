import {
	Container,
	Title,
	ListItem,
	Bold,
	SectionTitle,
	Column,
	TableRow,
	ActionsColumn,
	Counter,
	Cite,
} from "./styles";
import { useUserData } from "../../Providers/UserData";
import { Tooltip, CircularProgress, Button, Fab } from "@material-ui/core";
import api from "../../Services";
import { useState } from "react";
import toast from "react-hot-toast";
import AddHabit from "./AddHabit";
import {
	DeleteForever,
	Help,
	ErrorOutline,
	CheckCircleOutline,
} from "@material-ui/icons";
import { Switch } from "antd";
import DelConfirmation from "./DelConfirmation";
import Draggable from "react-draggable";

const frases = [
	<cite>
		"Não há progresso sem mudança. E, quem não consegue mudar a si mesmo,
		acaba não mudando coisa alguma." <Bold>George Bernard Shaw</Bold>
	</cite>,
	<cite>
		"Para mudar o mundo, você precisa antes mudar a sua cabeça."{" "}
		<Bold>Jimi Hendrix</Bold>
	</cite>,
	<cite>
		"Mude seus pensamentos e você mudará seu mundo."{" "}
		<Bold>Norman Vincent Peale</Bold>
	</cite>,
	<cite>
		"Que haja transformação, e que comece comigo."{" "}
		<Bold>Marilyn Ferguson</Bold>
	</cite>,
	<cite>
		"Só fazemos melhor aquilo que repetidamente insistimos em melhorar. A
		busca da excelência não deve ser um objetivo, e sim um hábito."{" "}
		<Bold>Aristóteles</Bold>
	</cite>,
	<cite>
		"Não podemos fazer tudo imediatamente, mas podemos fazer alguma coisa
		já." <Bold>Calvin Coolidge</Bold>
	</cite>,
	<cite>
		"Para mudar nossos hábitos, primeiro temos que assumir o compromisso
		profundo de pagar o preço que for necessário."{" "}
		<Bold>William James</Bold>
	</cite>,
	<cite>
		"As pessoas não podem mudar seus hábitos sem primeiro mudarem sua
		maneira de pensar." <Bold>Marie Kondo</Bold>
	</cite>,
	<cite>
		"Uma boa forma de mudar hábitos é desenvolver o hábito de melhorar
		hábitos." <Bold>Álex Rovira</Bold>
	</cite>,
	<cite>
		"É impressionante os resultados que temos quando nós propomos mudar
		nossos hábitos. Somos feitos de hábitos, construídos por pensamentos."{" "}
		<Bold>Henriki Borges</Bold>
	</cite>,
];
const getRandomFrase = () => {
	return frases[Math.round(Math.random() * (frases.length - 1))];
};

const HabitsList = () => {
	const { habits, token, recarregarDados, handleUpdateTimer } = useUserData();
	const [appIsThinking, setAppIsThinking] = useState(false);
	const dateInfo = [new Date().getDate(), new Date().getMonth()];
	const [open, setOpen] = useState(false);
	const [openDoneInfo, setOpenDoneInfo] = useState(false);
	const [openDelConfirmation, setOpenDelConfirmation] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleOpenDoneInfo = () => {
		setOpenDoneInfo(true);
		setTimeout(() => {
			setOpenDoneInfo(false);
		}, 2500); //delay para leitura
	};
	const handleOpenDelConfirmation = () => {
		setOpenDelConfirmation(!openDelConfirmation);
	};

	const handleDoneTask = (habitId, repeticoes) => {
		setAppIsThinking(true);
		api.patch(
			`/habits/${habitId}/`,
			{ achieved: true, how_much_achieved: `${repeticoes + 1}` },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		).then(() => {
			setTimeout(() => setAppIsThinking(false), 300);
			recarregarDados();
		});
		handleUpdateTimer(habitId, dateInfo);
	};
	const handleBackDoneTask = (habitId, repeticoes) => {
		setAppIsThinking(true);
		api.patch(
			`/habits/${habitId}/`,
			{ achieved: true, how_much_achieved: `${repeticoes - 1}` },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		).then(() => {
			setTimeout(() => setAppIsThinking(false), 300);
			recarregarDados();
		});
		handleUpdateTimer(habitId, [
			new Date(new Date().setHours(-1)).getDate(),
			new Date(new Date().setHours(-1)).getMonth(),
		]);
	};
	const handleDelete = (habitId) => {
		setAppIsThinking(true);
		api.delete(`/habits/${habitId}/`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(() => {
			setTimeout(() => setAppIsThinking(false), 300);
			recarregarDados();
			toast.success("Hábito removido");
		});
	};
	const handleRepeat = (habitId) => {
		if (!JSON.parse(localStorage.getItem("habitsLastUpdate"))) {
			return false;
		}
		const savedDate =
			JSON.parse(localStorage.getItem("habitsLastUpdate"))[habitId] || "";
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

	return (
		<Draggable>
			<Container>
				<SectionTitle>Seus Hábitos:</SectionTitle>
				<h3>Hábito e o Nº de vezes realizado:</h3>
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
					{habits.length > 0 ? (
						habits
							.filter((item) => !handleRepeat(item.id))
							.map((item, ind) => (
								<ListItem key={ind}>
									<Column>
										<Title done={handleRepeat(item.id)}>
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
											unCheckedChildren={<ErrorOutline />}
											disabled={handleRepeat(item.id)}
											checked={handleRepeat(item.id)}
											onClick={() =>
												handleDoneTask(
													item.id,
													item.how_much_achieved
												)
											}
										/>

										<Fab
											onClick={handleOpenDelConfirmation}
											size="small"
											color="secondary"
											style={{
												backgroundColor: "#d72a2a",
											}}
										>
											<DeleteForever
												style={{
													fontSize: "16px",
													color: "black",
												}}
											/>
										</Fab>

										<DelConfirmation
											itemId={item.id}
											handleOpenDelConfirmation={
												handleOpenDelConfirmation
											}
											handleDelete={handleDelete}
											openDelConfirmation={
												openDelConfirmation
											}
										/>
									</ActionsColumn>
								</ListItem>
							))
					) : (
						<h3>
							Clique no botão e adicione um hábito para monitorar!
						</h3>
					)}
				</TableRow>
				{habits &&
				habits.filter((item) => handleRepeat(item.id)).length > 0 ? (
					<h4>
						Volte amanhã para continuar a desenvolver esses hábitos:
						<Tooltip
							title="Seus hábitos são reiniciados diariamente, mantenha uma rotina para acumular repetições."
							placement="top"
							open={openDoneInfo}
							onClick={handleOpenDoneInfo}
							onMouseEnter={handleOpenDoneInfo}
						>
							<Help fontSize="small" />
						</Tooltip>
					</h4>
				) : null}
				<TableRow>
					{habits &&
						habits
							.filter((item) => handleRepeat(item.id))
							.map((item, ind) => (
								<ListItem key={ind}>
									<Column>
										<Title done={handleRepeat(item.id)}>
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
											unCheckedChildren={<ErrorOutline />}
											onClick={() =>
												handleBackDoneTask(
													item.id,
													item.how_much_achieved
												)
											}
											checked={handleRepeat(item.id)}
										/>
										<Fab
											onClick={handleOpenDelConfirmation}
											size="small"
											style={{
												backgroundColor: "#d72a2a",
											}}
										>
											<DeleteForever
												style={{ fontSize: "16px" }}
											/>
										</Fab>
										<DelConfirmation
											itemId={item.id}
											handleOpenDelConfirmation={
												handleOpenDelConfirmation
											}
											handleDelete={handleDelete}
											openDelConfirmation={
												openDelConfirmation
											}
										/>
									</ActionsColumn>
								</ListItem>
							))}
				</TableRow>
				<Cite>{getRandomFrase()}</Cite>
				<Button
					variant="contained"
					style={{ display: "block", margin: "0 auto" }}
					onClick={handleOpen}
				>
					Adicionar novo hábito
				</Button>
				<AddHabit open={open} handleClose={handleClose} />
			</Container>
		</Draggable>
	);
};

export default HabitsList;

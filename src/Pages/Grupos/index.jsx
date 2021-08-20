import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import {
	Container,
	ContainerButton,
	ContainerGoalsAndAct,
	ContainerGroup,
	ContainerTextDesktop,
	Loading,
} from "./styles";
import { ContainerAll } from "../MeusGrupos/styles";
import Pagination from "@material-ui/lab/Pagination";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useAuthenticated } from "../../Providers/authentication";

const GroupsPage = () => {
	const {
		handleInfo,
		isLoading,
		popUpActGoal,
		setPopUpActGoal,
		groups,
		handleSignIn,
		groupGoalsGroup,
		groupActivitiesGroup,
		setPage,
		totalPages,
	} = useGroups();

	const { authenticated } = useAuthenticated();
	const history = useHistory();

	if (!authenticated) {
		history.push("/loginPage");
	}
	const handleWidth = () => {
		//funções que controlam o tamanho do paginador
		return window.innerWidth > 570 ? 3 : 1;
	};
	const [countPageSize, setCountPageSize] = useState(handleWidth);

	window.addEventListener("resize", () => {
		setCountPageSize(handleWidth());
	});
	const handleChange = (event, value) => {
		setPage(value);
	};

	return (
		<>
			<AsideMenu />
			<Window>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8 }}
				>
					<ContainerAll>
						<h1>Grupos</h1>
						<Pagination
							color="secondary"
							onChange={handleChange}
							defaultPage={1}
							count={totalPages}
							boundaryCount={countPageSize} //2
							siblingCount={1}
						/>

						<Loading visible={isLoading}>Carregando...</Loading>

						{popUpActGoal && (
							<ContainerGoalsAndAct>
								<Button
									size="small"
									variant="contained"
									color="secondary"
									onClick={() =>
										setPopUpActGoal(!popUpActGoal)
									}
								>
									X
								</Button>
								<h2>Metas e Atividades</h2>

								{groupGoalsGroup.length > 0 &&
									groupGoalsGroup[0].goals.map(
										(grou, index) => {
											return (
												<div
													className="group-actv"
													key={index}
												>
													<h4
														style={{
															color: "white",
														}}
													>
														Metas:{" "}
													</h4>
													Título:{" "}
													{grou.title.length > 10
														? grou.title.slice(
																0,
																10
														  ) + "..."
														: grou.title}{" "}
													<br />
													Dificuldade:{" "}
													{grou.difficulty.length > 10
														? grou.difficulty.slice(
																0,
																10
														  ) + "..."
														: grou.difficulty}
													<br />
												</div>
											);
										}
									)}

								{groupActivitiesGroup.length > 0 &&
									groupActivitiesGroup[0].activities.map(
										(grouAtv, index) => {
											return (
												<div
													className="group-actv"
													key={index}
												>
													<h4>Atividades: </h4>
													Título: {grouAtv.title}{" "}
													<br />
													Tempo de realização:{" "}
													{grouAtv.realization_time}
													<br />
												</div>
											);
										}
									)}
							</ContainerGoalsAndAct>
						)}

						<Container>
							{groups.map((group) => {
								return (
									<ContainerGroup key={group.id}>
										<ContainerTextDesktop>
											<h2>Título: {group.name}</h2>
											<h3>
												Descrição: {group.description}
											</h3>
											<h3>Categoria: {group.category}</h3>
										</ContainerTextDesktop>

										<ContainerButton>
											<Button
												size="small"
												variant="contained"
												color="primary"
												onClick={() =>
													handleSignIn(group.id)
												}
											>
												Entrar
											</Button>

											<Button
												size="small"
												variant="contained"
												color="primary"
												onClick={() => {
													setPopUpActGoal(
														!popUpActGoal
													);
													handleInfo(group.id);
												}}
											>
												Ver Mais
											</Button>
										</ContainerButton>
									</ContainerGroup>
								);
							})}
						</Container>
					</ContainerAll>
				</motion.div>
			</Window>
		</>
	);
};
export default GroupsPage;

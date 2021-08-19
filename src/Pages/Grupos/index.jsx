import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerGroup } from "./styles";
import { ContainerAll } from "../MeusGrupos/styles";
import Pagination from "@material-ui/lab/Pagination";

const GroupsPage = () => {
	const { groups, handleSignIn, isLoading, setPage, totalPages } = useGroups();
    
    const handleChange = (event, value) => {
		console.log(value)
        setPage(value);
	};

	return (
		<>
			<AsideMenu />
			<Window>
				<ContainerAll>
					<h1>Grupos</h1>
					<Pagination
						color="secondary"
						onChange={handleChange}
						defaultPage={1}
						count={totalPages}
						boundaryCount={2}
					/>
					<Container>
						{isLoading && (
							<h2 style={{ color: "var(--white)" }}>
								Carregando...
							</h2>
						)}
						{groups.map((group) => {
							return (
								<ContainerGroup key={group.id}>
									<div className="Items">
										<h2>{group.name}</h2>
										<h3>{group.description}</h3>
										<h3>Categoria: {group.category}</h3>
									</div>

									<button
										variant="contained"
										onClick={() => handleSignIn(group.id)}
									>
										Entrar
									</button>

									<button>...</button>
								</ContainerGroup>
							);
						})}
					</Container>
				</ContainerAll>
			</Window>
		</>
	);
};

export default GroupsPage;

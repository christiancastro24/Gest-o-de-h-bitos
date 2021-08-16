import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerGroup } from "./styles";
import { ContainerAll } from "../MeusGrupos/styles";

const GroupsPage = () => {

    const { groups, handleSignIn } = useGroups();

    return ( 
        <>
        <AsideMenu />
        <Window>

        <ContainerAll>
            <h1>Grupos</h1>

        <Container>      
                {groups.map(group => {
                    return (
                        <ContainerGroup key={group.id}>
                            <div className="Items">
                                <h2>{group.name}</h2>
                                <h3>{group.description}</h3>
                                <h3>Categoria: {group.category}</h3>
                            </div>

                            <button variant="contained" onClick={() => handleSignIn(group.id)}>Entrar</button>
                            
                            <button>...</button>
                        </ContainerGroup>
                    )
                })}
            </Container>
            </ContainerAll>
        </Window>
        </>
     );
}
 
export default GroupsPage;
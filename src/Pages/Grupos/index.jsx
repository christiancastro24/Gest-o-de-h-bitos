import { Button} from "@material-ui/core";
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerGroup, ContainerItemsSearch, ContainerSearch } from "./styles";

const GroupsPage = () => {

    const { groups, groupsFiltered, search, setSearch, error, handleSearch, handleClear } = useGroups();

    return ( 
        <>
        <AsideMenu />
        <Window>

        <section>
            <h1 style={{color: "white", textAlign: "center", fontFamily: "Helvetica"}}>Grupos</h1>
            <ContainerSearch>
                <h2>Pesquise:</h2>

                &nbsp;&nbsp;<input value={search} onChange={evt => setSearch(evt.target.value)} placeholder="Procure seu grupo" />

             <Button variant="contained" onClick={() => handleSearch(search)}>Pesquisar</Button>

             <Button variant="contained" onClick={handleClear}>Limpar</Button>

        </ContainerSearch>


        <ContainerItemsSearch>
                
            {groupsFiltered.map(groupsEqual => {
                return (
                    <div>
                        <h2>{groupsEqual.title}</h2>
                        {/* <h3>{groupsEqual.realization_time}</h3>
                        <h4>{groupsEqual.group}</h4> */}
                        <Button variant="contained">Inscrever-se</Button>
                    </div>
                )
            })}
             {error && <span>Grupo nao encontrado.</span>}

        </ContainerItemsSearch>

        <Container>
           

                {groups.map(group => {
                    return (
                        <ContainerGroup key={group.id}>
                            <h2>{group.title}</h2>
                            <h3>{group.realization_time}</h3>
                            <h4>Grupo: {group.group}</h4>
                            <Button variant="contained">Inscrever-se</Button>
                        </ContainerGroup>
                    )
                })}
            </Container>
            </section>
        </Window>
        </>
     );
}
 
export default GroupsPage;
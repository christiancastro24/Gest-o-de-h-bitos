import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerAll, ContainerGroup } from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";

const MyGroups = () => {

    const { myGroups, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities } = useGroups();

    return ( 
        <>
        <AsideMenu />
        <Window>

        <ContainerAll>
            <h1>Meus Grupos</h1>

            <CreateGroup />
            <CreateGoals />         
            
            
        <Container>      
                {myGroups.map(myGroup => {
                    return (
                        <ContainerGroup key={myGroup.id}>
                            <div className="Items">
                                <h2>{myGroup.name}</h2>
                                <h3>{myGroup.description}</h3>
                                <h3>Categoria: {myGroup.category}</h3>
                            </div>

                            <button className="btn-info" variant="contained">...</button>

                            <button variant="contained" onClick={() => setPopUpMeta(!popUpMeta)}>Add metas</button>

                            <button className="btn-add-actvi" variant="contained" onClick={() => setPopUpActivities(!popUpActivities)}>Add atv</button>

                         <CreateActivities itemId={myGroup.id}/>
                        </ContainerGroup>
                    )
                })}
            </Container>
            </ContainerAll>
        </Window>
        </>
     );
}
 
export default MyGroups;
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerAll, ContainerGroup } from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";
import { useState } from "react";

const MyGroups = () => {

    const { myGroups, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities, groupGoals, handleInfo, groupActivities } = useGroups();

    const [groupId, setGroupId] = useState("")

    return ( 
        <>
        <AsideMenu />
        <Window>

        <ContainerAll>
            <h1>Meus Grupos</h1>
            {groupGoals.length > 0 && groupGoals[0].goals.map(grou => {
                
                return (
                    <div style={{color: "white", border: "2px solid red"}}>
                        <h4 style={{color: "white"}}>Metas: </h4>
                        Título: {grou.title} <br /> 
                        Dificuldade: {grou.difficulty}
                    </div>
                )
            })}

            {groupGoals.length > 0 && groupActivities[0].activities.map(grou => {
                
                return (
                    <div style={{color: "white", border: "2px solid red"}}>
                        <h4 style={{color: "white"}}>Atividades: </h4>
                        Título: {grou.title} <br /> 
                        Dificuldade: {grou.realization_time}
                    </div>
                )
            })}

            <CreateGroup />
            
            
        <Container>      
                {myGroups.map(myGroup => {
                   
                    return (
                        <ContainerGroup key={myGroup.id}>
                            <div className="Items">
                                <h2>{myGroup.name}</h2>
                                <h3>{myGroup.description}</h3>
                                <h3>Categoria: {myGroup.category}</h3>
                            </div>

                            <button 
                            className="btn-info" 
                            variant="contained" 
                            onClick={() => handleInfo(myGroup.id)}
                            >...</button>

                            <CreateGoals itemId={groupId} /> 

                            <button variant="contained" 
                                onClick={() => {
                                setPopUpMeta(!popUpMeta);
                                setGroupId(myGroup.id)}}>Add metas</button>

                            <button className="btn-add-actvi" variant="contained" 
                            onClick={() => { 
                                setPopUpActivities(!popUpActivities); 
                                setGroupId(myGroup.id)}}>Add atv</button>

                         <CreateActivities itemId={groupId}/>
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
import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerAll, ContainerGoalsAndAct, ContainerGroup } from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";
import { useState } from "react";



const MyGroups = () => {

    const { myGroups, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities, groupGoals, handleInfo, groupActivities, handleDeleteGoal, handleDeleteActv, handleLogout } = useGroups();

    const [popUpActGoal, setPopUpActGoal] = useState(false)

    const [groupId, setGroupId] = useState("")

 

    return ( 
        <>
        <AsideMenu />
        <Window>

        <ContainerAll>
            <h1>Meus grupos</h1>

            {popUpActGoal && 
            <ContainerGoalsAndAct>
            <button onClick={() => setPopUpActGoal(!popUpActGoal)}>X</button>
            <h1>Metas e Atividades</h1>

            {groupGoals.length > 0 && groupGoals[0].goals.map((grou, index) => {
                
                return (
                    <div className="group-actv" key={index}>
                        
                        <h4 style={{color: "white"}}>Metas: </h4>
                        Título: {grou.title} <br /> 
                        Dificuldade: {grou.difficulty}
                        <br />
                        <button className="btn-delete" onClick={() => handleDeleteGoal(grou.id)}>Excluir</button>
                    </div>
                )
            })}

            {groupActivities.length > 0 && groupActivities[0].activities.map((grouAtv, index) => {
                
                return (
                    <div className="group-actv" key={index}>
                        <h4>Atividades: </h4>
                        Título: {grouAtv.title} <br /> 
                        Tempo de realização: {grouAtv.realization_time}
                        <br />
                        <button className="btn-delete" onClick={() => handleDeleteActv(grouAtv.id)}>Excluir</button>
                    </div>
                )
            })}
            </ContainerGoalsAndAct>
            }

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
                            onClick={() => {
                                setPopUpActGoal(!popUpActGoal);
                                handleInfo(myGroup.id)
                            }}
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
                                <button style={{width: "5%"}} onClick={() => handleLogout(myGroup.id)}>Sair</button>

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
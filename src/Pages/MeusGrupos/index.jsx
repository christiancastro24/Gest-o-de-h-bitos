import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import { Container, ContainerAll, ContainerGoalsAndAct, ContainerGroup } from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";
import { useState } from "react";



const MyGroups = () => {

    const { myGroups, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities, groupGoals, handleInfo, groupActivities, handleDeleteGoal, handleDeleteActv, handleLogout, handleUpdateGoals,
    popUpT, setPopUpt, title, setTitle, handleUpdateActivities, isLoading, popUpActGoal, setPopUpActGoal } = useGroups();


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
                        <h4>Metas: </h4>
                        Título: {grou.title.length > 10 ? grou.title.slice(0,10) + "..." : grou.title} <br /> 
                        Dificuldade: {grou.difficulty.length > 10 ? grou.difficulty.slice(0,10) + "..." : grou.difficulty}
                        <br />
                        <button className="btn-delete" onClick={() => handleDeleteGoal(grou.id)}
                        >Excluir</button>          
                    </div>
                )
            })}

            {popUpT && <div style={{position: "absolute", top: "10rem", left: "15%"}}><input value={title} onChange={evt => setTitle(evt.target.value)}/></div>}

            {groupActivities.length > 0 && groupActivities[0].activities.map((grouAtv, index) => {
                
                return (
                    <div className="group-actv" key={index}>
                        <h4>Atividades: </h4>
                        Título: {grouAtv.title} <br /> 
                        <br />
                        <button className="btn-delete" onClick={() => handleDeleteActv(grouAtv.id)}>Excluir</button>
                        <button className="btn-delete" onClick={() => setPopUpt(!popUpT)}>Editar</button>
                        <button className="btn-delete" onClick={() => {
                            setPopUpt(!popUpT);
                            handleUpdateActivities(grouAtv.id)
                        }
                        }>Salvar</button>
                    </div>
                )
            })}
            </ContainerGoalsAndAct>
            }

            <CreateGroup />
            
            
        <Container>  

            {isLoading && <span>Carregando...</span>}

                {myGroups.map(myGroup => {
                   
                    return (
                        <ContainerGroup key={myGroup.id}>
                            <div className="Items">
                                <h2>{myGroup.name}</h2>
                                <h3>{myGroup.description}</h3>
                                <h3>Categoria: {myGroup.category}</h3>
                                <br />
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
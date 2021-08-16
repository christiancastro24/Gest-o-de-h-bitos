import { useGroups } from "../../Providers/groups"
import { ContainerPopUp } from "./styles"
import { Button } from "@material-ui/core"

const CreateActivities = () => {

    const { popUpActivities, setPopUpActivities, title, setTitle, group, setGroup, handleCreateActivity  } = useGroups()
    return (
        <>
            {popUpActivities && 
            <ContainerPopUp>
                <button onClick={() => setPopUpActivities(!popUpActivities)}>X</button>
                <h3>Atividades</h3>

                <input value={title} onChange={evt => setTitle(evt.target.value)} placeholder="Título" />

                
                <input value={group} onChange={evt => setGroup(evt.target.value)} placeholder="Grupo"/>

                <Button className="btn-create-actv"variant="contained" color="secondary" onClick={handleCreateActivity}>Criar Atividade</Button>
            </ContainerPopUp>
            }
        </>
    )
}

export default CreateActivities
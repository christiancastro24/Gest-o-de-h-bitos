import { useGroups } from "../../Providers/groups"
import { ContainerPopUp } from "./styles"
import { Button } from "@material-ui/core"

const CreateActivities = ({itemId}) => {

    const { popUpActivities, setPopUpActivities, title, setTitle, handleCreateActivity  } = useGroups()
    return (
        <>
            {popUpActivities && 
            <ContainerPopUp>
                <button onClick={() => setPopUpActivities(!popUpActivities)}>X</button>
                <h3>Atividades</h3>

                <input value={title} onChange={evt => setTitle(evt.target.value)} placeholder="Título" />

                <Button className="btn-create-actv"variant="contained" color="secondary" onClick={()=>handleCreateActivity(itemId)}>Criar Atividade</Button>
            </ContainerPopUp>
            }
        </>
    )
}

export default CreateActivities
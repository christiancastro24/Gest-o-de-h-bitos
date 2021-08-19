import { useGroups } from "../../Providers/groups";
import { ContainerPopUp } from "./styles";
import { Button } from "@material-ui/core"

const CreateGoals = ({ itemId }) => {

    const {popUpMeta, setPopUpMeta, title, setTitle, difficulty, setDifficulty, handleCreateGoal,} = useGroups()
    console.log(itemId);
    return (
        <>
        
            {popUpMeta && 

            <ContainerPopUp>
                <button onClick={() => setPopUpMeta(!popUpMeta)}>X</button>

                <h3>Metas</h3>

                <input value={title} onChange={evt => setTitle(evt.target.value)} placeholder="Título" />

                <input value={difficulty} onChange={evt => setDifficulty(evt.target.value)} placeholder="Dificuldade" />

                <Button variant="contained" color="secondary"  onClick={() => handleCreateGoal(itemId)}>Criar meta</Button>
            </ContainerPopUp>
            }
        </>
    )
}

export default CreateGoals
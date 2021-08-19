import { useGroups } from "../../Providers/groups"
import { ContainerPopUp } from "./styles"
import { Button } from "@material-ui/core"

const CreateGroup = () => {

    const { popUp, setPopUp, name, setName, description, setDescription, category, setCategory, handleCreate } = useGroups()
    return (
        <>

            <Button style={{display: "block", margin: "0.2rem auto"}} variant="contained" color="primary" onClick={() => setPopUp(!popUp)}>Criar Grupo</Button>
             {popUp && 

                <ContainerPopUp>
                    <button onClick={() => setPopUp(!popUp)}>X</button>

                    <h3>Criar grupo</h3>

                    <input value={name} onChange={evt => setName(evt.target.value)} type="text" placeholder="Nome Grupo" />

                    <input type="text" placeholder="Descrição do grupo" value={description} onChange={evt => setDescription(evt.target.value)}/>

                    <input value={category} onChange={evt => setCategory(evt.target.value)} type="text" placeholder="Categoria do grupo" />

                    <Button variant="contained" color="secondary" onClick={handleCreate}>Criar Grupo</Button>
                </ContainerPopUp>

                }
        </>
    )
}

export default CreateGroup
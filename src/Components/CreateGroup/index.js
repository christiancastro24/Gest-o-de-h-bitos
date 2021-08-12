import CreateGroupContainer from "./style";

const CreateGroup = () => {
    
    return (
        <>  
            <CreateGroupContainer >
                <form>
                    <input  placeholder = "Nome do grupo"/>
                    <input  placeholder = "Descrição"/>
                    <input  placeholder = "Categoria"/>
                <button type = "submit">Criar</button>
                </form>
            </CreateGroupContainer>
        </>
    )
}

export default CreateGroup;
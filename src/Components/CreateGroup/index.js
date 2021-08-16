import CreateGroupContainer from "./style";

const CreateGroup = () => {
    
    return (
        <>  
            <CreateGroupContainer >

            {/* axios post https://kabit-api.herokuapp.com/groups/ 
                content type e authorization com token da localStorage
            */}

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
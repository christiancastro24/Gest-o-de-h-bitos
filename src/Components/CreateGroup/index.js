import CreateGroupContainer from "./style";
import {TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const CreateGroup = () => {
    
    const useStyles = makeStyles((theme) => ({
        inputs: {
            backgroundColor: 'white',
            width: "100%",
            height: "44px",
            maxWidth: "24rem",
            outline: "none",
            borderRadius: "4px",
            textAlign: "center",
            margin: "8px auto",
            // boxShadow: "5px 6px 10px -2px black",
        },
    }));

    const classes = useStyles();
    
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
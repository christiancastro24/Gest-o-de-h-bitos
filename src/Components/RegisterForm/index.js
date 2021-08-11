import {TextField} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContainerRegisterForm from "./style";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    inputs: {
        backgroundColor: 'white',
        margin: "12px",
        width: "100%",
        maxWidth: "24rem",
        outline: "none",
        borderTopLeftRadius: "6px",
        borderTopRightRadius: "6px",
        boxShadow: "5px 6px 10px -2px black",
    },
}));

const RegisterForm = () => {
    const classes = useStyles();
    return (
        <div className = "paper-test">
            <ContainerRegisterForm>
                <h1>DevHealthy</h1>
                <form>
                    <TextField required 
                        className = {classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Usuário" 
                        InputProps = {{startAdornment : (<AccountCircle/>),}} 
                    />
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "E-mail" 
                        InputProps = {{startAdornment : (<MailOutlineIcon/>),}}
                    />
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Senha" 
                        InputProps = {{startAdornment : (<LockOpenIcon/>),}}
                    />
                    <button type = "submit">Registrar-se</button>
                </form>
                <p>
                    Já possui uma conta? 
                    <span className = "enter_link">
                        <Link to = {"paginaLogin"}> Entrar</Link>
                    </span>
                </p>
            </ContainerRegisterForm>
        </div>
    )
}

export default RegisterForm;
import {TextField} from "@material-ui/core";
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ContainerRegisterForm from "./style";
import { makeStyles } from '@material-ui/core/styles';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import api from "../../Services";
import { useHistory } from "react-router-dom";

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

    const history = useHistory();

    const formSchema = yup.object().shape({
        username: yup.string(),
        email: yup.string().email("email inválido"),
        password: yup.string().min(8, "senha deve conter no mínimo 8 caracteres")
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        api.post("/users/", data)
        .then(res => {
            history.push("/loginPage")
        })
    }

    const classes = useStyles();
    return (
        <>
            <ContainerRegisterForm>
                <h1><span className = "title_D">D</span>evHealth<span className = "title_Y">y</span></h1>
                <form onSubmit = {handleSubmit(onSub)} noValidate>
                    <TextField required 
                        className = {classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Usuário" 
                        InputProps = {{startAdornment : (<AccountCircle/>),}} 
                        {...register("username")}
                    />
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "E-mail" 
                        InputProps = {{startAdornment : (<MailOutlineIcon/>),}}
                        {...register("email")}
                    />
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Senha" 
                        InputProps = {{startAdornment : (<LockOpenIcon/>),}}
                        {...register("password")}
                    />
                    <button type = "submit">Registrar-se</button>
                </form>
                <p>
                    Já possui uma conta? 
                    <span className = "enter_link">
                        <Link to = {"loginPage"}> Entrar</Link>
                    </span>
                </p>
            </ContainerRegisterForm>
        </>
    )
}

export default RegisterForm;
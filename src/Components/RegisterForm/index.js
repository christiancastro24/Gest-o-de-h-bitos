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
import toast from "react-hot-toast";

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
        username: yup.string().required("Usuário inválido"),
        email: yup.string().email("Email inválido"),
        password: yup.string().min(6, "Senha deve conter no mínimo 6 caracteres")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSub = (data) => {
        api.post("/users/", data)
        .then(res => {
            toast.success("Cadastro efetuado com sucesso!",
            {
                style: {
                    backgroundColor: "var(--pink)",
                    color: "#fff"
                }
            })
            history.push("/habits")
        })
        .catch(res => {
            toast.error("Usuário ou email já existente!",
            {
                style: {
                    backgroundColor: "red",
                    color: "#fff",
            }
            })
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
                    {errors.username && <span className = "error_message">{errors.username.message}</span>}
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "E-mail" 
                        InputProps = {{startAdornment : (<MailOutlineIcon/>),}}
                        {...register("email")}
                    />
                    {errors.email && <span className = "error_message">{errors.email.message}</span>}
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Senha" 
                        type = "password"
                        InputProps = {{startAdornment : (<LockOpenIcon/>),}}
                        {...register("password")}
                    />
                    {errors.password && <span className = "error_message">{errors.password.message}</span>}
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
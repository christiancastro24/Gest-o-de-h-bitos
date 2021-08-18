import {TextField} from "@material-ui/core";
import { AccountCircle, MailOutline, LockOpen } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from "react-router-dom";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import ContainerRegisterForm from "./style";
import api from "../../Services";
import { useAuthenticated } from "../../Providers/authentication";
import MessageBalloon from "../MessageBalloon";
import "../../index.css";
import PinkButton from "../PinkButton";
import Logo from "../../Components/Logo";

const useStyles = makeStyles(() => ({
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

    const { authenticated } = useAuthenticated();

    const history = useHistory();

    const formSchema = yup.object().shape({
        username: yup.string().required("Usuário inválido").matches("^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Usuário inválido"),
        email: yup.string().required("Email obrigatório!").email("E-mail inválido"),
        password: yup.string().min(6, "Mínimo 6 caracteres").required("Senha inválida")
    });

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(formSchema)
    });

    const onSub = (data) => {
        api.post("/users/", data)
        .then((res) => {

            toast.success("Cadastro efetuado com sucesso!",
            {
                style: {
                    backgroundColor: "var(--pink)",
                    color: "#fff"
                }
            })
            history.push("/loginPage")
        })
        .catch(() => {
            toast.error("Usuário ou e-mail já existente!",
            {
                style: {
                    backgroundColor: "red",
                    color: "#fff",
            }
            })
        })
    }

    if(authenticated) {
        history.push("/habits")
    }

    const classes = useStyles();
    return (
        <>
            <ContainerRegisterForm>
                <Logo />
                <form onSubmit = {handleSubmit(onSub)} noValidate>
                    <TextField required 
                        className = {classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Usuário" 
                        type = "text"
                        InputProps = {{startAdornment : (<AccountCircle/>),}} 
                        {...register("username")}
                    />
                        {errors.username && <MessageBalloon className = "invalid_username_message" message = {errors.username.message} />}
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "E-mail" 
                        InputProps = {{startAdornment : (<MailOutline/>),}}
                        {...register("email")}
                    />
                    {errors.email && <MessageBalloon className = "invalid_email_message" message = {errors.email.message} />}
                    <TextField required 
                        className={classes.inputs} 
                        variant = "outlined" 
                        placeholder = "Senha" 
                        type = "password"
                        InputProps = {{startAdornment : (<LockOpen/>),}}
                        {...register("password")}
                    /> 
                    {errors.password && <MessageBalloon className = "invalid_password_message" message = {errors.password.message} />}
                    <PinkButton type = "submit" text = "Registrar-se" />
                </form>
                <p>
                    Já possui uma conta? 
                    <span className = "enter_link">
                        <Link to = {"/loginPage"}> Entrar</Link>
                    </span>
                </p>
            </ContainerRegisterForm>
        </>
    )
}

export default RegisterForm;
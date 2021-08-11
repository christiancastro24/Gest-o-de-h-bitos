import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"

import api from "../../Services"

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { ContainerInput, ContainerLogin, Image } from "./styles";

import imageLogin from "../../Assets/Images/login.svg"

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


const LoginPage = () => {
    const classes = useStyles();

    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string(),
        password: yup.string().min(8, 'Senha obrigatória de 8 dígitos')
    })

    const { register, handleSubmit } = useForm({
        resolver: yupResolver(formSchema)
    })


    const onSub = (data) => {
        api.post("/sessions/", data)
        .then(res => {
            const { access } = res.data
            localStorage.setItem("@Gestao/user", JSON.stringify(access))
            history.push("/dashboard")
        })
        .catch(_ => alert('Usuário ou senha inválidos'))
    }

    return (
        <div>
            <ContainerLogin onSubmit={handleSubmit(onSub)}>

            <ContainerInput>
                <div>            
                    <h1><span style={{color: "var(--pink)"}}>D</span>evHealth<span style={{color: "var(--lightGreen)"}}>y</span></h1>
               
                <TextField 
                    required
                    className={classes.inputs} 
                    variant = "outlined" 
                    placeholder = "Usuário" 
                    InputProps = {{startAdornment : (<AccountCircle/>),}} 
                    {...register("username")}
                />

                <br /><br />
                <TextField 
                    required
                    className={classes.inputs} 
                    variant = "outlined" 
                    placeholder = "Usuário" 
                    InputProps = {{startAdornment : (<LockOpenIcon/>),}} 
                    type="password"
                    {...register("password")}
                    />
                </div>

                <div>
                    <Button variant="contained" type="submit">Entrar</Button>
                </div>
            </ContainerInput>    
                
                <Image>
                    <img src={imageLogin} alt={imageLogin} />
                </Image>

            </ContainerLogin>
        </div>
    )
}

export default LoginPage
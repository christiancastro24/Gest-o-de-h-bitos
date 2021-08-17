import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOpen, AccountCircle } from "@material-ui/icons";
import {
  Container,
  Background,
  Content,
  ContainerRegisterForm,
} from "./styles";
import { useHistory, Link } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../Services";
import { useAuthenticated } from "../../Providers/authentication";
import jwt_decode from "jwt-decode";
import { useUserData } from "../../Providers/UserData";
import PinkButton from "../../Components/PinkButton";
import MessageBalloon from "../../Components/MessageBalloon";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  inputs: {
    backgroundColor: "white",
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
  const { setToken, setUserId } = useUserData();
  const classes = useStyles();

  const {setPassword} = useUserData();

  const history = useHistory();

<<<<<<< HEAD
	const formSchema = yup.object().shape({
		username: yup.string().required("Usuário obrigatório!"),
		password: yup.string().min(4, "Mínimo 4 dígitos!").required("Senha obrigatória!"),
	});
=======
  const { authenticated, setAuthenticated } = useAuthenticated();
>>>>>>> 648a12a390d7b4c410250653f69ae7f7e86073f4

  const formSchema = yup.object().shape({
    username: yup.string(),
    password: yup.string().min(6, "Senha obrigatória de 6 dígitos"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSub = (data) => {
    api
    .post("/sessions/", data)
    .then((res) => {
        const { access } = res.data;
        const userId = jwt_decode(access).user_id;
        localStorage.setItem("@DevHealthy/user", JSON.stringify(access));
        localStorage.setItem("userId", userId);
        setUserId(userId);
        setToken(access);
		setPassword(data.password);
        setAuthenticated(true);
        history.push("/habits");
        toast.success("Sucesso!");
    })
    .catch(() => {
        toast.error("Usuário ou senha incorretos!", {
        style: {
            backgroundColor: "red",
            color: "var(--white)",
            fontWeight: "bold",
        },
    	});
    });
  };

  if (authenticated) {
    history.push("/habits");
  }

  return (
    <>
      <Container>
        <Content>
          <ContainerRegisterForm>
            <h1>
              <span className="title_D">D</span>evHealth
              <span className="title_Y">y</span>
            </h1>
            <form onSubmit={handleSubmit(onSub)} noValidate>
              <TextField
                className={classes.inputs}
                variant="outlined"
                placeholder="Usuário"
                InputProps={{ startAdornment: <AccountCircle /> }}
                {...register("username")}
              />
              <br />
              {errors.username && (
                <MessageBalloon
                  message={errors.username.message}
                  className="invalid_username_message"
                />
              )}
              <TextField
                className={classes.inputs}
                variant="outlined"
                placeholder="Senha"
                InputProps={{ startAdornment: <LockOpen /> }}
                type="password"
                {...register("password")}
              />
              {errors.password && (
                <MessageBalloon
                  message="Senha obrigatória!"
                  className="invalid_password_message"
                />
              )}
              <PinkButton type="submit" text="Entrar" />
            </form>
            <p>
              Não possui uma conta?
              <span className="enter_link">
                <Link to={"/registerPage"}> Cadastre-se</Link>
              </span>
            </p>
          </ContainerRegisterForm>
        </Content>
        <Background />
      </Container>
    </>
  );
};

export default LoginPage;

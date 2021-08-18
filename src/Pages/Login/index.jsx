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
import Logo from "../../Components/Logo";

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

  const { authenticated, setAuthenticated } = useAuthenticated();

  const formSchema = yup.object().shape({
    username: yup.string().required("Usuário obrigatório!"),
    password: yup.string().min(6, "Mínimo 6 caracteres!"),
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
            <Logo />
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
                  message={errors.password.message}
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

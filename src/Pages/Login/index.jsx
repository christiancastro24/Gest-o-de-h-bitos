import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { LockOpen, AccountCircle } from "@material-ui/icons";
import { ContainerInput, ContainerLogin, Image } from "./styles";
import { useHistory, Link } from "react-router-dom";
import imageLogin from "../../Assets/Images/login.svg";
import api from "../../Services";
import { useAuthenticated } from "../../Providers/authentication";
import PinkButton from "../../Components/PinkButton";

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
	const classes = useStyles();

	const history = useHistory();

	const { authenticated, setAuthenticated } = useAuthenticated()

	const formSchema = yup.object().shape({
		username: yup.string(),
		password: yup.string().min(4, "Senha obrigatória de 8 dígitos"),
	});

	const { register, handleSubmit } = useForm({
		resolver: yupResolver(formSchema),
	});

	const onSub = (data) => {
		api.post("/sessions/", data)
			.then((res) => {
				const { access } = res.data;

				localStorage.setItem("@DevHealthy/user", JSON.stringify(access));
				
				setAuthenticated(true)
				
				history.push("/habits");
				history.push("/habits")
			})
			.catch(() => alert("Usuário ou senha inválidos"));
	};

	if(authenticated) {
		history.push("/habits")
	}

	return (
		<>
			<ContainerLogin onSubmit={handleSubmit(onSub)}>
				<ContainerInput>
					<div>
						<h1>
							<span style={{ color: "var(--pink)" }}>D</span>
							evHealth
							<span style={{ color: "var(--lightGreen)" }}>
								y
							</span>
						</h1>

						<TextField
							required
							className={classes.inputs}
							variant="outlined"
							placeholder="Usuário"
							InputProps={{ startAdornment: <AccountCircle /> }}
							{...register("username")}
						/>

						<br />
						<br />
						<TextField
							required
							className={classes.inputs}
							variant="outlined"
							placeholder="Usuário"
							InputProps={{ startAdornment: <LockOpen /> }}
							type="password"
							{...register("password")}
						/>
					</div>

					<div>
						<PinkButton text = "ENTRAR" type = "submit" />
						<p>
							Não possui uma conta?
							<Link to={"/registerPage"}>Cadastre-se</Link>
						</p>
					</div>
				</ContainerInput>

				<Image>
					<img src={imageLogin} alt={imageLogin} />
				</Image>
			</ContainerLogin>
		</>
	);
};

export default LoginPage;

import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
    TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserData } from "../../../Providers/UserData";
import api from "../../../Services";
import toast from "react-hot-toast";
import { Form } from './styles'
import { useState } from "react";

const AddHabit = ({ open, handleClose }) => {
    const { userId, token, recarregarDados } = useUserData();
    const [difficulty, setDifficulty] = useState('Escolha');

    const formSchema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string(),
		frequency: yup.string(),
	});

    const handleSelect = (e) => {
        if (e.target.value === "Escolha uma"){
            return;
        }
        setDifficulty(e.target.value)
    }
	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

    const handleCreateHabit = (data) => {
        data['user'] = userId;
        data['achieved'] = false;
        data["how_much_achieved"] = 0;
        data["frequency"] = "Diário";
        api.post("/habits/", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(()=> {toast.success('Hábito criado'); recarregarDados(); handleClose()})
        .catch(()=> toast.error('Falha! Verifique se todos campos foram preenchidos!'));
    }
    return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="add-habit-dialog"
		>
			<DialogTitle id="add-habit-dialog">
				{"Criar um hábito:"}
			</DialogTitle>
			<DialogContent>
				<Form noValidate>
					<TextField
						label="Um nome"
						{...register("title")}
						variant="filled"
						margin="normal"
					/>
					<TextField
						label="Categoria"
						{...register("category")}
						variant="filled"
						margin="normal"
					/>
					<TextField
						label="Dificuldade"
						{...register("difficulty")}
						variant="filled"
						margin="normal"
						select
						value={difficulty}
						onChange={(e) => handleSelect(e)}
						SelectProps={{
							native: true,
						}}
					>
						<option>Escolha uma</option>
						<option>Fácil</option>
						<option>Mais ou menos</option>
						<option>Difícil</option>
						<option>Quase impossível</option>
					</TextField>
					<TextField
						label="Frequência"
						{...register("frequency")}
						variant="filled"
						margin="normal"
						value={"Diário"}
						style={{ display: "none" }}
					/>
				</Form>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					onClick={handleSubmit(handleCreateHabit)}
					color="primary"
				>
					Criar
				</Button>
				<Button
					onClick={handleClose}
					color="secondary"
					variant="contained"
				>
					Cancelar
				</Button>
			</DialogActions>
		</Dialog>
	);
}
 
export default AddHabit;
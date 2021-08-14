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

const AddHabit = ({ open, handleClose }) => {
    const { userId, token, recarregarDados } = useUserData();

    const formSchema = yup.object().shape({
		title: yup.string().required("Campo Obrigatório"),
		category: yup.string().required("Campo Obrigatório"),
		difficulty: yup.string().required("Campo Obrigatório"),
		frequency: yup.string().required("Campo Obrigatório"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(formSchema),
	});

    const handleCreateHabit = (data) => {
        data['user'] = userId;
        data['achieved'] = false;
        data["how_much_achieved"] = 0;
        api.post("/habits/", data, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(()=> {toast.success('Hábito criado'); recarregarDados(); handleClose()});
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
				<form noValidate onSubmit={handleSubmit(handleCreateHabit)}>
					<TextField label="Um nome" {...register("title")} />
					<TextField label="Categoria" {...register("category")} />
					<TextField label="Dificuldade" {...register("difficulty")} />
					<TextField label="Frequência" {...register("frequency")} />
					<Button type="submit">Criar</Button>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary" autoFocus>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
 
export default AddHabit;
import { useGroups } from "../../Providers/groups";
import { ContainerPopUp } from "./styles";
import { Button, Input } from "@material-ui/core";

const CreateActivities = ({ itemId }) => {
	const {
		popUpActivities,
		setPopUpActivities,
		title,
		setTitle,
		handleCreateActivity,
	} = useGroups();
	return (
		<>
			{popUpActivities && (
				<ContainerPopUp>
					<Button
						size="small"
						variant="contained"
						color="secondary"
						onClick={() => setPopUpActivities(!popUpActivities)}
					>
						X
					</Button>
					<h4>Atividades</h4>

					<Input
						value={title}
						onChange={(evt) => setTitle(evt.target.value)}
						placeholder="Título"
					/>

					<Button
						size="small"
						variant="contained"
						color="primary"
						onClick={() => handleCreateActivity(itemId)}
					>
						Criar Atividade
					</Button>
				</ContainerPopUp>
			)}
		</>
	);
};

export default CreateActivities;

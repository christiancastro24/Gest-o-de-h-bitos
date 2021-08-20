import { useGroups } from "../../Providers/groups";

const UpdateGroup = ({ itemId }) => {
	const { popUpUpdateGroup, category, setCategory, handleUpdateGroup } =
		useGroups();
	return (
		<div>
			{popUpUpdateGroup && (
				<div style={{ position: "absolute", top: "5%", left: "25%" }}>
					<input
						style={{ color: "black" }}
						value={category}
						onChange={(evt) => setCategory(evt.target.value)}
					/>
					<button onClick={() => handleUpdateGroup(itemId)}>
						Salvar
					</button>
				</div>
			)}
		</div>
	);
};

export default UpdateGroup;

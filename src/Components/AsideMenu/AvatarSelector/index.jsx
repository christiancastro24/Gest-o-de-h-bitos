import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import { Tabs } from "antd";
import { Avatar } from "../style";

const AvatarSelector = ({open, handleClose, handleChangeAvatarId}) => {
    const { TabPane } = Tabs;
    const robotsId = 3;
    const mutantsId = 2;
    const catsId = 4;
    const humansId = 5;

    const getAvatars = (type = 3) => {
		const avatarsQuantity = 30;
		let output = [];
		for (let i = 0; i < avatarsQuantity; i++) {
			output.push(`https://robohash.org/${i}.png?set=set${type}`);
		}
		return output;
	};

    return (
		<Dialog
			open={open}
			onClose={handleClose}
			aria-labelledby="responsive-dialog"
		>
			<DialogTitle id="responsive-dialog">
				{"Escolha um novo avatar:"}
			</DialogTitle>
			<DialogContent>
				<Tabs type="card">
					<TabPane tab="Robots" key="1">
						{getAvatars().map((item, ind) => (
							<Avatar
								src={item}
								alt="Carregando..."
								key={`r${ind}`}
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, robotsId);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Mutants" key="2">
						{getAvatars(mutantsId).map((item, ind) => (
							<Avatar
								src={item}
								alt="Carregando..."
								key={`m${ind}`}
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, mutantsId);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Cats" key="3">
						{getAvatars(catsId).map((item, ind) => (
							<Avatar
								src={item}
								alt="Carregando..."
								key={`c${ind}`}
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, catsId);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Humans" key="4">
						{getAvatars(humansId).map((item, ind) => (
							<Avatar
								src={item}
								alt="Carregando..."
								key={`h${ind}`}
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, humansId);
								}}
							/>
						))}
					</TabPane>
				</Tabs>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="secondary" autoFocus>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}
 
export default AvatarSelector;
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@material-ui/core";
import { Tabs } from "antd";
import { Avatar } from "../style";

const AvatarSelector = ({open, handleClose, handleChangeAvatarId}) => {
    const { TabPane } = Tabs;
    const getAvatars = (type = 3) => {
		const avatarsQuantity = 20;
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
			aria-labelledby="responsive-dialog-title"
		>
			<DialogTitle id="responsive-dialog-title">
				{"Escolha um novo avatar:"}
			</DialogTitle>
			<DialogContent>
				<Tabs type="card">
					<TabPane tab="Robots" key="1">
						{getAvatars().map((item, ind) => (
							<Avatar
								src={item}
								alt=""
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, 3);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Mutants" key="2">
						{getAvatars(2).map((item, ind) => (
							<Avatar
								src={item}
								alt=""
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, 2);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Cats" key="3">
						{getAvatars(4).map((item, ind) => (
							<Avatar
								src={item}
								alt=""
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, 4);
								}}
							/>
						))}
					</TabPane>
					<TabPane tab="Humans" key="4">
						{getAvatars(5).map((item, ind) => (
							<Avatar
								src={item}
								alt=""
								onClick={() => {
									handleClose();
									handleChangeAvatarId(ind, 5);
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
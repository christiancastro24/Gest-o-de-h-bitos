import { Dialog, DialogTitle, Button, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const DelConfirmation = ({
	openDelConfirmation,
	handleOpenDelConfirmation,
	handleDelete,
    itemId
}) => {
	return (
		<Dialog
			open={openDelConfirmation}
			onClose={handleOpenDelConfirmation}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title">
				{"Tem certeza disso?"}
			</DialogTitle>
			<DialogContent>
				<DialogContentText style={{color: 'black'}}id="alert-dialog-description">
					Tem certeza que deseja excluir esse hábito da sua lista?
					Essa ação não poderá ser desfeita!
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={()=> {handleOpenDelConfirmation(); handleDelete(itemId);}} variant="contained" color="secondary">
					Excluir
				</Button>
				<Button
					onClick={handleOpenDelConfirmation}
					color="primary"
					autoFocus
				>
					Voltar
				</Button>
			</DialogActions>
		</Dialog>
	);
};
 
export default DelConfirmation;
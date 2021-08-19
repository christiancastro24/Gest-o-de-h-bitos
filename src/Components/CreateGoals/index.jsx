import { useGroups } from "../../Providers/groups";
import { ContainerPopUp } from "./styles";
import { Button, Input } from "@material-ui/core";

const CreateGoals = ({ itemId }) => {
  const {
    popUpMeta,
    setPopUpMeta,
    title,
    setTitle,
    difficulty,
    setDifficulty,
    handleCreateGoal,
  } = useGroups();
  return (
    <>
      {popUpMeta && (
        <ContainerPopUp>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => setPopUpMeta(!popUpMeta)}
          >
            X
          </Button>

          <h4>Metas</h4>

          <Input
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
            placeholder="Título"
          />

          <Input
            value={difficulty}
            onChange={(evt) => setDifficulty(evt.target.value)}
            placeholder="Dificuldade"
          />

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={() => handleCreateGoal(itemId)}
          >
            Criar meta
          </Button>
        </ContainerPopUp>
      )}
    </>
  );
};

export default CreateGoals;

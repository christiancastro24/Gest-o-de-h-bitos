import { useGroups } from "../../Providers/groups";
import { ContainerPopUp } from "./styles";
import { Button, Input } from "@material-ui/core";

const CreateGroup = () => {
  const {
    popUp,
    setPopUp,
    name,
    setName,
    description,
    setDescription,
    category,
    setCategory,
    handleCreate,
  } = useGroups();
  return (
    <>
      <Button
        style={{ display: "block", margin: "0.2rem auto" }}
        variant="contained"
        color="primary"
        onClick={() => setPopUp(!popUp)}
      >
        Criar Grupo
      </Button>
      {popUp && (
        <ContainerPopUp>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => setPopUp(!popUp)}
          >
            X
          </Button>

          <h2>Criar Grupo</h2>

          <Input
            value={name}
            onChange={(evt) => setName(evt.target.value)}
            type="text"
            placeholder="Nome Grupo"
          />

          <Input
            type="text"
            placeholder="Descrição do grupo"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
          />

          <Input
            value={category}
            onChange={(evt) => setCategory(evt.target.value)}
            type="text"
            placeholder="Categoria do grupo"
          />

          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleCreate}
          >
            Criar Grupo
          </Button>
        </ContainerPopUp>
      )}
    </>
  );
};

export default CreateGroup;

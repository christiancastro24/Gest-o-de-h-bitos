import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import {
  Container,
  ContainerAll,
  ContainerGoalsAndAct,
  ContainerGroup,
  ContainerMyGroups,
  ContainerPopUp,
} from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Input,
  Modal,
  Typography,
} from "@material-ui/core";

const MyGroups = () => {
  const {
    myGroups,
    popUpMeta,
    setPopUpMeta,
    popUpActivities,
    setPopUpActivities,
    groupGoals,
    handleInfo,
    groupActivities,
    handleDeleteGoal,
    handleDeleteActv,
    handleLogout,
    category,
    handleUpdateGroup,
    popUpT,
    setPopUpt,
    title,
    setTitle,
    handleUpdateActivities,
    isLoading,
    popUpActGoal,
    setPopUpActGoal,
    popUpUpdateGroup,
    setUpdateGroup,
    setCategory,
  } = useGroups();

  const [groupId, setGroupId] = useState("");

  return (
    <>
      <AsideMenu />
      <Window>
        <ContainerAll>
          <ContainerMyGroups>
            <h1>Meus grupos</h1>

            <CreateGroup />
          </ContainerMyGroups>

          {popUpActGoal && (
            <ContainerGoalsAndAct>
              <Button
                size="small"
                color="secondary"
                variant="contained"
                onClick={() => setPopUpActGoal(!popUpActGoal)}
              >
                X
              </Button>
              <h2>Metas e Atividades</h2>

              {groupGoals[0].goals?.map((grou, index) => {
                return (
                  <div className="group-actv" key={index}>
                    <h4>Metas</h4>
                    Título:{" "}
                    {grou.title.length > 10
                      ? grou.title.slice(0, 10) + "..."
                      : grou?.title}{" "}
                    <br />
                    Dificuldade:{" "}
                    {grou.difficulty.length > 10
                      ? grou.difficulty.slice(0, 10) + "..."
                      : grou?.difficulty}
                    <br />
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteGoal(grou.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                );
              })}

              {groupActivities[0].activities?.map((grouAtv, index) => {
                return (
                  <div className="group-actv" key={index}>
                    <h4>Atividades: </h4>
                    Título: {grouAtv?.title} <br />
                    <br />
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => setPopUpt(!popUpT)}
                    >
                      Editar
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteActv(grouAtv.id)}
                    >
                      Excluir
                    </Button>
                    {popUpT && (
                      <ContainerPopUp
                        style={{
                          position: "absolute",
                          top: "10rem",
                          left: "15%",
                        }}
                      >
                        <Input
                          value={title}
                          onChange={(evt) => setTitle(evt.target.value)}
                        />
                        <Button
                          size="small"
                          variant="contained"
                          color="primary"
                          onClick={() => {
                            setPopUpt(!popUpT);
                            handleUpdateActivities(grouAtv.id);
                          }}
                        >
                          Salvar
                        </Button>
                      </ContainerPopUp>
                    )}
                  </div>
                );
              })}
            </ContainerGoalsAndAct>
          )}

          <Container>
            {isLoading && <span>Carregando...</span>}

            {myGroups.map((myGroup) => {
              return (
                <ContainerGroup key={myGroup.id}>
                  <div className="Items">
                    <h2>{myGroup.name}</h2>
                    <h3>{myGroup.description}</h3>
                    <h3>Categoria: {myGroup.category}</h3>
                    <br />
                  </div>

                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setPopUpActGoal(!popUpActGoal);
                      handleInfo(myGroup.id);
                    }}
                  >
                    Ver Mais
                  </Button>

                  <CreateGoals itemId={groupId} />

                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => setUpdateGroup(!popUpUpdateGroup)}
                  >
                    Editar
                  </Button>

                  {popUpUpdateGroup && (
                    <div
                      style={{ position: "absolute", top: "5%", left: "25%" }}
                    >
                      <input
                        style={{ color: "black" }}
                        value={category}
                        onChange={(evt) => setCategory(evt.target.value)}
                      />
                      <Button
                        size="small"
                        variant="container"
                        color="primary"
                        onClick={() => handleUpdateGroup(myGroup.id)}
                      >
                        Salvar
                      </Button>
                    </div>
                  )}

                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setPopUpMeta(!popUpMeta);
                      setGroupId(myGroup.id);
                    }}
                  >
                    Adicionar Metas
                  </Button>

                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      setPopUpActivities(!popUpActivities);
                      setGroupId(myGroup.id);
                    }}
                  >
                    Adicionar Atividades
                  </Button>
                  <Button
                    size="small"
                    variant="contained"
                    color="secondary"
                    onClick={() => handleLogout(myGroup.id)}
                  >
                    Sair
                  </Button>

                  <CreateActivities itemId={groupId} />
                </ContainerGroup>
              );
            })}
          </Container>
        </ContainerAll>
      </Window>
    </>
  );
};

export default MyGroups;

import AsideMenu from "../../Components/AsideMenu";
import { Window } from "../../Components/GlobalStyle/styles";
import { useGroups } from "../../Providers/groups";
import {
  Atividades,
  Container,
  ContainerAll,
  ContainerGoalsAndAct,
  ContainerGroup,
  ContainerMyGroups,
  ContainerPopUp,
  ContainerPopUpInput,
} from "./styles";
import CreateGroup from "../../Components/CreateGroup";
import CreateGoals from "../../Components/CreateGoals";
import CreateActivities from "../../Components/CreateActivities";
import { useState } from "react";
import { Button, Input } from "@material-ui/core";
import { useUserData } from "../../Providers/UserData";

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

  const { userId } = useUserData();
  const [groupId, setGroupId] = useState("");

  const [groupAtv, setGroupAtv] = useState();

  return (
    <>
      <AsideMenu />
      <Window>
        {popUpT && (
          <ContainerPopUpInput>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => setPopUpt(!popUpT)}
            >
              X
            </Button>
            <h4>Editar título da atividade</h4>
            <Input
              placeholder="Novo título"
              value={title}
              onChange={(evt) => setTitle(evt.target.value)}
            />
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => {
                setPopUpt(!popUpT);
                handleUpdateActivities(groupAtv);
              }}
            >
              Salvar
            </Button>
          </ContainerPopUpInput>
        )}
        <ContainerAll>
          <ContainerMyGroups>
            <h2>Meus Grupos</h2>

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
                    <Atividades>Atividades</Atividades>
                    Título: {grouAtv?.title} <br />
                    <br />
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setPopUpt(!popUpT);
                        setGroupAtv(grouAtv.id);
                      }}
                    >
                      Editar
                    </Button>
                    <Button
                      size="small"
                      variant="contained"
                      color="secondary"
                      onClick={() => {
                        handleDeleteActv(grouAtv.id);
                      }}
                    >
                      Excluir
                    </Button>
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

                  {myGroup.creator && myGroup.creator.id === userId ? (
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        setUpdateGroup(!popUpUpdateGroup);
                        setGroupId(myGroup.id);
                      }}
                    >
                      Editar
                    </Button>
                  ) : null}

                  {popUpUpdateGroup && (
                    <ContainerPopUpInput>
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        onClick={() => setUpdateGroup(!popUpUpdateGroup)}
                      >
                        X
                      </Button>
                      <h4>Editar categoria</h4>
                      <Input
                        placeholder="Nova categoria"
                        value={category}
                        onChange={(evt) => setCategory(evt.target.value)}
                      />
                      <Button
                        size="small"
                        variant="contained"
                        color="primary"
                        onClick={() => handleUpdateGroup(myGroup.id)}
                      >
                        Salvar
                      </Button>
                    </ContainerPopUpInput>
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

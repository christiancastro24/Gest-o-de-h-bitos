import { Container, Title, ListItem } from "./styles";
import { useUserData } from "../../Providers/UserData";
import { Tooltip, CircularProgress } from "@material-ui/core";
import api from "../../Services";
import { useState } from "react";
import toast from "react-hot-toast";

const HabitsList = () => {
	const { habits, token, recarregarDados, handleUpdateTimer } = useUserData();
    const [appIsThinking, setAppIsThinking] = useState(false);
    const actualDate = new Date();
    const dateInfo = [actualDate.getDate(), actualDate.getMonth()];
	
    const handleDoneTask = (habitId, repeticoes) => {
        setAppIsThinking(true);
        api.patch(
			`/habits/${habitId}/`,
			{ achieved: true, how_much_achieved: `${repeticoes + 1}` },
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		).then(()=> {setTimeout(()=>setAppIsThinking(false),300); recarregarDados()});
        handleUpdateTimer(habitId, dateInfo);
    }
    
    const handleDelete = (habitId) => {
        setAppIsThinking(true);
        api.delete(
			`/habits/${habitId}/`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		).then(() => {
			setTimeout(() => setAppIsThinking(false), 300);
			recarregarDados();
            toast.success('Hábito removido');
		});

    }
    const handleRepeat = (habitId) => {
        if (!JSON.parse(localStorage.getItem("habitsLastUpdate"))){
            return false;
        }
        const savedDate = JSON.parse(localStorage.getItem("habitsLastUpdate"))[habitId] || '';
        if (!savedDate){
            return false;
        }
        if (savedDate[1] < dateInfo[1]){
            return false;
        }
        if (savedDate[0] < dateInfo[0]){
            return false;
        }
        return true;
    }


    return (
		<Container>
			<h2>Seus Hábitos:</h2>
            <h3>Hábito / Vezes realizado / Opções</h3>
			{appIsThinking ? (
				<CircularProgress
					style={{
						position: "absolute",
						top: "50%",
						right: "50%",
						transform: "translate(50%, -50%)",
					}}
					color="secondary"
				/>
			) : null}
			{habits &&
				habits.map((item, ind) => (
					<ListItem key={ind}>
						{" "}
						<Title done={handleRepeat(item.id)}>
							# {item.title}
						</Title>
						{" ---- "}
						<Tooltip
							title="Quantas vezes você realizou essa tarefa."
							placement="top"
						>
							<span>{item.how_much_achieved}</span>
						</Tooltip>
						{" ---- "}
						<button
							onClick={() =>
								handleDoneTask(item.id, item.how_much_achieved)
							}
							disabled={handleRepeat(item.id)}
						>
							Concluir
						</button>
						<button onClick={()=> handleDelete(item.id)}>Excluir</button>
						
                        {handleRepeat(item.id) ? <p>Não esqueça de voltar amanhã neste hábito!</p> : <p>Bora completar mais um!</p>}
					</ListItem>
				))}
                <button>Adicionar novo hábito</button>
		</Container>
	);
}
 
export default HabitsList;
import { createContext, useContext, useState, useEffect } from "react"
import api from "../../Services/"
import toast from "react-hot-toast";

const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [groups, setGroups] = useState([])
    const [myGroups, setMyGroups] = useState([])

    const [goals, setGoals] = useState([])
    const [activities, setActivities] = useState([])

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")

    const [groupGoals, setGroupGoals] = useState([])
    const [groupActivities, setGroupActivities] = useState([])

    const [title, setTitle] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [group, setGroup] = useState("")

    const [popUp, setPopUp] = useState(false)
    const [popUpMeta, setPopUpMeta] = useState(false)
    const [popUpActivities, setPopUpActivities] = useState(false)

   const [token] = useState(JSON.parse(localStorage.getItem("@DevHealthy/user")) || "")

   // Grupos inscritos 
    useEffect(() => {
        api.get(`/groups/subscriptions/`, {         
            headers: { Authorization: `Bearer ${token}`}
        
        })
        .then(res => setMyGroups(res.data))

        .catch(err => console.log(err))
    }, [])


    // Todos grupos que não precisam de ("Autorização")
    useEffect(() => {
        api.get(`/groups/subscriptions/`)
        .then(res => setGroups(res.data))
        .catch(err => console.log(err))
    }, [])


    // Criando meta 
    const handleCreateGoal = (itemId) => {
        const how_much_achieved = 50;
        const dataMeta = { title: title, difficulty: difficulty, group: itemId }

        api.post("/goals/", {...dataMeta, how_much_achieved}, {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`
            }
        })
        .then(_ => {
            setGoals([...goals, {...dataMeta, how_much_achieved}])
            setTitle("")
            setDifficulty("")
            setGroup("")
            setPopUpMeta(!popUpMeta)
            toast.success("Meta cadastrada!",
            {
                style: {
                    backgroundColor: "#228B22",
                    color: "#fff"
                }
            })
        })
        .catch(_ => toast.error("Erro ao cadastrar uma meta",
        {
            style: {
                backgroundColor: "red",
                color: "#fff"
            }
        })) 
    }

    // Criando Atividade
    const handleCreateActivity = (itemId) => {
        const realization_time = new Date();
        const dataActivities = { title: title, group: itemId }

        api.post("/activities/", {...dataActivities, realization_time}, {
            headers: {
                "Content-Type": "application/json", 
                "Authorization": `Bearer ${token}`
            }
        })
        .then(_ => {
            setActivities([...activities, {...setActivities, realization_time}])
            setTitle("")
            setGroup("")
            setPopUpActivities(!popUpActivities)
            toast.success("Atividade cadastrada!",
            {
                style: {
                    backgroundColor: "#228B22",
                    color: "#fff"
                }
            })
        })
        .catch(_ => toast.error("Erro ao criar a atividade!",
        {
            style: {
                backgroundColor: "red",
                color: "#fff"
            }
        })) 
    }


    // Criando grupo
    const handleCreate = () => {

        const data = { name: name, description: description, category: category }
        api.post("/groups/", data, {

            headers: { Authorization: `Bearer ${token}`},
        })
        .then(_ => {
            setMyGroups([...myGroups, {...data}])
            toast.success("Grupo criado!",
            {
                style: {
                    backgroundColor: "#228B22",
                    color: "#fff"
                }
            })
            setName("")
            setCategory("")
            setDescription("")
            setPopUp(!popUp)
            

        })
        .catch(_ => toast.error("Erro ao criar o grupo!",
        {
            style: {
                backgroundColor: "red",
                color: "#fff",
            }
        }))
    }


    // Inscrevendo-se nos grupos 
    const handleSignIn = (id) => {

        api.post(`/groups/${id}/subscribe/`, null, {

            headers: { Authorization: `Bearer ${token}`},
        })
        .then(_ => {
            toast.success("Você entrou no grupo",
            {
                style: {
                    backgroundColor: "#228B22",
                    color: "#fff"
                }
            })
            // setTimeout(() => history.push("/myGroups"), 1000)
            window.location.reload();
            

        })
        .catch(_ => toast.error("Você já esta nesse grupo",
        {
            style: {
                backgroundColor: "red",
                color: "#fff"
            }
        }))
    }

    const handleInfo = (itemId) => {
        const filtGoals = myGroups.filter(item => item.id === itemId)
        setGroupGoals(filtGoals)

        const filtActivities =  myGroups.filter(item => item.id === itemId)
        setGroupActivities(filtActivities)
    }


    return (
        <GroupsContext.Provider value={{groups, setGroups, name, setName, description, setDescription, category, setCategory, myGroups, setMyGroups, goals, setGoals, title, setTitle, difficulty, setDifficulty, group, setGroup, handleCreateGoal, handleCreateActivity, activities, setActivities, popUp, setPopUp, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities, handleCreate, handleSignIn, handleInfo, groupGoals, groupActivities, setGroupActivities}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext)
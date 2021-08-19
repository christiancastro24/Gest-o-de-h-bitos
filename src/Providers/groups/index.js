import { createContext, useContext, useState, useEffect } from "react"
import api from "../../Services/"
import toast from "react-hot-toast";


const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [groups, setGroups] = useState([])
    const [myGroups, setMyGroups] = useState([])
    const [page, setPage] = useState([1]);
    const [totalPages, setTotalPages] = useState(1)

    const [goals, setGoals] = useState([])
    const [activities, setActivities] = useState([])

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [categoryTeste, setCategoryTeste] = useState([])

    const [groupGoals, setGroupGoals] = useState([])
    const [groupActivities, setGroupActivities] = useState([])

    const [groupGoalsGroup, setGroupGoalsGroup] = useState([])
    const [groupActivitiesGroup, setGroupActivitiesGroup] = useState([])

    const [title, setTitle] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [group, setGroup] = useState("")

    const [popUpT, setPopUpt] = useState(false)
    const [popUpActGoal, setPopUpActGoal] = useState(false)
    const [popUpUpdateGroup, setUpdateGroup] = useState(false)

    const [popUp, setPopUp] = useState(false)
    const [popUpMeta, setPopUpMeta] = useState(false)
    const [popUpActivities, setPopUpActivities] = useState(false)

    const [isLoading, setLoading] = useState(false)
    const [reload, setReload] = useState(false);

   const [token] = useState(JSON.parse(localStorage.getItem("@DevHealthy/user")) || "")

   // Grupos inscritos 
    useEffect(() => {
        setLoading(true)
        api.get(`/groups/subscriptions/`, {         
            headers: { Authorization: `Bearer ${token}`}
        
        })
        .then(res => {
            setMyGroups(res.data)
            setLoading(false)
        })
        

        .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [groupGoals, reload])


    // Todos grupos que não precisam de ("Autorização")
    useEffect(() => {
        setLoading(true)
        api.get(`/groups/?page=${page}`)
        .then(res => {setGroups(res.data.results); setLoading(false); setTotalPages(Math.ceil(res.data.count / 15))})
        .catch(err => console.log(err))
    }, [page])


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
            window.location.reload();
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
            window.location.reload();
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
        setLoading(true)
        api.post("/groups/", data, {
            headers: { 
                Authorization: `Bearer ${token}`
            },
        })
        .then(_ => {
            setMyGroups([...myGroups, {...data}])
            setLoading(false)
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
            // window.location.reload();
            
        })
        .catch(_ => toast.error("Erro ao criar o grupo!",
        {
            style: {
                backgroundColor: "red",
                color: "#fff",
            }
        }))
    }


    // Entrar em um grupo 
    const handleSignIn = (id) => {
        setLoading(true)
        api.post(`/groups/${id}/subscribe/`, null, {

            headers: { Authorization: `Bearer ${token}`},
        })
        .then(_ => {
            setLoading(false)
            toast.success("Você entrou no grupo",
            {
                style: {
                    backgroundColor: "#228B22",
                    color: "#fff"
                }
            })
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


    // Sair de um grupo
    const handleLogout = (id) => {
        setLoading(true)
        api.delete(`/groups/${id}/unsubscribe/`, {
            headers: { Authorization: `Bearer ${token}`}

        })
        .then(() => {setLoading(false); window.location.reload()})
        .catch(err => console.log(err))
    }


    // Deletando meta 
    const handleDeleteGoal = (id) => {
        api.delete(`/goals/${id}/`, {

            headers: { Authorization: `Bearer ${token}`}
        })
        .then(_ => {
            setGroupGoals(myGroups.filter(item => item !== id))
            setPopUpActGoal(!popUpActGoal)
            // window.location.reload();
        })
        .catch(err => console.log(err))
    }


    // Deletando Atividade
    const handleDeleteActv = (id) => {
        api.delete(`/activities/${id}/`, {

            headers: { Authorization: `Bearer ${token}`}
        })
        .then(_ => {
            const removeItem = myGroups.filter(item => item !== id)
            setGroupActivities(removeItem)
            setPopUpActGoal(!popUpActGoal)
            // window.location.reload();
        })
        .catch(err => console.log(err))
    }

    // Imprimindo metas e atividades de um grupo
    
    
    const handleInfo = (itemId) => {
		const filtGoals = myGroups.filter((item) => item.id === itemId);
		setGroupGoals(filtGoals);

		const filtActivities = myGroups.filter((item) => item.id === itemId);
		setGroupActivities(filtActivities);

		const filtGroupsGoals = groups.filter((item) => item.id === itemId);
		setGroupGoalsGroup(filtGroupsGoals);
    }
    
    const handleUpdateGroup = (id) => {
        const dataGroup = { category: category }
        
        api.patch(`/groups/${id}/`, dataGroup, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        .then(_ => {setMyGroups(myGroups.filter(gro => gro !== dataGroup)); })
        .catch(err => console.log(err))
       
    }


    const handleUpdateActivities = (id) => {
        const teste = { title: title }
        
        api.patch(`/activities/${id}/`, teste, {
            headers: { 
                "Content-Type": "application/json", 
                Authorization: `Bearer ${token}`
            }
        })
        .then(() => {
            setGroupActivities(myGroups.filter(gro => gro !== teste))
            setPopUpActGoal(!popUpActGoal)
            setTitle("")
            window.location.reload();

        })
        .catch(err => console.log(err))
    }


    return (
        <GroupsContext.Provider value={{groups, setGroups, name, setName, description, setDescription, category, setCategory, myGroups, setMyGroups, goals, setGoals, title, setTitle, difficulty, setDifficulty, group, setGroup, handleCreateGoal, handleCreateActivity, activities, setActivities, popUp, setPopUp, popUpMeta, setPopUpMeta, popUpActivities, setPopUpActivities, handleCreate, handleSignIn, handleInfo, groupGoals, groupActivities, setGroupActivities, handleDeleteGoal, handleDeleteActv, handleLogout, handleUpdateActivities, popUpT, setPopUpt, isLoading, setLoading, popUpActGoal, setPopUpActGoal, groupGoalsGroup, groupActivitiesGroup, page, setPage, totalPages, handleUpdateGroup, popUpUpdateGroup, setUpdateGroup}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext)
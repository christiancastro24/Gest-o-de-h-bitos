import { createContext, useContext, useState, useEffect } from "react"
import api from "../../Services/"

const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [groups, setGroups] = useState([])
    const [groupsFiltered, setGroupsFiltered] = useState([])
    const [error, setError] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        api.get("/activities/")
        .then(res => {
            setError(false)
            setGroups(res.data.results.slice(0,4))
        }) 
        .catch(error => console.log(error))
    }, [])

    const handleSearch = (groupList) => {
        const filterGroups = groups.filter(group => group.title.toLowerCase().includes(groupList.toLowerCase()))
        setGroupsFiltered(filterGroups)

        if(filterGroups.length > 0) {
            setError(false)
        } else {
            setError(true)
        }
    }

    const handleClear = () => {
        setGroupsFiltered([])
        setError(false)
        setSearch("")
    }

    return (
        <GroupsContext.Provider value={{groups, groupsFiltered, search, setSearch, error, handleSearch, handleClear}}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext)
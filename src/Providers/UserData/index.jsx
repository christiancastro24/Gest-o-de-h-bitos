import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
    const [reloadData, setReloadData] = useState(true);
	const [token, setToken] = useState(
		JSON.parse(localStorage.getItem("@DevHealthy/user")) || '')
	;
    const [habits, setHabits] = useState('');
    const [groupsIn, setGroupsIn] = useState([]);
    const [userId, setUserId] = useState('');
    const [timer, setTimer] = useState(JSON.parse(localStorage.getItem('habitsLastUpdate')) || {});
	
    const recarregarDados = () => {
        setReloadData(!reloadData)
    }
    useEffect(() => {
		if (token){
            api.get("/habits/personal/", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((res) => {
            setHabits(res.data);
        }).catch(err=>console.log(err));

        api.get("/groups/subscriptions/", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}).then(res=>{
            setGroupsIn(res.data)
        }).catch(err=>console.log(err));
        }
        
		
	}, [token, reloadData]);

    const handleUpdateTimer = (habitId, dates) => {
        const temp = timer;
        temp[habitId] = dates;
        setTimer(temp);
        localStorage.setItem('habitsLastUpdate', JSON.stringify(timer))
    }

	return (
		<UserDataContext.Provider
			value={{ token, setToken, habits, setHabits, userId, setUserId, groupsIn, setGroupsIn, recarregarDados, handleUpdateTimer }}
		>
			{children}
		</UserDataContext.Provider>
	);
};

export const useUserData = () => useContext(UserDataContext);

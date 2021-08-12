import { createContext, useContext, useEffect, useState } from "react"

const AutheticationContext = createContext();

export const AutheticationProvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const access = JSON.parse(localStorage.getItem("@DevHealthy/user"))

        if(access) {
            setAuthenticated(true)
        }

    }, [authenticated])

    return (
        <AutheticationContext.Provider value={{authenticated, setAuthenticated}}>
            {children}
        </AutheticationContext.Provider>
    )
}

export const useAuthenticated = () => useContext(AutheticationContext)
import { createContext, useState } from "react";

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const setNewUser = newUser => setUser(newUser)

    return (
        <UserContext.Provider value={[ user, setNewUser ]}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider
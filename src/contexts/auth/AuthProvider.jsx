import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { fetchUser } from "../../utils/api";

function AuthProvider( { children } ) {
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function login(username, password) {
        setIsLoading(true);
        try {
            const data = await fetchToken(username, password);
            const userData = await fetchUser(data.token);
            setUser(userData);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{user, isLoading, login}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
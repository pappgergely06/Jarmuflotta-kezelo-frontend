import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { fetchUser } from "../../utils/api";

function AuthProvider( { children } ) {
    
    const [user, setUser] = useState(null)
    const [userError, setUserError] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchUser()
            .then((user) => setUser(user))
            .catch((error) => setUserError(error))
            .finally(() => setIsLoading(false))
    }, [])

    return (
        <AuthContext.Provider value={{user, isLoading}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
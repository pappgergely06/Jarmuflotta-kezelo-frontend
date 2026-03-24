import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider( { children } ) {
    
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    return (
        <AuthContext.Provider value={{user, isLoading}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
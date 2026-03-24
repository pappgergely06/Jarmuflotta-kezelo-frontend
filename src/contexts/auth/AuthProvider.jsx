import { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider( { children } ) {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)

    return (
        <AuthContext.Provider value={{isLoggedIn, isAdmin}}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;
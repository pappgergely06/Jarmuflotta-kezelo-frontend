import { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { fetchToken, fetchUser } from "../../utils/api";
import { useNavigate } from "react-router";
import Cookies from "js-cookie";

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        async function loadUserFromCookie() {
            const token = Cookies.get("auth_token");
            if (token) {
                try {
                    const userData = await fetchUser(token);
                    setUser(userData);
                } catch (error) {
                    console.error("Érvénytelen token, kijelentkeztetés...");
                    Cookies.remove("auth_token");
                    setUser(null);
                }
            }
            setIsLoading(false);
        }
        loadUserFromCookie();
    }, []);

    async function login(username, password) {
        setIsLoading(true);
        setLoginError("");

        try {
            const data = await fetchToken(username, password);


            Cookies.set("auth_token", data.token, {
                expires: 7,
                secure: true,
                sameSite: "strict"
            });

            const userData = await fetchUser(data.token);
            console.log(userData)
            setUser(userData)

            if (userData.role === "admin") {
                navigate("admin")
            } else if (userData.role === "driver") {
                navigate("driver")
            }


        } catch (error) {
            console.error("Login hiba:", error);
            setLoginError("Hibás felhasználónév vagy jelszó!");
        } finally {
            setIsLoading(false);
        }
    }

    function logout() {
        Cookies.remove("auth_token");
        setUser(null);
        setLoginError("");
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{ user, loginError, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
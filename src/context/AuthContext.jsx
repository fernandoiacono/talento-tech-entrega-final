import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null);

    // useEffect(() => {
    //     comprobarAutenticacion();
    // }, [usuario]);

    // const comprobarAutenticacion = () => {
    //     const token = localStorage.getItem("authToken") && localStorage.getItem("authToken") != null ? localStorage.getItem("authToken") : "";
    //     if (!token) {
    //         logout();
    //         return;
    //     }
    //     const nombreUsuario = token.split("-")[1];
    //     // localStorage.setItem("authToken", token);
    //     login(nombreUsuario);
    // };

    const login = (nombreUsuario) => {
        const token = `token-${nombreUsuario}`;
        localStorage.setItem("authToken", token);
        setUsuario(nombreUsuario);
        // console.log(nombreUsuario, usuario);
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        setUsuario(null);
    };

    return <AuthContext.Provider value={{ usuario, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

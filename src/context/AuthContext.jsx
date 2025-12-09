import { useState, useContext, createContext, useEffect } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [usuario, setUsuario] = useState();

    // useEffect(() => {
    //     comprobarAutenticacion();
    // }, []);

    // const comprobarAutenticacion = () => {
    //     const token = localStorage.getItem("authToken") && localStorage.getItem("authToken") != null ? localStorage.getItem("authToken") : "";
    //     const infoUsuario = localStorage.getItem("ecommerce-user") && localStorage.getItem("ecommerce-user") != null ? localStorage.getItem("ecommerce-user") : "";
    //     if (!token || !infoUsuario) {
    //         logout();
    //         return false;
    //     }
    //     const data = JSON.parse(infoUsuario);
    //     console.log(token, infoUsuario, data);
    //     setUsuario({ nombreUsuario: data.nombreUsuario, admin: data.admin, nombre: data.nombre, email: data.email });
    //     console.log("state usuario desde AuthContext.jsx", usuario);
    //     // login(data.nombreUsuario, data.admin, data.nombre, data.email);
    //     return true;
    // };

    const login = (nombreUsuario, admin, nombre, email) => {
        // localStorage.removeItem("authToken");
        // localStorage.removeItem("ecommerce-user");
        localStorage.setItem("authToken", `token-${nombreUsuario}`);
        localStorage.setItem("ecommerce-user", JSON.stringify({ nombreUsuario: nombreUsuario, admin: admin, nombre: nombre, email: email }));
        return setUsuario({ nombreUsuario: nombreUsuario, admin: admin, nombre: nombre, email: email });
    };

    const logout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("ecommerce-user");
        setUsuario(null);
    };

    return <AuthContext.Provider value={{ usuario, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);

import { createContext, useState, useContext } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
        // localStorage.setItem("carrito", JSON.stringify({ productos: carrito }));
    };

    const eliminarDelCarrito = (indiceAEliminar) => {
        setCarrito(carrito.filter((_, indice) => indice !== indiceAEliminar));
        // localStorage.setItem("carrito", JSON.stringify({ productos: carrito }));
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        // localStorage.removeItem("carrito");
    };

    return <CarritoContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito }}>{children}</CarritoContext.Provider>;
};

export const useCarritoContext = () => useContext(CarritoContext);

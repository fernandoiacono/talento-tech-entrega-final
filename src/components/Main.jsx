import Productos from "./Productos";
import Carrito from "./Carrito";
import { useState } from "react";

function Main() {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCarrito([...carrito, producto]);
    };

    const eliminarProductoDelCarrito = (idDelProductoAEliminar) => {
        setCarrito(
            carrito.filter((producto, index) => {
                return index !== idDelProductoAEliminar;
            })
        );
    };

    return (
        <>
            <Carrito carrito={carrito} eliminarProductoDelCarrito={eliminarProductoDelCarrito} />
            <Productos agregarAlCarrito={agregarAlCarrito} />
        </>
    );
}
export default Main;

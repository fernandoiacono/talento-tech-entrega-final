import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const Carrito = () => {
    const { carrito, eliminarDelCarrito } = useContext(CarritoContext);

    return (
        <div className="m-4">
            <h3 className="text-2xl my-4">Productos en el carrito: {carrito.length}</h3>
            {carrito.map((producto, indice) => (
                <div key={indice} className="flex items-center border-b-1 border-slate-400 py-2">
                    <img src={producto.url} alt={producto.nombre} className="size-10" />
                    <p className="mx-4">
                        {producto.nombre}: ${producto.precio}
                    </p>
                    <button onClick={() => eliminarDelCarrito(indice)} className="bg-red-500 p-1 text-white rounded-md cursor-pointer">
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Carrito;

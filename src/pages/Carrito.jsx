import { useNavigate } from "react-router-dom";
import { useCarritoContext } from "../context/CarritoContext";

const Carrito = () => {
    const { carrito, eliminarDelCarrito, vaciarCarrito } = useCarritoContext();

    const manejarFinalizarCompra = () => {
        alert("Checkout simulado, compra finalizada con exito!");
        vaciarCarrito();
    };

    const navigate = useNavigate();

    return (
        <div className="m-4">
            <div className="w-full flex items-center justify-between">
                <h3 className="text-2xl my-4">Productos en el carrito: {carrito.length}</h3>
                {carrito.length > 0 && (
                    <button onClick={() => vaciarCarrito()} className="bg-red-500 px-2 text-white rounded-md cursor-pointer h-10">
                        Vaciar Carrito
                    </button>
                )}
            </div>
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
            {carrito.length > 0 ? (
                <button onClick={() => manejarFinalizarCompra()} className="bg-blue-900 mt-2 py-2 text-white rounded-md cursor-pointer w-full">
                    Finalizar Compra
                </button>
            ) : (
                <button onClick={() => navigate("/")} className="bg-green-700 mt-2 py-2 text-white rounded-md cursor-pointer w-full">
                    Volver al Sitio
                </button>
            )}
        </div>
    );
};

export default Carrito;

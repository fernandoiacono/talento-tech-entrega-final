import { useState, useContext } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";

function Productos() {
    const { agregarAlCarrito } = useContext(CarritoContext);
    const { productos, cargando, error } = useProductosContext();
    const [nombreBusqueda, setNombreBusqueda] = useState("");

    const productosFiltrados = productos.filter((p) => {
        return p.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase());
    });

    const productosAMostrar = nombreBusqueda.trim() === "" ? productos : productosFiltrados;

    if (cargando) return <p className="w-full text-center mt-3 text-2xl">Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="m-5 px-8">
            <div className="mb-4 flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={nombreBusqueda}
                    onChange={(e) => setNombreBusqueda(e.target.value)}
                    className="w-full max-w-md placeholder-gray-500 border border-slate-200 focus:border-amber-600 outline-none rounded-xl px-4 py-2 transition-all duration-200 shadow-md"
                />
            </div>
            <div className="grid grid-cols-3">
                {productosAMostrar.map((producto) => (
                    <div key={producto.id} className="flex flex-col border-1 rounded-md border-slate-400 p-4 m-1">
                        <div className="w-full flex justify-center">
                            <img src={producto.url} className="size-50 aspect-square object-scale-down" />
                        </div>
                        <div className="mt-4 font-bold p">{producto.nombre}</div>
                        <div className="my-4 text-slate-600 line-clamp-2">{producto.descripcion}</div>
                        <div className="font-semibold w-full flex justify-end text-3xl pr-4">${producto.precio}</div>
                        <div className="p-3 text-center"></div>
                        <div className="flex justify-evenly">
                            <Link to={`/productos/${producto.id}`} className="bg-amber-600 rounded-[0.25rem] text-white py-2 flex w-50 justify-center">
                                Detalle
                            </Link>
                            <button onClick={() => agregarAlCarrito(producto)} className="bg-blue-900 rounded-[0.25rem] text-white py-2 flex w-50 justify-center cursor-pointer">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Productos;

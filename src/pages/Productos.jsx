import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import Paginador from "../components/Paginador";

const Productos = () => {
    // CONTEXTO
    const { agregarAlCarrito } = useCarritoContext();
    const { productos, cargando, error } = useProductosContext();

    // ESTADOS
    const [nombreBusqueda, setNombreBusqueda] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);

    // CONSTANTES
    const PRODUCTOS_POR_PAGINA = 6; // Cantidad de productos a mostrar por página

    // BUSQUEDA
    const productosFiltrados = productos.filter((p) => {
        return p.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase());
    });

    const productosAMostrar = nombreBusqueda.trim() === "" ? productos : productosFiltrados;

    // PAGINACION
    // Calcular el índice de los productos a mostrar en la página actual
    const indiceUltimoProducto = paginaActual * PRODUCTOS_POR_PAGINA;
    const indicePrimerProducto = indiceUltimoProducto - PRODUCTOS_POR_PAGINA;
    const productosActuales = productosAMostrar.slice(indicePrimerProducto, indiceUltimoProducto);

    const totalPaginas = Math.ceil(productosAMostrar.length / PRODUCTOS_POR_PAGINA);

    const cambiarPagina = (numeroPagina) => {
        if (numeroPagina > 0 && numeroPagina - 1 < totalPaginas) {
            setPaginaActual(numeroPagina);
        }
    };

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
                {productosActuales.map((producto) => (
                    <div key={producto.id} className="flex flex-col border rounded-md border-slate-400 p-4 m-1">
                        <div className="w-full flex justify-center">
                            <img src={producto.url} className="size-50 aspect-square object-scale-down" />
                        </div>
                        <div className="mt-4 font-bold p">{producto.nombre}</div>
                        <div className="my-4 text-slate-600 line-clamp-2">{producto.descripcion}</div>
                        <div className="font-semibold w-full flex justify-end text-3xl pr-4">${producto.precio}</div>
                        <div className="p-3 text-center"></div>
                        <div className="flex justify-evenly">
                            <Link to={`/productos/${producto.id}`} className="bg-amber-600 rounded-sm text-white py-2 flex w-50 justify-center">
                                Detalle
                            </Link>
                            <button onClick={() => agregarAlCarrito(producto)} className="bg-blue-900 rounded-sm text-white py-2 flex w-50 justify-center cursor-pointer">
                                Agregar al Carrito
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Paginador paginaActual={paginaActual} totalPaginas={totalPaginas} cambiarPagina={cambiarPagina} />
        </div>
    );
};

export default Productos;

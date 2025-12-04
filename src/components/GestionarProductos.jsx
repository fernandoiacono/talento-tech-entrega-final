import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import FormularioProducto from "./FormularioProducto";
import { Trash2, Pencil, Plus } from "lucide-react";
import Paginador from "./Paginador";

const GestionarProductos = () => {
    // CONSTANTES
    const PRODUCTOS_POR_PAGINA = 4; // Cantidad de productos a mostrar por página

    // CONTEXTO
    const { productos, eliminarProducto } = useProductosContext();

    // ESTADOS
    const [mostrarForm, setMostrarForm] = useState(false);
    const [modoFormulario, setModoFormulario] = useState("agregar");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [nombreBusqueda, setNombreBusqueda] = useState("");
    const [paginaActual, setPaginaActual] = useState(1);

    // AGREGAR
    const abrirFormularioAgregar = () => {
        setModoFormulario("agregar");
        setProductoSeleccionado(null);
        setMostrarForm(true);
    };

    // EDITAR
    const abrirFormularioEditar = (producto) => {
        setModoFormulario("editar");
        setProductoSeleccionado(producto);
        setMostrarForm(true);
    };

    // CERRAR
    const cerrarFormulario = () => {
        setMostrarForm(false);
        setProductoSeleccionado(null);
    };

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

    return (
        <div className="m-4">
            <div className="flex justify-between">
                <h2 className="text-3xl">Lista de Productos</h2>
                <button className="flex items-center cursor-pointer bg-blue-500 text-white rounded-md p-2 mx-2" onClick={() => abrirFormularioAgregar()}>
                    <span className="mr-2">
                        <Plus />
                    </span>
                    <span className="-translate-y-0.5">Agregar Producto</span>
                </button>
            </div>
            <div className="mb-8 flex justify-center">
                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={nombreBusqueda}
                    onChange={(e) => setNombreBusqueda(e.target.value)}
                    className="w-full max-w-md placeholder-gray-500 border border-slate-200 focus:border-amber-600 outline-none rounded-xl px-4 py-2 transition-all duration-200 shadow-md"
                />
            </div>
            <ul className="w-full mt-4 flex flex-col gap-4">
                {productosActuales.map((producto) => (
                    <li key={producto.id} className="border-1 border-slate-200 w-full flex items-center rounded-md p-4 shadow-md">
                        <img src={producto.url} alt={producto.nombre} className="w-18 h-18 mr-4 object-cover rounded-sm border-1 border-slate-400" />
                        <strong>{producto.nombre}</strong>: ${producto.precio}
                        <p className="ml-1">{producto.descripcion}</p>
                        <button className="cursor-pointer bg-yellow-500 text-white rounded-md p-2 mx-2" onClick={() => abrirFormularioEditar(producto)}>
                            <Pencil />
                        </button>
                        <button className="cursor-pointer bg-red-500 text-white rounded-md p-2" onClick={() => eliminarProducto(producto.id)}>
                            <Trash2 />
                        </button>
                    </li>
                ))}
            </ul>
            <Paginador paginaActual={paginaActual} totalPaginas={totalPaginas} cambiarPagina={cambiarPagina} />

            {/* Modal - Formulario condicional */}
            {mostrarForm && (
                <>
                    {/* Pasar los props correctos según el modo */}
                    <FormularioProducto
                        productoSeleccionado={
                            productoSeleccionado || {
                                nombre: "",
                                precio: "",
                                url: "",
                                descripcion: "",
                            }
                        }
                        modo={modoFormulario}
                        onCerrar={cerrarFormulario}
                    />
                </>
            )}
        </div>
    );
};

export default GestionarProductos;

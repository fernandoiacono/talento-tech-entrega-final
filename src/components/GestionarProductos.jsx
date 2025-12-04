import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import FormularioProducto from "./FormularioProducto";
import { Trash2, Pencil, Plus } from "lucide-react";

const GestionarProductos = () => {
    // Cargando contexto de producto
    const { productos, eliminarProducto } = useProductosContext();

    // Estados
    const [mostrarForm, setMostrarForm] = useState(false);
    const [modoFormulario, setModoFormulario] = useState("agregar");
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [nombreBusqueda, setNombreBusqueda] = useState("");

    // Abrir formulario para AGREGAR
    const abrirFormularioAgregar = () => {
        setModoFormulario("agregar");
        setProductoSeleccionado(null);
        setMostrarForm(true);
    };

    // Abrir formulario para EDITAR
    const abrirFormularioEditar = (producto) => {
        setModoFormulario("editar");
        setProductoSeleccionado(producto);
        setMostrarForm(true);
    };

    // Cerrar formulario
    const cerrarFormulario = () => {
        setMostrarForm(false);
        setProductoSeleccionado(null);
    };

    const productosFiltrados = productos.filter((p) => {
        return p.nombre.toLowerCase().includes(nombreBusqueda.toLowerCase());
    });

    const productosAMostrar = nombreBusqueda.trim() === "" ? productos : productosFiltrados;

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
                {productosAMostrar.map((producto) => (
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

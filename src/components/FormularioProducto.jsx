import { useState } from "react";
import { useProductosContext } from "../context/ProductosContext";
import { CircleX } from "lucide-react";

const FormularioProducto = ({
    productoSeleccionado = {
        nombre: "",
        precio: "",
        url: "",
        descripcion: "",
    },
    modo = "agregar",
    onCerrar,
}) => {
    // Contexto
    const { agregarProducto, editarProducto } = useProductosContext();

    // Estados
    const [producto, setProducto] = useState(productoSeleccionado);
    const [errores, setErrores] = useState({});

    const manejarOnChange = (e) => {
        const { name, value } = e.target;
        setProducto({ ...producto, [name]: value });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!producto.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio.";
        }
        if (!producto.precio || producto.precio <= 0) {
            nuevosErrores.precio = "El precio debe ser mayor a 0.";
        }
        if (!producto.url.trim()) {
            nuevosErrores.url = "La url es obligatoria.";
        }
        if (!producto.descripcion.trim() || producto.descripcion.length < 10) {
            nuevosErrores.descripcion = "La descripción debe tener al menos 10 caracteres.";
        }

        setErrores(nuevosErrores);

        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarOnSubmit = async (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            if (modo === "agregar") {
                await agregarProducto(producto);
            } else {
                await editarProducto(producto);
            }
            onCerrar();
            setProducto({
                nombre: "",
                precio: "",
                url: "",
                descripcion: "",
            });
        }
    };

    return (
        <div className="fixed inset-0 transition-opacity flex items-center justify-center opacity-100 pointer-events-auto" style={{ zIndex: "10000" }}>
            <div className="w-full h-full bg-zinc-950 opacity-90 absolute"></div>
            <div className="bg-white rounded-lg p-6 flex flex-col items-center gap-4 shadow-lg min-w-100" style={{ zIndex: "10000" }}>
                <div className="w-100 text-gray-600 flex justify-end cursor-pointer" onClick={() => onCerrar()}>
                    <CircleX />
                </div>
                <h3 className="text-2xl font-semibold text-center mb-6">{modo === "agregar" ? "Agregar" : "Modificar "} Producto</h3>
                <form className="flex flex-col gap-4 w-100" onSubmit={manejarOnSubmit}>
                    <div>
                        <label htmlFor="nombre" className="block mb-1 text-sm text-gray-700">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Nombre del Producto"
                            value={producto.nombre}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500"
                        />
                        {errores.nombre && <p className="text-red-500">{errores.nombre}</p>}
                    </div>
                    <div>
                        <label htmlFor="precio" className="block mb-1 text-sm text-gray-700">
                            Precio:
                        </label>
                        <input
                            type="number"
                            id="precio"
                            name="precio"
                            placeholder="0"
                            value={producto.precio}
                            onChange={manejarOnChange}
                            min="0"
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500"
                        />
                        {errores.precio && <p className="text-red-500">{errores.precio}</p>}
                    </div>
                    <div>
                        <label htmlFor="url" className="block mb-1 text-sm text-gray-700">
                            Url Imagen:
                        </label>
                        <input
                            type="text"
                            id="url"
                            name="url"
                            placeholder="Url de la Imagen"
                            value={producto.url}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500"
                        />
                        {errores.url && <p className="text-red-500">{errores.url}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="descripcion" className="block mb-1 text-sm text-gray-700">
                            Descripcion:
                        </label>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            placeholder="Descripción del Producto"
                            value={producto.descripcion}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600 placeholder-gray-500"
                        />
                        {errores.descripcion && <p className="text-red-500">{errores.descripcion}</p>}
                    </div>
                    <button type="submit" className="border-1 cursor-pointer bg-amber-500 text-white rounded-md p-2">
                        {modo === "agregar" ? "Agregar" : "Modificar"} Producto
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FormularioProducto;

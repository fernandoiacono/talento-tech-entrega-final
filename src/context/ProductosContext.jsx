import { useState, useEffect, createContext, useContext } from "react";
import { toast } from "react-toastify";

export const ProductosContext = createContext();

export const ProductosProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    const BASE_URL = "https://691dc6aed58e64bf0d37855c.mockapi.io/api/v1/productos";

    // Cargar productos al montar el componente
    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            setCargando(true);

            setError(null);

            const respuesta = await fetch(BASE_URL);

            if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

            const datos = await respuesta.json();
            setProductos(datos);
        } catch (error) {
            console.error("Error al cargar productos:", error);
            setError(error.message || "Error al cargar los productos");
        } finally {
            setCargando(false);
        }
    };

    // AGREGAR
    const agregarProducto = async (producto) => {
        try {
            setError(null);

            const respuesta = await fetch(BASE_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });
            const nuevoProducto = await respuesta.json();
            // console.log("Producto agregado: ", nuevoProducto);

            if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

            //Agregar el nuevo producto a la lista
            setProductos([...productos, nuevoProducto]);

            toast.success("Producto agregado con exito!", {
                position: "top-right",
            });
        } catch (error) {
            console.error("Error al agregar:", error);
            const mensajeError = "Ocurrió un problema al agregar el producto.";
            setError(mensajeError);
            toast.error(mensajeError, {
                position: "top-right",
            });
        }
    };

    // EDITAR
    const editarProducto = async (producto) => {
        try {
            setError(null);

            const respuesta = await fetch(`${BASE_URL}/${producto.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });

            if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);

            const productoActualizado = await respuesta.json();
            setProductos(productos.map((p) => (p.id === productoActualizado.id ? productoActualizado : p)));

            toast.success("Producto modificado con exito!", {
                position: "top-right",
            });
        } catch (error) {
            console.error("Error al editar:", error);
            const mensajeError = "Ocurrió un problema al editar el producto.";
            setError(mensajeError);
            toast.error(mensajeError, {
                position: "top-right",
            });
        }
    };

    // ELIMINAR
    const eliminarProducto = async (id) => {
        const confirmar = window.confirm("¿Estás seguro de eliminar?");

        if (confirmar) {
            try {
                setError(null);

                const respuesta = await fetch(`${BASE_URL}/${id}`, {
                    method: "DELETE",
                });

                if (!respuesta.ok) throw new Error("Error al eliminar");

                // Filtra y crea un nuevo array sin el producto eliminado
                setProductos(productos.filter((p) => p.id !== id));

                toast.success("Producto eliminado con exito!", {
                    position: "top-right",
                });
            } catch (error) {
                console.error(error.message);
                const mensajeError = "Hubo un problema al eliminar el producto.";
                setError(mensajeError);
                toast.error(mensajeError, {
                    position: "top-right",
                });
            }
        }
    };

    return (
        <ProductosContext.Provider
            value={{
                productos,
                cargando,
                error,
                cargarProductos,
                agregarProducto,
                editarProducto,
                eliminarProducto,
            }}
        >
            {children}
        </ProductosContext.Provider>
    );
};

export const useProductosContext = () => useContext(ProductosContext);

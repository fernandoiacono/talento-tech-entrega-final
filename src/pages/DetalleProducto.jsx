import { useProductosContext } from "../context/ProductosContext";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const { id } = useParams();
    const { productos, cargando, error } = useProductosContext();
    let producto = {
        nombre: "",
        precio: 0,
        url: "",
        descripcion: "",
    };

    if (cargando) return <p className="w-full text-center mt-3 text-2xl">Cargando producto...</p>;
    if (error) return <p>{error}</p>;

    producto = productos.filter((p) => {
        return p.id === id;
    });

    if (producto.length === 0) return <p className="w-full text-center mt-3 text-2xl">Producto Inexistente</p>;

    return (
        <div className="m-5">
            <div className="flex">
                <div className="mr-4">
                    <img src={producto[0].url} alt={producto[0].nombre} className="w-50 h-50 object-cover" />
                </div>
                <div>
                    <div className="mt-2 font-bold">{producto[0].nombre}</div>
                    <div className="mt-2">{producto[0].descripcion}</div>
                    <div className="mt-2 font-semibold">Precio: ${producto[0].precio}</div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;

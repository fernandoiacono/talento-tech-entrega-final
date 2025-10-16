import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((respuesta) => respuesta.json())
            .then((dato) => {
                setCargando(false);
                setProducto(dato);
            })
            .catch((error) => {
                setError("Hubo un problema al cargar los productos.");
                setCargando(false);
            });
    }, [id]);

    if (cargando) return <p className="w-full text-center mt-3 text-2xl">Cargando producto...</p>;
    if (error) return <p>{error}</p>;

    // id, image, title, category, description, price, rating
    return (
        <div className="m-5">
            <div className="mt-2 mb-4 font-bold italic uppercase w-full flex justify-end">{producto.category}</div>
            <div className="flex">
                <div className="mr-4">
                    <img src={producto.image} alt={producto.title} />
                </div>
                <div>
                    <div className="mt-2 font-bold">{producto.title}</div>
                    <div className="mt-2">{producto.description}</div>
                    <div className="mt-2 font-semibold">${producto.price}</div>
                    <div className="mt-2 font-semibold">Rating: {producto.rating.rate}</div>
                    <div className="mt-2 font-semibold">Reviews: {producto.rating.count}</div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;

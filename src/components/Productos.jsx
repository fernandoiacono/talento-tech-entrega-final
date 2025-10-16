import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Productos({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setCargando(false);
                setProductos(datos);
            })
            .catch((error) => {
                setError("Hubo un problema al cargar los productos.");
                setCargando(false);
            });
    }, []);

    if (cargando) return <p className="w-full text-center mt-3 text-2xl">Cargando productos...</p>;
    if (error) return <p>{error}</p>;

    return (
        // id, image, title, category, description, price, rating
        <div className="m-5">
            <div className="grid grid-cols-3">
                {productos.map((producto) => (
                    <div key={producto.id} className="flex flex-col border-1 rounded-md border-slate-400 p-4 m-1">
                        {/* <div className="p-3">{producto.id}</div> */}
                        <div className="w-full flex justify-center">
                            <img src={producto.image} className="size-50 aspect-square object-scale-down" />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <div className="bg-cyan-600 text-white py-1 px-2 flex justify-center rounded-full uppercase">{producto.category}</div>
                        </div>

                        <div className="mt-4 font-bold p">{producto.title}</div>
                        <div className="my-4 text-slate-600 line-clamp-2">{producto.description}</div>
                        <div className="font-semibold w-full flex justify-end text-3xl pr-4">${producto.price}</div>
                        <div className="p-3 text-center">
                            Rating: {producto.rating.rate} de 5 | Reviews: <span className="font-medium">{producto.rating.count}</span>
                        </div>
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

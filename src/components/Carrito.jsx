const Carrito = ({ carrito, eliminarProductoDelCarrito }) => {
    if (carrito.length > 0) {
        return (
            <div className="m-4">
                <h3 className="text-2xl my-4">Productos en tu carrito: {carrito.length}</h3>
                {carrito.map((producto, indice) => (
                    <div key={indice} className="flex items-center border-b-1 border-slate-400 py-2">
                        <img src={producto.image} alt={producto.title} className="size-10" />
                        <p className="mx-4">
                            {producto.title}: ${producto.price}
                        </p>
                        <button onClick={() => eliminarProductoDelCarrito(indice)} className="bg-red-500 p-1 text-white rounded-md cursor-pointer">
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        );
    }
};

export default Carrito;

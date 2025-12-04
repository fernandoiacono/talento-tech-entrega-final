const Paginador = ({ paginaActual, totalPaginas, cambiarPagina }) => {
    return (
        <div className="flex justify-center my-4">
            <button className="rounded-md cursor-pointer py-2 mx-1 bg-blue-900 px-4 text-white flex justify-center items-center" onClick={() => cambiarPagina(paginaActual - 1)}>
                {"<"}
            </button>
            {Array.from({ length: totalPaginas }, (_, index) => (
                <button key={index + 1} className={`rounded-md cursor-pointer px-4 py-2 mx-1 ${paginaActual === index + 1 ? "border-2 border-blue-900 text-slate-600" : "bg-blue-900 px-4.5 text-white"}`} onClick={() => cambiarPagina(index + 1)}>
                    {index + 1}
                </button>
            ))}
            <button className="rounded-md cursor-pointer py-2 mx-1 bg-blue-900 px-4 text-white flex justify-center items-center" onClick={() => cambiarPagina(paginaActual + 1)}>
                {">"}
            </button>
        </div>
    );
};

export default Paginador;

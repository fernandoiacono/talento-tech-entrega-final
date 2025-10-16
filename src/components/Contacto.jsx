const Contacto = () => {
    const enviarFormulario = (event) => {
        event.preventDefault();
        alert("Mensaje Enviado");
    };

    return (
        <div className="flex flex-col items-center justify-center m-4">
            <div className="w-full max-w-md p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-center mb-6">Contacto</h3>

                <form className="flex flex-col gap-4" onSubmit={enviarFormulario}>
                    <div>
                        <label htmlFor="nombre" className="block mb-1 text-sm text-gray-700">
                            Nombre:
                        </label>
                        <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
                            Email:
                        </label>
                        <input type="email" id="email" name="email" placeholder="tuemail@ejemplo.com" className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:focus:border-amber-600  placeholder-gray-500" />
                    </div>

                    <div>
                        <label htmlFor="mensaje" className="block mb-1 text-sm text-gray-700">
                            Mensaje:
                        </label>
                        <textarea type="number" id="mensaje" name="asunto" placeholder="Escribí tu mensaje" className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600 placeholder-gray-500" />
                    </div>

                    <button type="submit" className="mt-4 bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 cursor-pointer">
                        Enviar mensaje
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;

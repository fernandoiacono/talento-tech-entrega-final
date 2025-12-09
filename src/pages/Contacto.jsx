import { useState } from "react";

const Contacto = () => {
    const [mensajeContacto, setMensajeContacto] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });
    const [errores, setErrores] = useState({});

    const manejarOnChange = (e) => {
        const { name, value } = e.target;
        setMensajeContacto({ ...mensajeContacto, [name]: value });
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!mensajeContacto.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio.";
        }
        if (!mensajeContacto.email.trim()) {
            nuevosErrores.email = "El E-Mail es obligatorio.";
        }
        if (!mensajeContacto.mensaje.trim() || mensajeContacto.mensaje.length < 10) {
            nuevosErrores.mensaje = "El mensaje debe tener al menos 10 caracteres.";
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const manejarOnSubmit = (e) => {
        e.preventDefault();
        if (validarFormulario()) {
            alert("Mensaje Enviado");
            setMensajeContacto({
                nombre: "",
                email: "",
                mensaje: "",
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center m-4">
            <div className="w-full max-w-md p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-center mb-6">Contacto</h3>
                <form className="flex flex-col gap-4" onSubmit={manejarOnSubmit}>
                    <div>
                        <label htmlFor="nombre" className="block mb-1 text-sm text-gray-700">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={mensajeContacto.nombre}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500"
                        />
                        {errores.nombre && <p className="text-red-500">{errores.nombre}</p>}
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm text-gray-700">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tuemail@ejemplo.com"
                            value={mensajeContacto.email}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:focus:border-amber-600  placeholder-gray-500"
                        />
                        {errores.email && <p className="text-red-500">{errores.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="mensaje" className="block mb-1 text-sm text-gray-700">
                            Mensaje:
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Escribí tu mensaje"
                            value={mensajeContacto.mensaje}
                            onChange={manejarOnChange}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600 placeholder-gray-500"
                        />
                        {errores.mensaje && <p className="text-red-500">{errores.mensaje}</p>}
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

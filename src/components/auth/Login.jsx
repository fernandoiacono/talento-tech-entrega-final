import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const [usuarioFormu, setUsuarioFormu] = useState("");
    const [contraseñaFormu, setContraseñaFormu] = useState("");

    const { usuario, login } = useAuthContext();
    console.log(usuario);
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (usuarioFormu == "admin" && contraseñaFormu == "1234") {
            login(usuarioFormu);
            navigate("/admin");
        } else {
            alert("Usuario o Contraseña invalido");
        }
    };

    if (usuario) navigate("/admin");

    return (
        <div className="flex flex-col items-center justify-center m-4">
            <div className="w-full max-w-md p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-center mb-6">Iniciar Sesión</h3>
                <form className="flex flex-col gap-4" onSubmit={manejarSubmit}>
                    <div>
                        <label htmlFor="usuario" className="block mb-1 text-sm text-gray-700">
                            Usuario:
                        </label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            value={usuarioFormu}
                            onChange={(e) => setUsuarioFormu(e.target.value)}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-amber-600  placeholder-gray-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm text-gray-700">
                            Constraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={contraseñaFormu}
                            onChange={(e) => setContraseñaFormu(e.target.value)}
                            className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:focus:border-amber-600  placeholder-gray-500"
                        />
                    </div>
                    <button type="submit" className="mt-4 bg-amber-600 text-white font-semibold py-2 px-4 rounded-xl transition-colors duration-200 cursor-pointer">
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

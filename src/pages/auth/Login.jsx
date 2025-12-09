import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
    const [usuarioFormu, setUsuarioFormu] = useState("");
    const [contraseñaFormu, setContraseñaFormu] = useState("");

    const { usuario, login } = useAuthContext();
    const navigate = useNavigate();

    const manejarSubmit = (e) => {
        e.preventDefault();
        if (usuarioFormu.toLocaleLowerCase() === "admin" && contraseñaFormu == "1234") {
            login(usuarioFormu, true, "admin", "admin@admin.com");
            navigate("/admin");
            return;
        } else if (usuarioFormu.toLocaleLowerCase() === "maria" && contraseñaFormu == "4321") {
            login(usuarioFormu, false, "Maria", "usuaria_amaria@gmail.com");
            navigate("/");
            return;
        } else {
            alert("Usuario o Contraseña invalido");
        }
    };

    if (usuario) navigate("/");

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
            <div className="flex flex-col text-sm">
                <span className="text-lg font-semibold">Credenciales:</span>
                <span className="underline">Usuario Administrador:</span>
                <span>
                    <strong>Usuario:</strong> admin
                </span>
                <span>
                    <strong>Pasword:</strong> 1234
                </span>
                <span className="mt-2 underline">Usuario Sin privilegios:</span>
                <span>
                    <strong>Usuario:</strong>maria
                </span>
                <span>
                    <strong>Pasword:</strong> 4321
                </span>
            </div>
        </div>
    );
};

export default Login;

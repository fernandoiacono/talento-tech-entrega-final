import { Navigate } from "react-router-dom";

const Login = ({ usuarioLogueado, setUsuarioLogueado }) => {
    if (usuarioLogueado) return <Navigate to="/admin" />;

    return (
        <div className="m-4">
            <h1 className="text-3xl mb-4">Login</h1>
            <button onClick={() => setUsuarioLogueado(true)} className="border-1 cursor-pointer bg-amber-600 text-white rounded-md p-2">
                Iniciar Sesion
            </button>
        </div>
    );
};

export default Login;

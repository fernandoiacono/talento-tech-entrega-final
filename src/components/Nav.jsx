import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Nav = () => {
    const { usuario } = useAuthContext();
    const esAdmin = usuario?.admin;

    return (
        <nav className="bg-[#333333] text-white p-2">
            <ul className="flex justify-around">
                <li>
                    <Link to="/" className="text-white">
                        Inicio
                    </Link>
                </li>
                <li>
                    <Link to="/terminos-condiciones" className="text-white">
                        Términos y condiciones
                    </Link>
                </li>
                <li>
                    <Link to="/contacto" className="text-white">
                        Contacto
                    </Link>
                </li>
                {!usuario ? (
                    <li>
                        <Link to="/login" className="text-white">
                            Iniciar Sesión
                        </Link>
                    </li>
                ) : (
                    esAdmin && (
                        <li>
                            <Link to="/admin" className="text-white">
                                Admin
                            </Link>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
};

export default Nav;

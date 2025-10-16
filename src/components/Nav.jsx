import { Link } from "react-router-dom";

function Nav() {
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
            </ul>
        </nav>
    );
}

export default Nav;

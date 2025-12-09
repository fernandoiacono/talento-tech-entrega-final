import { useAuthContext } from "../context/AuthContext";
import { useCarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { ShoppingCart, LogOut } from "lucide-react";

const Header = () => {
    const { usuario, logout } = useAuthContext();
    const { carrito } = useCarritoContext();
    return (
        <header className="bg-slate-500 py-6 px-6 text-center text-white">
            <div className="flex justify-between">
                <div className="flex flex-col">
                    <h1 className="text-4xl flex">FullHard</h1>
                    <h3 className="text-sm flex">Tienda Online</h3>
                </div>
                <div className="flex items-center justify-between">
                    {usuario && <span>Hola, {usuario?.nombreUsuario}</span>}

                    <Link to="/carrito" className="cursor-pointer mx-4">
                        <div className="flex p-2">
                            <ShoppingCart />
                            <span className="text-amber-300 font-semibold bg-red-400 rounded-full w-5 h-5 flex items-center justify-center pb-0.5 ml-0.5">{carrito.length}</span>
                        </div>
                    </Link>
                    {usuario && (
                        <button onClick={() => logout()} className="cursor-pointer bg-red-500 text-white rounded-md p-2 w-10 h-10">
                            <LogOut />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;

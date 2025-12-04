import { useContext } from "react";
import { useAuthContext } from "../context/AuthContext";
import { CarritoContext } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import { ShoppingCart, LogOut } from "lucide-react";

function Header() {
    const { usuario, logout } = useAuthContext();
    const { carrito } = useContext(CarritoContext);
    return (
        <header className="bg-[#4CAF50] py-6 px-6 text-center text-white">
            <div className="flex justify-between">
                <h1 className="text-3xl">Tienda Online</h1>
                <div className="flex justify-between">
                    <Link to="/carrito" className="cursor-pointer">
                        <div className="flex p-2">
                            {/* <span className="text-white font-semibold">Productos en el carrito:</span> */}
                            <ShoppingCart />
                            <span className="text-amber-300 font-semibold bg-red-400 rounded-full w-5 h-5 flex items-center justify-center pb-0.5 ml-0.5">{carrito.length}</span>
                        </div>
                    </Link>
                    {usuario && (
                        <button onClick={() => logout()} className="cursor-pointer bg-red-500 text-white rounded-md p-2">
                            <LogOut />
                        </button>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;

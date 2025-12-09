import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Productos from "./pages/Productos";
import DetalleProducto from "./pages/DetalleProducto";
import Carrito from "./pages/Carrito";
import Login from "./pages/auth/Login";
import Admin from "./pages/auth/Admin";
import Contacto from "./pages/Contacto";
import TerminosYCondiciones from "./pages/TerminosYCondiciones";

import RutaProtegida from "./components/auth/RutaProtegida";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <ToastContainer />
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Productos />} />
                <Route path="terminos-condiciones" element={<TerminosYCondiciones />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/login" element={<Login />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
                <Route
                    path="/carrito"
                    element={
                        <RutaProtegida>
                            <Carrito />
                        </RutaProtegida>
                    }
                />
                <Route
                    path={"/admin"}
                    element={
                        <RutaProtegida>
                            <Admin />
                        </RutaProtegida>
                    }
                />
                <Route path="*" element={<Productos />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;

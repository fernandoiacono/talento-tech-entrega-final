import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import DetalleProducto from "./components/DetalleProducto";
import TerminosYCondiciones from "./components/TerminosYCondiciones";
import Contacto from "./components/Contacto";
import RutaProtegida from "./components/auth/RutaProtegida";
import Admin from "./components/auth/Admin";
import Login from "./components/auth/Login";
import Carrito from "./components/Carrito";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <ToastContainer />
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
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
                <Route path="*" element={<Main />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;

import { useState } from "react";
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

function App() {
    const [usuarioLogueado, setUsuarioLogueado] = useState(false);

    return (
        <div>
            <Header />
            <Nav />
            <Routes>
                <Route path="/" element={<Main />} />
                {/* <Route path="/productos" element={<Productos />} /> */}
                <Route path="/productos/:id" element={<DetalleProducto />} />
                <Route path="terminos-condiciones" element={<TerminosYCondiciones />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route
                    path={"/admin"}
                    element={
                        <RutaProtegida isAuthenticated={usuarioLogueado}>
                            <Admin usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
                        </RutaProtegida>
                    }
                />
                <Route path={"/login"} element={<Login usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;

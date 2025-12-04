import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";
import { ProductosProvider } from "./context/ProductosContext";
import { AuthProvider } from "./context/AuthContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ProductosProvider>
                <CarritoProvider>
                    <Router>
                        <App />
                    </Router>
                </CarritoProvider>
            </ProductosProvider>
        </AuthProvider>
    </StrictMode>
);

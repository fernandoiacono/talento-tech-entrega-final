import { Navigate } from "react-router-dom";

const RutaProtegida = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
};

export default RutaProtegida;

const Admin = ({ usuarioLogueado, setUsuarioLogueado }) => {
    console.log(usuarioLogueado);

    return (
        <div className="m-4">
            <h1 className="text-3xl">Admin</h1>
            <h3 className="mt-1 text-xl mb-4">Informacion Sensible</h3>
            {usuarioLogueado && (
                <button onClick={() => setUsuarioLogueado(false)} className="border-1 cursor-pointer bg-red-500 text-white rounded-md p-2">
                    Cerrar Sesión
                </button>
            )}
        </div>
    );
};

export default Admin;

import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useSesion } from '../context/SesionContext';

export const Header = () => {
    const { cantidadTotal } = useCarrito();
    const { usuario, esAdmin, cerrarSesion } = useSesion();
    const navigate = useNavigate();

    const handleCerrarSesion = () => {
        cerrarSesion();
        navigate('/');
    };

    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex flex-wrap justify-content-between align-items-center gap-2">
                <h1 className="h3 m-0">Aura Shop</h1>
                <nav className="d-flex flex-wrap gap-3 align-items-center">
                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                    <Link to="/productos" className="text-white text-decoration-none">Productos</Link>
                    <Link to="/nosotros" className="text-white text-decoration-none">Nosotros</Link>
                    <Link to="/blogs" className="text-white text-decoration-none">Blogs</Link>
                    <Link to="/contacto" className="text-white text-decoration-none">Contacto</Link>

                    {usuario ? (
                        <>
                            <span className="text-info">Hola, {usuario.nombre.split(' ')[0]}</span>
                            {esAdmin && (
                                <Link to="/admin" className="text-white text-decoration-none">Panel Admin</Link>
                            )}
                            <button onClick={handleCerrarSesion} className="btn btn-outline-light btn-sm">
                                Cerrar Sesión
                            </button>
                        </>
                    ) : (
                        <Link to="/login" className="text-white text-decoration-none">Iniciar Sesion</Link>
                    )}

                    <Link to="/carrito" className="btn btn-outline-info btn-sm d-flex align-items-center gap-2">
                        <span>Carrito</span>
                        <span className="badge bg-danger rounded-pill">
                            {cantidadTotal}
                        </span>
                    </Link>

                    {!usuario && (
                        <Link to="/registro" className="btn btn-primary btn-sm">Registrarse</Link>
                    )}
                </nav>
            </div>
        </header>
    );
};

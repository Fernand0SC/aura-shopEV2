import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3 m-0">Aura Shop</h1>
                <nav className="d-flex gap-3">
                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                    <Link to="/productos" className="text-white text-decoration-none">Productos</Link>
                    <Link to="/nosotros" className="text-white text-decoration-none">Nosotros</Link>
                    <Link to="/blogs" className="text-white text-decoration-none">Blogs</Link>
                    <Link to="/contacto" className="text-white text-decoration-none">Contacto</Link>
                    <Link to="/login" className="text-white text-decoration-none">Iniciar Sesion</Link>
                    <Link to="/carrito" className="btn btn-outline-info btn-sm">Carrito</Link>
                    <Link to="/registro" className="btn btn-primary btn-sm">Registrarse</Link>
                </nav>
            </div>
        </header>
    );
};
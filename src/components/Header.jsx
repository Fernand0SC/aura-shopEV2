import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [cantidadCarrito, setCantidadCarrito] = useState(0);

    const actualizarContador = () => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito') || localStorage.getItem('miCarrito')) || [];
        const totalItems = carritoGuardado.reduce((suma, item) => {
            const cantidadItem = Number(item.cantidad) || 1;
            return suma + cantidadItem;
        }, 0);
        setCantidadCarrito(totalItems);
    };

    useEffect(() => {
        actualizarContador();

        window.addEventListener('carritoActualizado', actualizarContador);

        const originalSetItem = localStorage.setItem;
        localStorage.setItem = function(key, value) {
            originalSetItem.apply(this, arguments);
            if (key === 'carrito' || key === 'miCarrito') {
                window.dispatchEvent(new Event('carritoActualizado'));
            }
        };

        return () => {
            window.removeEventListener('carritoActualizado', actualizarContador);
            localStorage.setItem = originalSetItem; 
        };
    }, []);

    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="h3 m-0">Aura Shop</h1>
                <nav className="d-flex gap-3 align-items-center">
                    <Link to="/" className="text-white text-decoration-none">Home</Link>
                    <Link to="/productos" className="text-white text-decoration-none">Productos</Link>
                    <Link to="/nosotros" className="text-white text-decoration-none">Nosotros</Link>
                    <Link to="/blogs" className="text-white text-decoration-none">Blogs</Link>
                    <Link to="/contacto" className="text-white text-decoration-none">Contacto</Link>
                    <Link to="/login" className="text-white text-decoration-none">Iniciar Sesion</Link>
                    
                    <Link to="/carrito" className="btn btn-outline-info btn-sm d-flex align-items-center gap-2">
                        <span>Carrito</span>
                        <span className="badge bg-danger rounded-pill">
                            {cantidadCarrito}
                        </span>
                    </Link>
                    
                    <Link to="/registro" className="btn btn-primary btn-sm">Registrarse</Link>
                </nav>
            </div>
        </header>
    );
};
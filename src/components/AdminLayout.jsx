import { Link, useNavigate } from 'react-router-dom';
import { useSesion } from '../context/SesionContext';
import '../styles/admin-style.css'; 

export const AdminLayout = ({ children, titulo }) => {
    const { usuario, cerrarSesion } = useSesion();
    const navigate = useNavigate();

    const handleCerrarSesion = (e) => {
        e.preventDefault();
        cerrarSesion();
        navigate('/');
    };

    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <div className="brand">
                    <h2>⚙️ Aura Admin</h2>
                </div>
                <nav className="admin-menu">
                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/ordenes">Órdenes y boletas</Link></li>
                        <li><Link to="/admin/productos">Ver todos los productos</Link></li>
                        <li><Link to="/admin/producto/nuevo">Nuevo Producto</Link></li>
                        <li><Link to="/admin/usuarios">Ver todos los usuarios</Link></li>
                        <li><Link to="/admin/usuario/nuevo">Añadir Usuario Admin</Link></li>
                        <li><Link to="/" className="btn-logout" onClick={handleCerrarSesion}>Cerrar Sesión</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header className="top-header">
                    <h1>{titulo}</h1>
                    <span>Panel de Control{usuario ? ` · ${usuario.nombre} (${usuario.rol})` : ''}</span>
                </header>
                <section className="content-area">
                    {children}
                </section>
            </main>
        </div>
    );
};

import { Link } from 'react-router-dom';
import '../styles/admin-style.css'; // Importamos tus estilos originales

export const AdminLayout = ({ children, titulo }) => {
    return (
        <div className="admin-layout">
            <aside className="sidebar">
                <div className="brand">
                    <h2>⚙️ Aura Admin</h2>
                </div>
                <nav className="admin-menu">
                    <ul>
                        <li><Link to="/admin">Dashboard</Link></li>
                        <li><Link to="/admin/productos">Ver todos los productos</Link></li>
                        <li><Link to="/admin/producto/nuevo">Nuevo Producto</Link></li>
                        <li><Link to="/admin/usuarios">Ver todos los usuarios</Link></li>
                        <li><Link to="/admin/usuario/nuevo">Añadir Usuario Admin</Link></li>
                        <li><Link to="/" className="btn-logout">Cerrar Sesión</Link></li>
                    </ul>
                </nav>
            </aside>
            <main className="main-content">
                <header className="top-header">
                    <h1>{titulo}</h1>
                    <span>Panel de Control</span>
                </header>
                <section className="content-area">
                    {children}
                </section>
            </main>
        </div>
    );
};
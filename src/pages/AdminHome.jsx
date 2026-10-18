import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerOrdenes, obtenerProductos, obtenerUsuarios } from '../data/db';

export const AdminHome = () => {
    // Todos los números salen de la base de datos
    const comprasPagadas = obtenerOrdenes().filter((o) => o.estado === 'Pagada').length;
    const totalProductos = obtenerProductos().length;
    const totalUsuarios = obtenerUsuarios().length;

    const resumen = [
        { titulo: 'Compras', valor: comprasPagadas, color: 'bg-primary' },
        { titulo: 'Productos', valor: totalProductos, color: 'bg-success' },
        { titulo: 'Usuarios', valor: totalUsuarios, color: 'bg-warning text-dark' },
    ];

    const accesos = [
        { titulo: 'Órdenes y boletas', texto: 'Revisa las compras realizadas y sus boletas.', ruta: '/admin/ordenes' },
        { titulo: 'Productos', texto: 'Administra el inventario y los detalles de los productos.', ruta: '/admin/productos' },
        { titulo: 'Usuarios', texto: 'Gestiona las cuentas de usuario y sus roles.', ruta: '/admin/usuarios' },
    ];

    return (
        <AdminLayout titulo="Dashboard">
            <p className="mb-4">Resumen de la actividad de la tienda.</p>

            <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
                {resumen.map((r) => (
                    <div key={r.titulo} className="col">
                        <div className={`card text-white h-100 ${r.color}`}>
                            <div className="card-body">
                                <h5 className="card-title">{r.titulo}</h5>
                                <p className="display-6 mb-0">{r.valor}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-3">
                {accesos.map((a) => (
                    <div key={a.titulo} className="col">
                        <Link to={a.ruta} className="card h-100 text-decoration-none text-dark">
                            <div className="card-body">
                                <h5 className="card-title">{a.titulo}</h5>
                                <p className="card-text mb-0">{a.texto}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </AdminLayout>
    );
};
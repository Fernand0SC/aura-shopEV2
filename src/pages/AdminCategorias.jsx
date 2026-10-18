import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerCategorias } from '../data/db';

export const AdminCategorias = () => {
    const categorias = obtenerCategorias();

    return (
        <AdminLayout titulo="Gestión de Categorías">
            <div style={{ marginBottom: '20px' }}>
                <Link to="/admin/categoria/nueva" className="btn-submit" style={{ textDecoration: 'none' }}>
                    + Nueva Categoría
                </Link>
            </div>

            <table className="tabla-admin">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {categorias.map((cat) => (
                        <tr key={cat.id}>
                            <td>{cat.nombre}</td>
                            <td>{cat.descripcion}</td>
                            <td>
                                <Link to={`/admin/categoria/editar/${cat.id}`} className="btn-editar">Editar</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};
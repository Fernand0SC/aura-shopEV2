import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerProductosCriticos, STOCK_CRITICO } from '../data/db';

export const AdminProductosCriticos = () => {
    const productos = obtenerProductosCriticos();

    return (
        <AdminLayout titulo="Productos Críticos">
            <p style={{ marginBottom: '20px' }}>
                Productos con {STOCK_CRITICO} unidades o menos en stock.
            </p>

            {productos.length === 0 ? (
                <p>No hay productos críticos.</p>
            ) : (
                <table className="tabla-admin">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Categoría</th>
                            <th>Stock</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((prod) => (
                            <tr key={prod.id}>
                                <td>P00{prod.id}</td>
                                <td>{prod.nombre}</td>
                                <td style={{ textTransform: 'capitalize' }}>{prod.categoria}</td>
                                <td style={{ color: '#dc3545', fontWeight: 'bold' }}>{prod.stock}</td>
                                <td>
                                    <Link to={`/admin/producto/editar/${prod.id}`} className="btn-editar">Editar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </AdminLayout>
    );
};
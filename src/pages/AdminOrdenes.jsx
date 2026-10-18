import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerOrdenes } from '../data/db';

export const AdminOrdenes = () => {
    // Las más recientes primero
    const ordenes = [...obtenerOrdenes()].reverse();

    return (
        <AdminLayout titulo="Órdenes y Boletas">
            {ordenes.length === 0 ? (
                <p>Aún no hay órdenes registradas.</p>
            ) : (
                <div className="table-responsive">
                    <table className="tabla-admin">
                        <thead>
                            <tr>
                                <th>N° Orden</th>
                                <th>Fecha</th>
                                <th>Cliente</th>
                                <th>Total</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ordenes.map((orden) => (
                                <tr key={orden.id}>
                                    <td>#{orden.numero}</td>
                                    <td>{new Date(orden.fecha).toLocaleString('es-CL')}</td>
                                    <td>{orden.cliente.nombre} {orden.cliente.apellidos}</td>
                                    <td>${orden.total.toLocaleString('es-CL')}</td>
                                    <td style={{ color: orden.estado === 'Pagada' ? 'green' : '#dc3545', fontWeight: 'bold' }}>
                                        {orden.estado}
                                    </td>
                                    <td>
                                        {orden.estado === 'Pagada' ? (
                                            <Link to={`/admin/orden/${orden.id}`} className="btn-editar">Ver boleta</Link>
                                        ) : (
                                            '—'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </AdminLayout>
    );
};
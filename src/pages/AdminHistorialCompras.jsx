import { Link, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerUsuarioPorId, obtenerOrdenesPorUsuario } from '../data/db';

export const AdminHistorialCompras = () => {
    const { id } = useParams();
    const usuario = obtenerUsuarioPorId(id);

    if (!usuario) {
        return (
            <AdminLayout titulo="Historial de Compras">
                <p>El usuario solicitado no existe.</p>
                <Link to="/admin/usuarios" className="btn-editar">&larr; Volver a usuarios</Link>
            </AdminLayout>
        );
    }

    // Solo las compras pagadas, de la más reciente a la más antigua
    const compras = obtenerOrdenesPorUsuario(id).filter((o) => o.estado === 'Pagada').reverse();

    return (
        <AdminLayout titulo={`Historial de compras: ${usuario.nombre}`}>
            {compras.length === 0 ? (
                <p>Este usuario aún no tiene compras con su cuenta.</p>
            ) : (
                <table className="tabla-admin">
                    <thead>
                        <tr>
                            <th>N° Orden</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compras.map((orden) => (
                            <tr key={orden.id}>
                                <td>#{orden.numero}</td>
                                <td>{new Date(orden.fecha).toLocaleString('es-CL')}</td>
                                <td>${orden.total.toLocaleString('es-CL')}</td>
                                <td>
                                    <Link to={`/admin/orden/${orden.id}`} className="btn-editar">Ver boleta</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div style={{ marginTop: '20px' }}>
                <Link to="/admin/usuarios" className="btn-editar">&larr; Volver a usuarios</Link>
            </div>
        </AdminLayout>
    );
};
import { Link, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { TablaOrden } from '../components/TablaOrden';
import { obtenerOrdenPorId } from '../data/db';

export const AdminBoleta = () => {
    const { id } = useParams();
    const orden = obtenerOrdenPorId(id);

    if (!orden) {
        return (
            <AdminLayout titulo="Boleta">
                <p>La orden solicitada no existe.</p>
                <Link to="/admin/ordenes" className="btn-editar">&larr; Volver a órdenes</Link>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout titulo={`Boleta #${orden.numero}`}>
            <div style={{ maxWidth: '800px' }}>
                <p>
                    Fecha: {new Date(orden.fecha).toLocaleString('es-CL')} · Estado: <strong>{orden.estado}</strong>
                </p>
                <TablaOrden orden={orden} />
                <div style={{ marginTop: '20px' }}>
                    <Link to="/admin/ordenes" className="btn-editar">&larr; Volver a órdenes</Link>
                </div>
            </div>
        </AdminLayout>
    );
};
import { AdminLayout } from '../components/AdminLayout';
import { obtenerOrdenes, obtenerVentasPorProducto } from '../data/db';

export const AdminReportes = () => {
    const pagadas = obtenerOrdenes().filter((o) => o.estado === 'Pagada');
    const totalVendido = pagadas.reduce((suma, o) => suma + o.total, 0);
    const ventas = obtenerVentasPorProducto();

    return (
        <AdminLayout titulo="Reportes">
            <div className="row row-cols-1 row-cols-md-2 g-3 mb-4">
                <div className="col">
                    <div className="card text-white bg-primary h-100">
                        <div className="card-body">
                            <h5 className="card-title">Compras realizadas</h5>
                            <p className="display-6 mb-0">{pagadas.length}</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-white bg-success h-100">
                        <div className="card-body">
                            <h5 className="card-title">Total vendido</h5>
                            <p className="display-6 mb-0">${totalVendido.toLocaleString('es-CL')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 style={{ marginBottom: '10px' }}>Ventas por producto</h2>
            {ventas.length === 0 ? (
                <p>Aún no hay ventas registradas.</p>
            ) : (
                <table className="tabla-admin">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Unidades vendidas</th>
                            <th>Total vendido</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map((v) => (
                            <tr key={v.id}>
                                <td>{v.nombre}</td>
                                <td>{v.unidades}</td>
                                <td>${v.total.toLocaleString('es-CL')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </AdminLayout>
    );
};
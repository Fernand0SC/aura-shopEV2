// Resumen de una orden: datos del cliente, entrega, productos y total.
// Lo usan las vistas de pago correcto y pago con error.
import { OPCIONES_ENTREGA } from '../data/db';
import { nombreRegion, nombreComuna } from '../data/regiones';

export const TablaOrden = ({ orden }) => {
    const { cliente, direccion, items, total } = orden;
    const entrega = OPCIONES_ENTREGA.find((o) => o.id === orden.entrega)?.nombre || orden.entrega;

    return (
        <div className="text-start">
            <h5 className="mt-3">Datos del cliente</h5>
            <p className="mb-1">{cliente.nombre} {cliente.apellidos}</p>
            <p className="text-secondary">{cliente.correo}</p>

            <h5 className="mt-3">Dirección de entrega</h5>
            <p className="mb-1">
                {direccion.calle}{direccion.depto ? `, Depto ${direccion.depto}` : ''}
            </p>
            <p className="mb-1">{nombreComuna(direccion.region, direccion.comuna)}, {nombreRegion(direccion.region)}</p>
            <p className="mb-1">Opción de entrega: {entrega}</p>
            {direccion.indicaciones && (
                <p className="text-secondary fst-italic">Indicaciones: {direccion.indicaciones}</p>
            )}

            <div className="table-responsive mt-3">
                <table className="table table-dark table-striped align-middle mb-0">
                    <thead>
                        <tr><th>Imagen</th><th>Nombre</th><th>Precio</th><th>Cantidad</th><th>Subtotal</th></tr>
                    </thead>
                    <tbody>
                        {items.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img
                                        src={`/img/${item.img}`}
                                        alt={item.nombre}
                                        style={{ width: 44, height: 44, objectFit: 'contain' }}
                                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/img/default.svg'; }}
                                    />
                                </td>
                                <td>{item.nombre}</td>
                                <td>${item.precio.toLocaleString('es-CL')}</td>
                                <td>{item.cantidad}</td>
                                <td>${(item.precio * item.cantidad).toLocaleString('es-CL')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="text-center fs-5 fw-bold mt-3 p-3 border border-secondary rounded">
                Total: ${total.toLocaleString('es-CL')}
            </div>
        </div>
    );
};
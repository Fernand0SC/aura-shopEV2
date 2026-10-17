import { Link, useParams } from 'react-router-dom';
import { obtenerOrdenPorId } from '../data/db';
import { TablaOrden } from '../components/TablaOrden';

export const PagoCorrecto = () => {
    const { id } = useParams();
    const orden = obtenerOrdenPorId(id);

    if (!orden || orden.estado !== 'Pagada') {
        return (
            <div className="container my-5 text-center">
                <h2>No encontramos una compra pagada con ese número</h2>
                <Link to="/" className="btn btn-outline-info mt-3">Volver a la tienda</Link>
            </div>
        );
    }

    const enviarPorEmail = () => {
        alert(`(Simulación) Boleta #${orden.numero} enviada a ${orden.cliente.correo}.`);
    };

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <div className="card bg-dark text-white border-success shadow">
                <div className="card-body p-4">
                    <div className="d-flex justify-content-between flex-wrap gap-2">
                        <h2 className="text-success h3">✓ Se ha realizado la compra. nro #{orden.numero}</h2>
                        <small className="text-secondary">Fecha: {new Date(orden.fecha).toLocaleString('es-CL')}</small>
                    </div>
                    <p className="text-secondary">Gracias por tu compra. Este es el detalle de tu boleta.</p>

                    <TablaOrden orden={orden} />

                    <div className="d-flex gap-2 justify-content-center flex-wrap mt-4 d-print-none">
                        <button className="btn btn-danger" onClick={() => window.print()}>Imprimir boleta en PDF</button>
                        <button className="btn btn-success" onClick={enviarPorEmail}>Enviar boleta por email</button>
                        <Link to="/" className="btn btn-outline-light">Volver a la Tienda</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
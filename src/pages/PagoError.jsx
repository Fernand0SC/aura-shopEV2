import { Link, useNavigate, useParams } from 'react-router-dom';
import { obtenerOrdenPorId } from '../data/db';
import { TablaOrden } from '../components/TablaOrden';

export const PagoError = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const orden = obtenerOrdenPorId(id);

    if (!orden || orden.estado === 'Pagada') {
        return (
            <div className="container my-5 text-center">
                <h2>No encontramos un pago con error para ese número</h2>
                <Link to="/" className="btn btn-outline-info mt-3">Volver a la tienda</Link>
            </div>
        );
    }

    // Los productos siguen en el carrito, así que se vuelve al checkout con los mismos datos
    const reintentar = () => navigate('/checkout', { state: { ordenId: orden.id } });

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <div className="card bg-dark text-white border-danger shadow">
                <div className="card-body p-4">
                    <h2 className="text-danger h3">✗ No se pudo realizar el pago. nro #{orden.numero}</h2>
                    {orden.motivoFallo && <p className="text-warning">{orden.motivoFallo}</p>}

                    <div className="text-center my-3">
                        <button className="btn btn-success btn-lg" onClick={reintentar}>VOLVER A REALIZAR EL PAGO</button>
                    </div>

                    <TablaOrden orden={orden} />

                    <div className="text-center mt-4">
                        <Link to="/carrito" className="btn btn-outline-light">Volver al carrito</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
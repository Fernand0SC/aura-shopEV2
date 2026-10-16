import { useState } from 'react';
import { Link } from 'react-router-dom';

export const CompraExitosa = () => {
    // se genera un número de orden
    const [numeroOrden] = useState(() => Math.floor(Math.random() * 1000000));

    return (
        <div className="container my-5 text-center">
            <div className="card bg-dark text-white border-success mx-auto shadow" style={{ maxWidth: '600px' }}>
                <div className="card-body py-5">
                    <h1 className="text-success mb-3" style={{ fontSize: '4rem' }}>✓</h1>
                    <h2 className="text-success">¡Compra realizada con éxito!</h2>
                    <p className="lead mt-3">Tu número de orden es: <strong>#{numeroOrden}</strong></p>
                    <p>Hemos enviado un comprobante y los detalles de entrega a tu correo.</p>
                    <hr className="border-secondary my-4" />
                    <Link to="/" className="btn btn-outline-light btn-lg">
                        Volver a la Tienda
                    </Link>
                </div>
            </div>
        </div>
    );
};

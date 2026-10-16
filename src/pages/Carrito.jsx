import { useState, useEffect } from 'react';

export const Carrito = () => {
    const [carrito, setCarrito] = useState([]);

    // Cargar el carrito desde localStorage al montar el componente
    useEffect(() => {
        const memoria = localStorage.getItem('miCarrito');
        if (memoria) {
            try {
                setCarrito(JSON.parse(memoria));
            } catch {
                setCarrito([]);
            }
        }
    }, []);

    const vaciarCarrito = () => {
        if (window.confirm("¿Estás seguro de que quieres vaciar tu carrito?")) {
            localStorage.setItem('miCarrito', JSON.stringify([]));
            setCarrito([]);
        }
    };

    // Calcular el total a pagar
    const totalPagar = carrito.reduce((acc, prod) => acc + prod.subtotal, 0);

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <h2>Mi Carrito de Compras</h2>

            <div className="card bg-dark text-white p-3 border-secondary my-4">
                {carrito.length === 0 ? (
                    <p className="text-center my-3">Tu carrito está vacío.</p>
                ) : (
                    carrito.map((producto, index) => (
                        <div key={index} className="d-flex justify-content-between align-items-center border-bottom border-secondary py-2">
                            <div>
                                <h5 className="mb-1 h6">{producto.nombre}</h5>
                                <small className="text-muted">
                                    Precio unitario: ${producto.precio.toLocaleString('es-CL')} | Cantidad: {producto.cantidad}
                                </small>
                            </div>
                            <div className="fw-bold text-info fs-5">
                                ${producto.subtotal.toLocaleString('es-CL')}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <button 
                    onClick={vaciarCarrito} 
                    className="btn btn-danger"
                    disabled={carrito.length === 0}
                >
                    Vaciar Carrito
                </button>
                <div className="text-end">
                    <h3>TOTAL: <span className="text-info">${totalPagar.toLocaleString('es-CL')}</span></h3>
                    <button className="btn btn-success btn-lg mt-2" disabled={carrito.length === 0}>
                        Ir a Pagar
                    </button>
                </div>
            </div>
        </div>
    );
};
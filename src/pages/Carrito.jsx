import { Link } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';

export const Carrito = () => {
    const { items, cambiarCantidad, quitar, vaciar, total } = useCarrito();

    const vaciarCarrito = () => {
        if (window.confirm("¿Estás seguro de que quieres vaciar tu carrito?")) {
            vaciar();
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <h2>Mi Carrito de Compras</h2>

            <div className="card bg-dark text-white p-3 border-secondary my-4">
                {items.length === 0 ? (
                    <p className="text-center my-3">Tu carrito está vacío.</p>
                ) : (
                    items.map((producto) => (
                        <div key={producto.id} className="d-flex flex-wrap justify-content-between align-items-center gap-2 border-bottom border-secondary py-2">
                            <div>
                                <h5 className="mb-1 h6">{producto.nombre}</h5>
                                <small className="text-muted">
                                    Precio unitario: ${producto.precio.toLocaleString('es-CL')}
                                </small>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => cambiarCantidad(producto.id, producto.cantidad - 1)}>−</button>
                                <span>{producto.cantidad}</span>
                                <button className="btn btn-sm btn-outline-secondary" onClick={() => cambiarCantidad(producto.id, producto.cantidad + 1)}>+</button>
                                <button className="btn btn-sm btn-danger ms-2" onClick={() => quitar(producto.id)}>Eliminar</button>
                            </div>
                            <div className="fw-bold text-info fs-5">
                                ${(producto.precio * producto.cantidad).toLocaleString('es-CL')}
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <button 
                    onClick={vaciarCarrito} 
                    className="btn btn-danger"
                    disabled={items.length === 0}
                >
                    Vaciar Carrito
                </button>
                <div className="text-end">
                    <h3>TOTAL: <span className="text-info">${total.toLocaleString('es-CL')}</span></h3>
                    <Link to="/checkout" className={`btn btn-success ${items.length === 0 ? 'disabled' : ''}`}>
                        Ir a Pagar
                    </Link>
                </div>
            </div>
        </div>
    );
};

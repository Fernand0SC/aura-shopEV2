export const ProductoCard = ({ producto, onAgregar }) => {
    return (
        <div className="card h-100 shadow-sm bg-dark text-white border-secondary position-relative">
            {producto.oferta && (
                <span className="badge bg-danger position-absolute top-0 end-0 m-2">Oferta</span>
            )}
            <img 
                src={`/img/${producto.img}`} 
                className="card-img-top p-3" 
                alt={producto.nombre}
                style={{ height: '180px', objectFit: 'contain' }}
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/img/default.svg'; }}
            />
            <div className="card-body d-flex flex-column justify-content-between text-center">
                <h5 className="card-title h6">{producto.nombre}</h5>
                <p className="card-text fw-bold text-info fs-5">
                    ${producto.precio.toLocaleString('es-CL')}
                </p>
                <button 
                    onClick={() => onAgregar(producto)} 
                    className="btn btn-outline-info w-100 mt-auto fw-bold"
                    disabled={producto.stock === 0}
                >
                    {producto.stock === 0 ? 'Sin stock' : 'Añadir al Carrito'}
                </button>
            </div>
        </div>
    );
};

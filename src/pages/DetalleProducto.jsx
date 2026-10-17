import { Link, useParams } from 'react-router-dom';
import { obtenerProductoPorId, obtenerCategoriaPorId, obtenerProductosPorCategoria } from '../data/db';
import { useCarrito } from '../context/CarritoContext';
import { ListaProductos } from '../components/ListaProductos';

export const DetalleProducto = () => {
    const { id } = useParams();
    const { agregar } = useCarrito();
    const producto = obtenerProductoPorId(id);

    if (!producto) {
        return (
            <div className="container my-5 text-center">
                <h2>Producto no encontrado</h2>
                <Link to="/productos" className="btn btn-outline-info mt-3">Volver al catálogo</Link>
            </div>
        );
    }

    const categoria = obtenerCategoriaPorId(producto.categoria);
    const relacionados = obtenerProductosPorCategoria(producto.categoria)
        .filter((p) => p.id !== producto.id)
        .slice(0, 4);

    const agregarAlCarrito = () => {
        agregar(producto);
        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    return (
        <div className="container my-5">
            <nav className="mb-4 small">
                <Link to="/productos" className="text-info">Productos</Link>
                {categoria && (
                    <>
                        {' / '}
                        <Link to={`/categorias/${categoria.id}`} className="text-info">{categoria.nombre}</Link>
                    </>
                )}
                {' / '}<span className="text-secondary">{producto.nombre}</span>
            </nav>

            <div className="row g-4 align-items-center">
                <div className="col-md-5 text-center">
                    <img
                        src={`/img/${producto.img}`}
                        alt={producto.nombre}
                        className="img-fluid rounded bg-white p-3"
                        style={{ maxHeight: '380px', objectFit: 'contain' }}
                        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/img/default.svg'; }}
                    />
                </div>
                <div className="col-md-7">
                    {categoria && <span className="badge bg-secondary me-2 mb-2">{categoria.nombre}</span>}
                    {producto.oferta && <span className="badge bg-danger mb-2">Oferta</span>}
                    <h2>{producto.nombre}</h2>
                    <div className="display-6 text-info fw-bold my-3">
                        ${producto.precio.toLocaleString('es-CL')}
                    </div>

                    <p className="lead">{producto.descripcion || 'Este producto aún no tiene una descripción.'}</p>

                    <p>
                        {producto.stock === 0
                            ? <span className="text-danger fw-bold">Sin stock</span>
                            : <span className="text-success">Disponible ({producto.stock} unidades)</span>}
                    </p>

                    <div className="d-flex gap-2 flex-wrap">
                        <button className="btn btn-info fw-bold" onClick={agregarAlCarrito} disabled={producto.stock === 0}>
                            Añadir al Carrito
                        </button>
                        <Link to="/productos" className="btn btn-outline-light">Volver al catálogo</Link>
                    </div>
                </div>
            </div>

            {relacionados.length > 0 && (
                <section className="mt-5">
                    <h4 className="mb-3">También te puede interesar</h4>
                    <ListaProductos productos={relacionados} />
                </section>
            )}
        </div>
    );
};
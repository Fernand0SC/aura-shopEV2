// Sin parámetro muestra todas las categorías con sus productos;
// con /categorias/:slug muestra solo la categoría elegida.
import { Link, useParams } from 'react-router-dom';
import { obtenerCategorias, obtenerProductosPorCategoria } from '../data/db';
import { ListaProductos } from '../components/ListaProductos';

export const Categorias = () => {
    const { slug } = useParams();
    const categorias = obtenerCategorias();
    const visibles = slug ? categorias.filter((c) => c.id === slug) : categorias;

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Categorías</h2>

            <div className="row row-cols-2 row-cols-md-4 g-3 mb-5 justify-content-center">
                {categorias.map((cat) => (
                    <div key={cat.id} className="col">
                        <Link
                            to={`/categorias/${cat.id}`}
                            className={`card h-100 text-center text-decoration-none bg-dark text-white ${slug === cat.id ? 'border-info' : 'border-secondary'}`}
                        >
                            <div className="card-body">
                                <h5 className="card-title h6 mb-1">{cat.nombre}</h5>
                                <small className="text-secondary">
                                    {obtenerProductosPorCategoria(cat.id).length} producto(s)
                                </small>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {slug && (
                <div className="mb-4">
                    <Link to="/categorias" className="btn btn-sm btn-outline-light">&larr; Ver todas las categorías</Link>
                </div>
            )}

            {visibles.length === 0 && (
                <p className="text-center text-secondary">La categoría solicitada no existe.</p>
            )}

            {visibles.map((cat) => (
                <section key={cat.id} className="mb-5">
                    <h3 className="mb-1">{cat.nombre}</h3>
                    {cat.descripcion && <p className="text-secondary">{cat.descripcion}</p>}
                    <ListaProductos
                        productos={obtenerProductosPorCategoria(cat.id)}
                        mensajeVacio="Aún no hay productos en esta categoría."
                    />
                </section>
            ))}
        </div>
    );
};
import { obtenerProductos } from '../data/db';
import { useCarrito } from '../context/CarritoContext';
import { ProductoCard } from '../components/ProductoCard';

export const Home = () => {
    const { agregar } = useCarrito();
  
    const destacados = obtenerProductos().slice(0, 4);

    const agregarAlCarrito = (producto) => {
        agregar(producto);
        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    return (
        <div>
            <section className="bg-secondary text-white text-center py-5 mb-4">
                <div className="container">
                    <h2 className="display-4 fw-bold">Bienvenido a Aura Shop</h2>
                    <p className="lead">Encuentra los mejores componentes de hardware al mejor precio.</p>
                </div>
            </section>

            <section className="container mb-5">
                <h3 className="text-center mb-4">Productos Destacados</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {destacados.map(prod => (
                        <div key={prod.id} className="col">
                            <ProductoCard producto={prod} onAgregar={agregarAlCarrito} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

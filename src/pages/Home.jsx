import { productosIniciales } from '../data/db';
import { ProductoCard } from '../components/ProductoCard';

export const Home = () => {
    const agregarAlCarrito = (producto) => {
        let carrito = JSON.parse(localStorage.getItem('miCarrito')) || [];
        const existe = carrito.find(item => item.id === producto.id);

        if (existe) {
            existe.cantidad += 1;
            existe.subtotal = existe.cantidad * existe.precio;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1,
                subtotal: producto.precio
            });
        }

        localStorage.setItem('miCarrito', JSON.stringify(carrito));
        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    return (
        <div>
            {/* Banner Principal */}
            <section className="bg-secondary text-white text-center py-5 mb-4">
                <div className="container">
                    <h2 className="display-4 fw-bold">Bienvenido a Aura Shop</h2>
                    <p className="lead">Encuentra los mejores componentes de hardware al mejor precio.</p>
                </div>
            </section>

            {/* Catálogo de Productos Destacados */}
            <section className="container mb-5">
                <h3 className="text-center mb-4">Productos Destacados</h3>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {productosIniciales.slice(0, 4).map(prod => (
                        <div key={prod.id} className="col">
                            <ProductoCard producto={prod} onAgregar={agregarAlCarrito} />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
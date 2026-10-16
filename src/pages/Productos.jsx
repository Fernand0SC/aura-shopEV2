import { obtenerProductos } from '../data/db';
import { useCarrito } from '../context/CarritoContext';
import { ProductoCard } from '../components/ProductoCard';

export const Productos = () => {
    const { agregar } = useCarrito();
    const productos = obtenerProductos();

    const agregarAlCarrito = (producto) => {
        agregar(producto);
        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Nuestro Catálogo Completo</h2>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {productos.map(prod => (
                    <div key={prod.id} className="col">
                        <ProductoCard producto={prod} onAgregar={agregarAlCarrito} />
                    </div>
                ))}
            </div>
        </div>
    );
};

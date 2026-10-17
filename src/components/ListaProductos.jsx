// Se reutiliza en Categorías, Ofertas y Detalle de producto.
import { useCarrito } from '../context/CarritoContext';
import { ProductoCard } from './ProductoCard';

export const ListaProductos = ({ productos, mensajeVacio = 'No hay productos para mostrar.' }) => {
    const { agregar } = useCarrito();

    const agregarAlCarrito = (producto) => {
        agregar(producto);
        alert(`¡${producto.nombre} añadido al carrito!`);
    };

    if (productos.length === 0) {
        return <p className="text-center text-secondary my-4">{mensajeVacio}</p>;
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {productos.map((prod) => (
                <div key={prod.id} className="col">
                    <ProductoCard producto={prod} onAgregar={agregarAlCarrito} />
                </div>
            ))}
        </div>
    );
};
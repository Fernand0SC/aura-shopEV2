import { productosIniciales } from '../data/db';
import { ProductoCard } from '../components/ProductoCard';

export const Productos = () => {
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
        <div className="container my-5">
            <h2 className="text-center mb-4">Nuestro Catálogo Completo</h2>
            
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {productosIniciales.map(prod => (
                    <div key={prod.id} className="col">
                        <ProductoCard producto={prod} onAgregar={agregarAlCarrito} />
                    </div>
                ))}
            </div>
        </div>
    );
};
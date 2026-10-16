import { createContext, useContext, useEffect, useState } from 'react';

const CLAVE_CARRITO = 'miCarrito';
const CarritoContext = createContext(null);

function leerCarrito() {
    try {
        return JSON.parse(localStorage.getItem(CLAVE_CARRITO)) || [];
    } catch {
        return [];
    }
}

export const CarritoProvider = ({ children }) => {
    const [items, setItems] = useState(leerCarrito);

    // Cada vez que el carrito cambia se guarda en localStorage
    useEffect(() => {
        try {
            localStorage.setItem(CLAVE_CARRITO, JSON.stringify(items));
        } catch (error) {
            console.error('No se pudo guardar el carrito:', error);
        }
    }, [items]);

    const agregar = (producto) => {
        setItems((actual) => {
            const existe = actual.find((i) => i.id === producto.id);
            if (existe) {
                return actual.map((i) =>
                    i.id === producto.id
                        ? { ...i, cantidad: i.cantidad + 1, subtotal: (i.cantidad + 1) * i.precio }
                        : i
                );
            }
            return [...actual, {
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                img: producto.img,
                cantidad: 1,
                subtotal: producto.precio,
            }];
        });
    };

    const quitar = (id) => setItems((actual) => actual.filter((i) => i.id !== id));

    const cambiarCantidad = (id, cantidad) => {
        if (cantidad < 1) {
            quitar(id);
            return;
        }
        setItems((actual) =>
            actual.map((i) => (i.id === id ? { ...i, cantidad, subtotal: cantidad * i.precio } : i))
        );
    };

    const vaciar = () => setItems([]);

    const total = items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
    const cantidadTotal = items.reduce((suma, i) => suma + i.cantidad, 0);

    return (
        <CarritoContext.Provider value={{ items, agregar, quitar, cambiarCantidad, vaciar, total, cantidadTotal }}>
            {children}
        </CarritoContext.Provider>
    );
};

export const useCarrito = () => {
    const contexto = useContext(CarritoContext);
    if (!contexto) throw new Error('useCarrito debe usarse dentro de <CarritoProvider>');
    return contexto;
};

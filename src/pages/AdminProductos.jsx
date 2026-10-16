import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { productosIniciales } from '../data/db';

export const AdminProductos = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const productosGuardados = JSON.parse(localStorage.getItem('misProductos'));
        if (productosGuardados) {
            setProductos(productosGuardados);
        } else {
            setProductos(productosIniciales);
            localStorage.setItem('misProductos', JSON.stringify(productosIniciales));
        }
    }, []);

    // Funcion eliminar
    const eliminarProducto = (id, nombre) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar el producto "${nombre}"?`)) {
            const nuevaLista = productos.filter(prod => prod.id !== id);
            setProductos(nuevaLista); // Actualiza la pantalla
            localStorage.setItem('misProductos', JSON.stringify(nuevaLista)); // Actualiza la memoria
        }
    };

    return (
        <AdminLayout titulo="Gestión de Productos">
            <div style={{ marginBottom: '20px' }}>
                <Link to="/admin/producto/nuevo" className="btn-submit" style={{ textDecoration: 'none' }}>
                    + Nuevo Producto
                </Link>
            </div>

            <table className="tabla-admin">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Categoría</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((prod) => (
                        <tr key={prod.id}>
                            <td>P00{prod.id}</td>
                            <td>{prod.nombre}</td>
                            <td>${prod.precio.toLocaleString('es-CL')}</td>
                            <td style={{ textTransform: 'capitalize' }}>{prod.categoria}</td>
                            <td>
                                {/* se envia el ID en la URL para saber cuál editar */}
                                <Link to={`/admin/producto/editar/${prod.id}`} className="btn-editar">Editar</Link> |{' '}
                                <button 
                                    className="btn-eliminar" 
                                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#dc3545', padding: 0, font: 'inherit', textDecoration: 'underline' }} 
                                    onClick={() => eliminarProducto(prod.id, prod.nombre)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};
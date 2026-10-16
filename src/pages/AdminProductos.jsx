import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerProductos, eliminarProducto as borrarProducto } from '../data/db';

export const AdminProductos = () => {
    const [productos, setProductos] = useState(obtenerProductos);

    // Funcion eliminar
    const eliminarProducto = (id, nombre) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar el producto "${nombre}"?`)) {
            borrarProducto(id);                 // actualiza la "base de datos"
            setProductos(obtenerProductos());   // actualiza la pantalla
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
                        <th>Stock</th>
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
                            <td style={{ color: prod.stock <= 5 ? '#dc3545' : 'inherit', fontWeight: prod.stock <= 5 ? 'bold' : 'normal' }}>{prod.stock}</td>
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

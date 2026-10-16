import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { productosIniciales } from '../data/db';

export const AdminProductos = () => {
    // Estado para guardar la lista que se muestra en la tabla
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // Al cargar la página se busca en localStorage
        const productosGuardados = JSON.parse(localStorage.getItem('misProductos'));
        if (productosGuardados) {
            setProductos(productosGuardados); 
        } else {
            setProductos(productosIniciales); 
        }
    }, []);

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
                                <Link to="/admin/producto/editar" className="btn-editar">Editar</Link> |{' '}
                                <a href="#" className="btn-eliminar" onClick={(e) => {
                                    e.preventDefault();
                                    alert('Función eliminar en construcción');
                                }}>
                                    Eliminar
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};
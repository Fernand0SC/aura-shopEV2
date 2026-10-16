// src/pages/AdminNuevoProducto.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { productosIniciales } from '../data/db'; 

export const AdminNuevoProducto = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nombre || !precio || !categoria) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        // Traer los productos del localStorage
        const productosGuardados = JSON.parse(localStorage.getItem('misProductos')) || productosIniciales;
        
        // Crear el nuevo producto
        const nuevoProducto = {
            id: productosGuardados.length > 0 ? productosGuardados[productosGuardados.length - 1].id + 1 : 1,
            nombre: nombre,
            precio: parseInt(precio), // Aseguramos que sea número
            categoria: categoria,
            img: 'default.png' // Imagen genérica para los nuevos
        };

        // Agregar a la lista y guardar en localStorage
        const nuevaLista = [...productosGuardados, nuevoProducto];
        localStorage.setItem('misProductos', JSON.stringify(nuevaLista));

        alert(`¡Producto "${nombre}" guardado con éxito!`);
        navigate('/admin/productos');
    };

    return (
        <AdminLayout titulo="Añadir Nuevo Producto">
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre del Producto:</label>
                        <input 
                            type="text" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej: Teclado Mecánico RGB"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Precio ($):</label>
                        <input 
                            type="number" 
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                            placeholder="Ej: 45000"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Categoría:</label>
                        <select 
                            value={categoria}
                            onChange={(e) => setCategoria(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        >
                            <option value="">-- Seleccione una categoría --</option>
                            <option value="hardware">Hardware</option>
                            <option value="perifericos">Periféricos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit">
                        Guardar Producto
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};
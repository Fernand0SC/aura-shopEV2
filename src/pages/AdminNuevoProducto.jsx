// src/pages/AdminNuevoProducto.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { crearProducto } from '../data/db';

export const AdminNuevoProducto = () => {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [oferta, setOferta] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim() || precio === '' || stock === '' || !categoria) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }
        if (parseInt(precio) < 0 || parseInt(stock) < 0) {
            alert('El precio y el stock no pueden ser negativos.');
            return;
        }

        crearProducto({
            nombre: nombre.trim(),
            precio: parseInt(precio),
            stock: parseInt(stock),
            categoria,
            oferta,
        });

        alert(`¡Producto "${nombre}" guardado con éxito!`);
        navigate('/admin/productos');
    };

    return (
        <AdminLayout titulo="Añadir Nuevo Producto">
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre del Producto:</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ej: Teclado Mecánico RGB"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Precio ($):</label>
                        <input type="number" min="0" value={precio} onChange={(e) => setPrecio(e.target.value)} placeholder="Ej: 45000"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Stock (unidades):</label>
                        <input type="number" min="0" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Ej: 10"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Categoría:</label>
                        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}>
                            <option value="">-- Seleccione una categoría --</option>
                            <option value="hardware">Hardware</option>
                            <option value="perifericos">Periféricos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ fontWeight: 'bold' }}>
                            <input type="checkbox" checked={oferta} onChange={(e) => setOferta(e.target.checked)} style={{ marginRight: '8px' }} />
                            Producto en oferta
                        </label>
                    </div>

                    <button type="submit" className="btn-submit">
                        Guardar Producto
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};

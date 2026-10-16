import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminNuevoProducto = () => {
    const navigate = useNavigate();
    
    // Estados para guardar lo que el administrador escribe
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que la página se recargue
        
        // Validación 
        if (!nombre || !precio || !categoria) {
            alert('Por favor, completa todos los campos obligatorios.');
            return;
        }

        alert(`¡Producto "${nombre}" simulado con éxito!`);
        // Después de guardar, devolvemos al admin a la tabla de productos
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
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminEditarProducto = () => {
    const { id } = useParams(); 
    const navigate = useNavigate();
    
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    useEffect(() => {
        // Buscar producto 
        const productosGuardados = JSON.parse(localStorage.getItem('misProductos')) || [];
        const productoAEditar = productosGuardados.find(p => p.id === parseInt(id));
        
        if (productoAEditar) {
            setNombre(productoAEditar.nombre);
            setPrecio(productoAEditar.precio);
            setCategoria(productoAEditar.categoria);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nombre || !precio || !categoria) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const productosGuardados = JSON.parse(localStorage.getItem('misProductos')) || [];
        
  
        const listaActualizada = productosGuardados.map(prod => {
            if (prod.id === parseInt(id)) {
                return { ...prod, nombre: nombre, precio: parseInt(precio), categoria: categoria };
            }
            return prod;
        });

        localStorage.setItem('misProductos', JSON.stringify(listaActualizada));
        alert('¡Producto actualizado con éxito!');
        navigate('/admin/productos');
    };

    return (
        <AdminLayout titulo="Editar Producto">
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre del Producto:</label>
                        <input 
                            type="text" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Precio ($):</label>
                        <input 
                            type="number" 
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
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
                            <option value="hardware">Hardware</option>
                            <option value="perifericos">Periféricos</option>
                            <option value="accesorios">Accesorios</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn-submit">
                        Actualizar Producto
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};
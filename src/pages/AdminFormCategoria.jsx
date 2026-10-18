// Sirve para crear y para editar: si la URL trae un id, edita; si no, crea.
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerCategoriaPorId, crearCategoria, actualizarCategoria } from '../data/db';

export const AdminFormCategoria = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const categoria = id ? obtenerCategoriaPorId(id) : null;

    const [nombre, setNombre] = useState(categoria ? categoria.nombre : '');
    const [descripcion, setDescripcion] = useState(categoria ? categoria.descripcion : '');

    if (id && !categoria) {
        return (
            <AdminLayout titulo="Editar Categoría">
                <p>La categoría solicitada no existe.</p>
            </AdminLayout>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre.trim()) {
            alert('El nombre de la categoría es obligatorio.');
            return;
        }
        if (nombre.trim().length > 50) {
            alert('El nombre no puede superar los 50 caracteres.');
            return;
        }

        const datos = { nombre, descripcion: descripcion.trim() };
        const resultado = id ? actualizarCategoria(id, datos) : crearCategoria(datos);
        if (!resultado.ok) {
            alert(resultado.error);
            return;
        }

        alert(id ? '¡Categoría actualizada con éxito!' : '¡Categoría creada con éxito!');
        navigate('/admin/categorias');
    };

    return (
        <AdminLayout titulo={id ? 'Editar Categoría' : 'Nueva Categoría'}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="cat-nombre" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre:</label>
                        <input id="cat-nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej: Almacenamiento"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label htmlFor="cat-descripcion" style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Descripción (opcional):</label>
                        <textarea id="cat-descripcion" rows="3" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} />
                    </div>

                    <button type="submit" className="btn-submit">
                        {id ? 'Actualizar Categoría' : 'Guardar Categoría'}
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};
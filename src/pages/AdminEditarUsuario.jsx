// src/pages/AdminEditarUsuario.jsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminEditarUsuario = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [rol, setRol] = useState('');

    useEffect(() => {
        const usuariosGuardados = JSON.parse(localStorage.getItem('misUsuarios')) || [];
        const usuarioAEditar = usuariosGuardados.find(u => u.id === parseInt(id));
        
        if (usuarioAEditar) {
            setNombre(usuarioAEditar.nombre);
            setCorreo(usuarioAEditar.correo);
            setRol(usuarioAEditar.rol);
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nombre || !correo || !rol) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        const usuariosGuardados = JSON.parse(localStorage.getItem('misUsuarios')) || [];
        
        const listaActualizada = usuariosGuardados.map(user => {
            if (user.id === parseInt(id)) {
                return { ...user, nombre, correo, rol };
            }
            return user;
        });

        localStorage.setItem('misUsuarios', JSON.stringify(listaActualizada));
        alert('¡Usuario actualizado con éxito!');
        navigate('/admin/usuarios');
    };

    return (
        <AdminLayout titulo="Editar Usuario">
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre Completo:</label>
                        <input 
                            type="text" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Correo Electrónico:</label>
                        <input 
                            type="email" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Rol en el sistema:</label>
                        <select 
                            value={rol}
                            onChange={(e) => setRol(e.target.value)}
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        >
                            <option value="Administrador">Administrador</option>
                            <option value="Editor de Productos">Editor de Productos</option>
                            <option value="Soporte al Cliente">Soporte al Cliente</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit">
                        Actualizar Usuario
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};
// src/pages/AdminEditarUsuario.jsx
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerUsuarioPorId, actualizarUsuario, ROLES } from '../data/db';

export const AdminEditarUsuario = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const usuario = obtenerUsuarioPorId(id);

    const [nombre, setNombre] = useState(usuario ? usuario.nombre : '');
    const [correo, setCorreo] = useState(usuario ? usuario.correo : '');
    const [rol, setRol] = useState(usuario ? usuario.rol : '');

    if (!usuario) {
        return (
            <AdminLayout titulo="Editar Usuario">
                <p>El usuario solicitado no existe.</p>
            </AdminLayout>
        );
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!nombre || !correo || !rol) {
            alert('Por favor, completa todos los campos.');
            return;
        }

        actualizarUsuario(id, { nombre: nombre.trim(), correo: correo.trim(), rol });
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
                            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
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

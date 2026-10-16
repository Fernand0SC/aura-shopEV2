// src/pages/AdminUsuarios.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';
import { obtenerUsuarios, eliminarUsuario as borrarUsuario } from '../data/db';

export const AdminUsuarios = () => {
    const [usuarios, setUsuarios] = useState(obtenerUsuarios);

    const eliminarUsuario = (id, nombre) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar al usuario "${nombre}"?`)) {
            borrarUsuario(id);
            setUsuarios(obtenerUsuarios());
        }
    };

    return (
        <AdminLayout titulo="Gestión de Usuarios">
            <div style={{ marginBottom: '20px' }}>
                <Link to="/admin/usuario/nuevo" className="btn-submit" style={{ textDecoration: 'none' }}>
                    + Añadir Usuario Admin
                </Link>
            </div>

            <table className="tabla-admin">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((user) => (
                        <tr key={user.id}>
                            <td>U00{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.correo}</td>
                            <td><span style={{ fontWeight: 'bold', color: '#17a2b8' }}>{user.rol}</span></td>
                            <td>
                                <Link to={`/admin/usuario/editar/${user.id}`} className="btn-editar">Editar</Link> |{' '}
                                <button 
                                    className="btn-eliminar" 
                                    style={{ border: 'none', background: 'none', cursor: 'pointer', color: '#dc3545', padding: 0, font: 'inherit', textDecoration: 'underline' }} 
                                    onClick={() => eliminarUsuario(user.id, user.nombre)}
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

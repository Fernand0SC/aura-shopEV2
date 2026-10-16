// src/pages/AdminUsuarios.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    const usuariosIniciales = [
        { id: 1, nombre: 'Fernando Serrano', correo: 'fernando@duoc.cl', rol: 'Administrador' },
        { id: 2, nombre: 'Manuel', correo: 'manuel@duoc.cl', rol: 'Editor de Productos' },
        { id: 3, nombre: 'Matias', correo: 'matias@duoc.cl', rol: 'Soporte al Cliente' }
    ];

    useEffect(() => {
        const usuariosGuardados = JSON.parse(localStorage.getItem('misUsuarios'));
        if (usuariosGuardados) {
            setUsuarios(usuariosGuardados);
        } else {
            setUsuarios(usuariosIniciales);
            localStorage.setItem('misUsuarios', JSON.stringify(usuariosIniciales));
        }
    }, []);

    const eliminarUsuario = (id, nombre) => {
        if (window.confirm(`¿Estás seguro de que deseas eliminar al usuario "${nombre}"?`)) {
            const nuevaLista = usuarios.filter(user => user.id !== id);
            setUsuarios(nuevaLista);
            localStorage.setItem('misUsuarios', JSON.stringify(nuevaLista));
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
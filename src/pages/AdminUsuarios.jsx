import { Link } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminUsuarios = () => {
    const usuariosSimulados = [
        { id: 1, nombre: 'Fernando Serrano', correo: 'fernando@duoc.cl', rol: 'Administrador' },
        { id: 2, nombre: 'Manuel', correo: 'manuel@duoc.cl', rol: 'Administrador' },
        { id: 3, nombre: 'Matias', correo: 'matias@duoc.cl', rol: 'Administrador' }
    ];

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
                    {usuariosSimulados.map((user) => (
                        <tr key={user.id}>
                            <td>U00{user.id}</td>
                            <td>{user.nombre}</td>
                            <td>{user.correo}</td>
                            <td><span style={{ fontWeight: 'bold', color: '#17a2b8' }}>{user.rol}</span></td>
                            <td>
                                <a href="#" className="btn-editar" onClick={(e) => e.preventDefault()}>Editar</a> |{' '}
                                <a href="#" className="btn-eliminar" onClick={(e) => e.preventDefault()}>Eliminar</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </AdminLayout>
    );
};
import { AdminLayout } from '../components/AdminLayout';
import { useSesion } from '../context/SesionContext';

export const AdminPerfil = () => {
    const { usuario } = useSesion();

    return (
        <AdminLayout titulo="Mi Perfil">
            <div className="perfil-usuario">
                <h2>Datos personales</h2>
                <ul>
                    <li><strong>Nombre:</strong> {usuario.nombre}</li>
                    <li><strong>Correo:</strong> {usuario.correo}</li>
                    <li><strong>Rol:</strong> {usuario.rol}</li>
                </ul>
            </div>
        </AdminLayout>
    );
};
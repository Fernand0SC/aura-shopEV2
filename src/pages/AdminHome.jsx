import { AdminLayout } from '../components/AdminLayout';

export const AdminHome = () => {
    return (
        <AdminLayout titulo="¡Bienvenido Administrador!">
            <p>Bienvenido al panel de control de Aura Shop. Desde aquí podrás gestionar el inventario y los usuarios del sistema.</p>
        </AdminLayout>
    );
};
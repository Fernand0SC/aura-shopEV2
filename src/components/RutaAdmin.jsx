import { Navigate, Outlet } from 'react-router-dom';
import { useSesion } from '../context/SesionContext';

export const RutaAdmin = () => {
    const { esAdmin } = useSesion();
    return esAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

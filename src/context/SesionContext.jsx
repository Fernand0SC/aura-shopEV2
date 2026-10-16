//guarda quién inició sesion
import { createContext, useContext, useState } from 'react';
import { obtenerUsuarioPorId, validarCredenciales, esRolAdmin } from '../data/db';

const CLAVE_SESION = 'sesionAura';
const SesionContext = createContext(null);

// Se guarda solo el id
function leerSesion() {
    try {
        const id = JSON.parse(localStorage.getItem(CLAVE_SESION));
        return id ? obtenerUsuarioPorId(id) : null;
    } catch {
        return null;
    }
}

export const SesionProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(leerSesion);

    // Devuelve el usuario si las credenciales son correctas
    const iniciarSesion = (correo, password) => {
        const encontrado = validarCredenciales(correo, password);
        if (!encontrado) return null;
        localStorage.setItem(CLAVE_SESION, JSON.stringify(encontrado.id));
        setUsuario(encontrado);
        return encontrado;
    };

    const cerrarSesion = () => {
        localStorage.removeItem(CLAVE_SESION);
        setUsuario(null);
    };

    const esAdmin = !!usuario && esRolAdmin(usuario.rol);

    return (
        <SesionContext.Provider value={{ usuario, esAdmin, iniciarSesion, cerrarSesion }}>
            {children}
        </SesionContext.Provider>
    );
};

export const useSesion = () => {
    const contexto = useContext(SesionContext);
    if (!contexto) throw new Error('useSesion debe usarse dentro de <SesionProvider>');
    return contexto;
};

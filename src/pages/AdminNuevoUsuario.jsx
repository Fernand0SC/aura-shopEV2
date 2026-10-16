import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminLayout } from '../components/AdminLayout';

export const AdminNuevoUsuario = () => {
    const navigate = useNavigate();
    
    // Estados para los campos del formulario
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validacion
        if (!nombre || !correo || !password || !rol) {
            alert('Por favor, completa todos los campos para registrar al usuario.');
            return;
        }

        alert(`¡Usuario "${nombre}" registrado con éxito en el sistema!`);
        navigate('/admin/usuarios');
    };

    return (
        <AdminLayout titulo="Añadir Usuario Administrador">
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', color: '#333', maxWidth: '600px' }}>
                <form onSubmit={handleSubmit}>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Nombre Completo:</label>
                        <input 
                            type="text" 
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder="Ej: Juan Pérez"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Correo Electrónico:</label>
                        <input 
                            type="email" 
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                            placeholder="ejemplo@duoc.cl"
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>Contraseña Temporal:</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
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
                            <option value="">-- Seleccione un rol --</option>
                            <option value="Administrador Supremo">Administrador</option>
                            <option value="Editor de Productos">Editor de Productos</option>
                            <option value="Soporte al Cliente">Soporte al Cliente</option>
                        </select>
                    </div>
                    
                    <button type="submit" className="btn-submit">
                        Registrar Usuario
                    </button>
                </form>
            </div>
        </AdminLayout>
    );
};
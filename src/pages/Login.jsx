import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSesion } from '../context/SesionContext';
import { esRolAdmin } from '../data/db';

export const Login = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [errCorreo, setErrCorreo] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errLogin, setErrLogin] = useState('');
    const { iniciarSesion } = useSesion();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        let isValid = true;
        const regexCorreo = /^[a-zA-Z0-9._-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

        if (!correo) {
            setErrCorreo('El correo es requerido.');
            isValid = false;
        } else if (correo.length > 100) {
            setErrCorreo('El correo no puede tener más de 100 caracteres.');
            isValid = false;
        } else if (!regexCorreo.test(correo)) {
            setErrCorreo('Solo correos @duoc.cl, @profesor.duoc.cl o @gmail.com.');
            isValid = false;
        } else {
            setErrCorreo('');
        }

        if (!password) {
            setErrPassword('La contraseña es requerida.');
            isValid = false;
        } else if (password.length < 4 || password.length > 10) {
            setErrPassword('La contraseña debe tener entre 4 y 10 caracteres.');
            isValid = false;
        } else {
            setErrPassword('');
        }

        if (isValid) {
            const usuario = iniciarSesion(correo.trim(), password);
            if (!usuario) {
                setErrLogin('Correo o contraseña incorrectos.');
                return;
            }
            setErrLogin('');
            navigate(esRolAdmin(usuario.rol) ? '/admin' : '/');
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: '400px' }}>
            <div className="card bg-dark text-white p-4 border-secondary shadow">
                <h2 className="text-center mb-4">Inicio de Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Correo:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="usuario@duoc.cl"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                        {errCorreo && <small className="text-danger d-block mt-1">{errCorreo}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {errPassword && <small className="text-danger d-block mt-1">{errPassword}</small>}
                    </div>
                    {errLogin && <div className="alert alert-danger py-2">{errLogin}</div>}
                    <button type="submit" className="btn btn-primary w-100 fw-bold">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    );
};

import { useState } from 'react';

export const Registro = () => {
    const [run, setRun] = useState('');
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [telefono, setTelefono] = useState('');
    const [region, setRegion] = useState('');
    const [comuna, setComuna] = useState('');

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;
        const regexRun = /^[0-9]{7,8}[0-9Kk]$/;
        const correoValido = correo.endsWith('@duoc.cl') || correo.endsWith('@profesor.duoc.cl') || correo.endsWith('@gmail.com');

        if (!run.trim()) {
            newErrors.run = 'El RUN es requerido.';
            isValid = false;
        } else if (!regexRun.test(run.trim())) {
            newErrors.run = 'El RUN debe tener entre 7 y 9 caracteres, sin puntos ni guion.';
            isValid = false;
        }

        if (!nombre.trim()) {
            newErrors.nombre = 'El nombre es requerido.';
            isValid = false;
        } else if (nombre.trim().length > 50) {
            newErrors.nombre = 'El nombre no puede tener más de 50 caracteres.';
            isValid = false;
        }

        if (!correo.trim()) {
            newErrors.correo = 'El correo es requerido.';
            isValid = false;
        } else if (correo.trim().length > 100) {
            newErrors.correo = 'El correo no puede tener más de 100 caracteres.';
            isValid = false;
        } else if (!correoValido) {
            newErrors.correo = 'Solo se permiten correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';
            isValid = false;
        }

        if (!password.trim()) {
            newErrors.password = 'La contraseña es requerida.';
            isValid = false;
        } else if (password.trim().length < 4 || password.trim().length > 10) {
            newErrors.password = 'La contraseña debe tener entre 4 y 10 caracteres.';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            alert('¡Registro validado y exitoso!');
            setRun(''); setNombre(''); setCorreo(''); setPassword(''); setTelefono(''); setRegion(''); setComuna('');
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: '600px' }}>
            <div className="card bg-dark text-white p-4 border-secondary shadow">
                <h2 className="text-center mb-4">Registro de Usuario</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">RUN (Sin puntos ni guion):</label>
                        <input type="text" className="form-control" placeholder="Ej: 19011022K" value={run} onChange={(e) => setRun(e.target.value)} />
                        {errors.run && <small className="text-danger">{errors.run}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre Completo:</label>
                        <input type="text" className="form-control" placeholder="Tu nombre completo" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        {errors.nombre && <small className="text-danger">{errors.nombre}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Correo Electrónico:</label>
                        <input type="email" className="form-control" placeholder="correo@duoc.cl" value={correo} onChange={(e) => setCorreo(e.target.value)} />
                        {errors.correo && <small className="text-danger">{errors.correo}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña:</label>
                        <input type="password" className="form-control" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <small className="text-danger">{errors.password}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono (Opcional):</label>
                        <input type="tel" className="form-control" placeholder="+569..." value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Seleccione Región:</label>
                        <select className="form-select" value={region} onChange={(e) => setRegion(e.target.value)}>
                            <option value="">-- Seleccione una región --</option>
                            <option value="rm">Región Metropolitana de Santiago</option>
                            <option value="araucania">Región de la Araucanía</option>
                            <option value="nuble">Región de Ñuble</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Seleccione Comuna:</label>
                        <select className="form-select" value={comuna} onChange={(e) => setComuna(e.target.value)}>
                            <option value="">-- Seleccione una comuna --</option>
                            <option value="puente-alto">Puente Alto</option>
                            <option value="santiago">Santiago</option>
                            <option value="linares">Linares</option>
                            <option value="concepcion">Concepción</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info w-100 fw-bold">Registrar</button>
                </form>
            </div>
        </div>
    );
};
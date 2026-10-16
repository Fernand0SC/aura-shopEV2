
import { useState } from 'react';

export const Contacto = () => {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [mensaje, setMensaje] = useState('');
    const [alerta, setAlerta] = useState({ texto: '', color: '' });

    const validarFormulario = (e) => {
        e.preventDefault();
        const correoLower = correo.toLowerCase();

        if (nombre.trim() === '') {
            setAlerta({ texto: 'Sugerencia: Falta escribir tu nombre.', color: 'text-danger' });
        } else if (correo.trim() === '') {
            setAlerta({ texto: 'Sugerencia: Falta escribir tu correo.', color: 'text-danger' });
        } else if (!correoLower.endsWith('@duoc.cl') && !correoLower.endsWith('@gmail.com') && !correoLower.endsWith('@profesor.duoc.cl')) {
            setAlerta({ texto: 'Error: El correo debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com.', color: 'text-danger' });
        } else if (mensaje.trim() === '') {
            setAlerta({ texto: 'Sugerencia: Falta escribir un mensaje.', color: 'text-danger' });
        } else if (mensaje.length > 500) {
            setAlerta({ texto: 'Error: El mensaje no puede tener más de 500 caracteres.', color: 'text-danger' });
        } else {
            setAlerta({ texto: '¡Formulario validado con éxito!', color: 'text-success' });
            setNombre('');
            setCorreo('');
            setMensaje('');
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: '600px' }}>
            <div className="card bg-dark text-white p-4 border-secondary shadow">
                <h2 className="text-center mb-4">Ponte en Contacto</h2>
                <form onSubmit={validarFormulario}>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Nombre Completo:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Ej: Juan Pérez"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Correo Electrónico:</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="ejemplo@correo.com"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-bold">Tu Mensaje:</label>
                        <textarea 
                            className="form-control" 
                            rows="5" 
                            placeholder="¿En qué te podemos ayudar?"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-info w-100 fw-bold">Enviar Mensaje</button>
                </form>
                {alerta.texto && (
                    <p className={`text-center fw-bold mt-3 ${alerta.color}`}>{alerta.texto}</p>
                )}
            </div>
        </div>
    );
};
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
    const navigate = useNavigate();
    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [correo, setCorreo] = useState('');

    useEffect(() => {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito') || localStorage.getItem('miCarrito')) || [];
        setCarrito(carritoGuardado);
        
        const totalCalculado = carritoGuardado.reduce((sum, item) => sum + (item.subtotal || (item.precio * item.cantidad)), 0);
        setTotal(totalCalculado);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!correo.endsWith('@duoc.cl') && !correo.endsWith('@profesor.duoc.cl')) {
            alert('Por favor, ingresa un correo institucional válido (@duoc.cl o @profesor.duoc.cl).');
            return;
        }

        localStorage.removeItem('carrito');
        localStorage.removeItem('miCarrito');
        
        window.dispatchEvent(new Event('carritoActualizado'));

        navigate('/compra-exitosa'); 
    };

    return (
        <div className="container my-5">
            <h2 className="mb-4">Finalizar Compra</h2>
            
            <div className="row">
                <div className="col-md-8">
                    <div className="card bg-dark text-white border-secondary mb-4">
                        <div className="card-header border-secondary">
                            <h4 className="mb-0">Información del cliente y envío</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label">Nombre</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Apellidos</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Correo Institucional</label>
                                    <input 
                                        type="email" 
                                        className="form-control" 
                                        required 
                                        value={correo}
                                        onChange={(e) => setCorreo(e.target.value)}
                                        placeholder="ejemplo@duoc.cl"
                                    />
                                </div>
                                
                                <h5 className="mt-4 mb-3">Dirección de entrega</h5>
                                <div className="row mb-3">
                                    <div className="col-8">
                                        <label className="form-label">Calle</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                    <div className="col-4">
                                        <label className="form-label">Depto (opcional)</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label">Región</label>
                                        <select className="form-select" required>
                                            <option value="">Seleccione...</option>
                                            <option value="RM">Región Metropolitana</option>
                                            <option value="V">Región de Valparaíso</option>
                                        </select>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Comuna</label>
                                        <input type="text" className="form-control" required />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Indicaciones para la entrega (opcional)</label>
                                    <textarea className="form-control" rows="2"></textarea>
                                </div>

                                <button type="submit" className="btn btn-success w-100 mt-3 p-3 fw-bold">
                                    Pagar ahora ${total.toLocaleString('es-CL')}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-dark text-white border-secondary">
                        <div className="card-header border-secondary">
                            <h5 className="mb-0">Resumen de compra</h5>
                        </div>
                        <div className="card-body">
                            {carrito.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between mb-2 pb-2 border-bottom border-secondary">
                                    <span>{item.cantidad}x {item.nombre}</span>
                                    <span>${(item.subtotal || (item.precio * item.cantidad)).toLocaleString('es-CL')}</span>
                                </div>
                            ))}
                            <div className="d-flex justify-content-between mt-3 fw-bold fs-5">
                                <span>Total a pagar:</span>
                                <span className="text-success">${total.toLocaleString('es-CL')}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
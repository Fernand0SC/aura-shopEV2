import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useSesion } from '../context/SesionContext';
import { guardarOrden, obtenerOrdenPorId, OPCIONES_ENTREGA } from '../data/db';
import { regiones, obtenerRegion } from '../data/regiones';

const regexCorreo = /^[a-zA-Z0-9._-]+@(duoc\.cl|profesor\.duoc\.cl|gmail\.com)$/;

const vacio = {
    nombre: '', apellidos: '', correo: '',
    calle: '', depto: '', region: '', comuna: '', indicaciones: '',
    entrega: 'estandar',
};

export const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { items: carrito, total, vaciar } = useCarrito();
    const { usuario } = useSesion();

    // Si venimos de "Volver a realizar el pago", se reutilizan los datos de esa orden
    const ordenPrevia = location.state?.ordenId ? obtenerOrdenPorId(location.state.ordenId) : null;

    // Si el usuario inició sesión, sus datos se completan automáticamente
    const [form, setForm] = useState(() => {
        if (ordenPrevia) {
            return { ...vacio, ...ordenPrevia.cliente, ...ordenPrevia.direccion, entrega: ordenPrevia.entrega };
        }
        if (usuario) {
            const [nombre, ...resto] = usuario.nombre.split(' ');
            return {
                ...vacio,
                nombre,
                apellidos: resto.join(' '),
                correo: usuario.correo,
                region: usuario.region || '',
                comuna: usuario.comuna || '',
            };
        }
        return vacio;
    });
    const [errors, setErrors] = useState({});
    const [resultadoPago, setResultadoPago] = useState('aprobado');

    const cambiar = (campo) => (e) => setForm({ ...form, [campo]: e.target.value });
    const cambiarRegion = (e) => setForm({ ...form, region: e.target.value, comuna: '' });
    const comunas = obtenerRegion(form.region)?.comunas ?? [];

    const validar = () => {
        const nuevos = {};
        if (!form.nombre.trim()) nuevos.nombre = 'El nombre es requerido.';
        else if (form.nombre.trim().length > 50) nuevos.nombre = 'Máximo 50 caracteres.';

        if (!form.apellidos.trim()) nuevos.apellidos = 'Los apellidos son requeridos.';
        else if (form.apellidos.trim().length > 100) nuevos.apellidos = 'Máximo 100 caracteres.';

        if (!form.correo.trim()) nuevos.correo = 'El correo es requerido.';
        else if (!regexCorreo.test(form.correo.trim())) nuevos.correo = 'Solo correos @duoc.cl, @profesor.duoc.cl o @gmail.com.';

        if (!form.calle.trim()) nuevos.calle = 'La calle es requerida.';
        if (!form.region) nuevos.region = 'Selecciona una región.';
        if (!form.comuna) nuevos.comuna = 'Selecciona una comuna.';
        return nuevos;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevos = validar();
        setErrors(nuevos);
        if (Object.keys(nuevos).length > 0) return;

        const aprobado = resultadoPago === 'aprobado';

        // Se guarda la orden con el resultado del pago (simulado)
        const orden = guardarOrden({
            usuarioId: usuario ? usuario.id : null,
            cliente: { nombre: form.nombre.trim(), apellidos: form.apellidos.trim(), correo: form.correo.trim() },
            entrega: form.entrega,
            direccion: {
                calle: form.calle.trim(),
                depto: form.depto.trim(),
                region: form.region,
                comuna: form.comuna,
                indicaciones: form.indicaciones.trim(),
            },
            items: carrito.map(({ id, nombre, precio, cantidad, img }) => ({ id, nombre, precio, cantidad, img })),
            estado: aprobado ? 'Pagada' : 'Pago fallido',
            motivoFallo: aprobado ? null : 'El pago fue rechazado por el emisor de la tarjeta.',
        }, ordenPrevia?.id);

        if (aprobado) {
            vaciar();
            navigate(`/pago-correcto/${orden.id}`, { replace: true });
        } else {
            navigate(`/pago-error/${orden.id}`);
        }
    };

    if (carrito.length === 0) {
        return (
            <div className="container my-5 text-center">
                <div className="alert alert-info">
                    No tienes productos en el carrito. <Link to="/productos" className="alert-link">Ir al catálogo</Link>
                </div>
            </div>
        );
    }

    const error = (campo) => errors[campo] && <small className="text-danger d-block mt-1">{errors[campo]}</small>;

    return (
        <div className="container my-5">
            <h2 className="mb-2">Finalizar Compra</h2>
            {usuario && !ordenPrevia && (
                <p className="text-info">Completamos tus datos con tu cuenta. Puedes modificarlos.</p>
            )}
            {ordenPrevia && (
                <div className="alert alert-warning">Estás reintentando el pago de la orden #{ordenPrevia.numero}.</div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card bg-dark text-white border-secondary mb-4">
                            <div className="card-header border-secondary">
                                <h4 className="mb-0">Información del cliente y envío</h4>
                            </div>
                            <div className="card-body">
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label" htmlFor="co-nombre">Nombre</label>
                                        <input id="co-nombre" type="text" className="form-control" value={form.nombre} onChange={cambiar('nombre')} />
                                        {error('nombre')}
                                    </div>
                                    <div className="col">
                                        <label className="form-label" htmlFor="co-apellidos">Apellidos</label>
                                        <input id="co-apellidos" type="text" className="form-control" value={form.apellidos} onChange={cambiar('apellidos')} />
                                        {error('apellidos')}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="co-correo">Correo</label>
                                    <input id="co-correo" type="email" className="form-control" value={form.correo}
                                        onChange={cambiar('correo')} placeholder="ejemplo@duoc.cl" />
                                    {error('correo')}
                                </div>

                                <h5 className="mt-4 mb-3">Dirección de entrega</h5>
                                <div className="row mb-3">
                                    <div className="col-8">
                                        <label className="form-label" htmlFor="co-calle">Calle</label>
                                        <input id="co-calle" type="text" className="form-control" value={form.calle} onChange={cambiar('calle')} />
                                        {error('calle')}
                                    </div>
                                    <div className="col-4">
                                        <label className="form-label" htmlFor="co-depto">Depto (opcional)</label>
                                        <input id="co-depto" type="text" className="form-control" value={form.depto} onChange={cambiar('depto')} />
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label" htmlFor="co-region">Región</label>
                                        <select id="co-region" className="form-select" value={form.region} onChange={cambiarRegion}>
                                            <option value="">Seleccione...</option>
                                            {regiones.map((r) => <option key={r.id} value={r.id}>{r.nombre}</option>)}
                                        </select>
                                        {error('region')}
                                    </div>
                                    <div className="col">
                                        <label className="form-label" htmlFor="co-comuna">Comuna</label>
                                        <select id="co-comuna" className="form-select" value={form.comuna} onChange={cambiar('comuna')} disabled={!form.region}>
                                            <option value="">Seleccione...</option>
                                            {comunas.map((c) => <option key={c.id} value={c.id}>{c.nombre}</option>)}
                                        </select>
                                        {error('comuna')}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="co-indicaciones">Indicaciones para la entrega (opcional)</label>
                                    <textarea id="co-indicaciones" className="form-control" rows="2" value={form.indicaciones}
                                        onChange={cambiar('indicaciones')}></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="co-entrega">Opción de entrega</label>
                                    <select id="co-entrega" className="form-select" value={form.entrega} onChange={cambiar('entrega')}>
                                        {OPCIONES_ENTREGA.map((o) => <option key={o.id} value={o.id}>{o.nombre}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-dark text-white border-secondary mb-4">
                            <div className="card-header border-secondary">
                                <h5 className="mb-0">Pago (simulación)</h5>
                            </div>
                            <div className="card-body">
                                <p className="text-secondary small mb-2">
                                    Es una demostración: no se hace ningún cobro real. Elige el resultado que quieres simular.
                                </p>
                                <select className="form-select" value={resultadoPago} onChange={(e) => setResultadoPago(e.target.value)}>
                                    <option value="aprobado">Pago aprobado</option>
                                    <option value="rechazado">Pago rechazado (para ver la vista de error)</option>
                                </select>
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
                        <button type="submit" className="btn btn-success w-100 mt-3 p-3 fw-bold">
                            Pagar ahora ${total.toLocaleString('es-CL')}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
import { obtenerOfertas } from '../data/db';
import { ListaProductos } from '../components/ListaProductos';

export const Ofertas = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-2">Ofertas</h2>
            <p className="text-center text-secondary mb-4">Todos nuestros productos en oferta.</p>
            <ListaProductos
                productos={obtenerOfertas()}
                mensajeVacio="Por ahora no hay productos en oferta. ¡Vuelve pronto!"
            />
        </div>
    );
};
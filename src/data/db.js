export const productosIniciales = [
    { id: 1,  nombre: 'Tarjeta de Video NVIDIA RTX 4060', precio: 320000, categoria: 'hardware',    img: 'rtx4060.webp',               stock: 8,  oferta: false, descripcion: 'Tarjeta gráfica NVIDIA GeForce RTX 4060 con 8 GB de memoria GDDR6, ideal para jugar en 1080p con trazado de rayos y DLSS 3.' },
    { id: 2,  nombre: 'Placa Madre B550 AM4',             precio: 95000,  categoria: 'hardware',    img: 'placaMadreB550.jfif',        stock: 12, oferta: false, descripcion: 'Placa madre con chipset B550 y socket AM4, compatible con procesadores AMD Ryzen. Soporta memoria DDR4 y almacenamiento NVMe.' },
    { id: 3,  nombre: 'Fuente de Poder 650W 80+ Bronze',  precio: 55000,  categoria: 'hardware',    img: 'fuente650w.webp',            stock: 15, oferta: true,  descripcion: 'Fuente de poder de 650 W con certificación 80 PLUS Bronze: eficiente y estable para equipos gamer de gama media.' },
    { id: 4,  nombre: 'Gabinete ATX Cristal Templado',    precio: 45000,  categoria: 'hardware',    img: 'gabineteAtx.avif',           stock: 10, oferta: false, descripcion: 'Gabinete ATX con panel lateral de cristal templado para exhibir tus componentes, con espacio para buena ventilación.' },
    { id: 5,  nombre: 'Refrigeración Líquida 240mm',      precio: 75000,  categoria: 'hardware',    img: 'RefrigeracionLíquida.jfif',  stock: 4,  oferta: false, descripcion: 'Kit de refrigeración líquida con radiador de 240 mm para mantener tu procesador a baja temperatura.' },
    { id: 6,  nombre: 'Memoria RAM 16GB Crucial',         precio: 150000, categoria: 'hardware',    img: 'ram16gbCrucial.webp',        stock: 20, oferta: false, descripcion: 'Memoria RAM de 16 GB marca Crucial para mejorar la multitarea y el rendimiento en juegos.' },
    { id: 7,  nombre: 'Mouse Gamer',                      precio: 20000,  categoria: 'perifericos', img: 'mouseGamer.webp',            stock: 30, oferta: false, descripcion: 'Mouse gamer ergonómico pensado para largas sesiones de juego competitivo.' },
    { id: 8,  nombre: 'Audífonos Gamer 7.1 Surround',     precio: 40000,  categoria: 'perifericos', img: 'Audífonosgamer.jfif',        stock: 18, oferta: true,  descripcion: 'Audífonos gamer con sonido envolvente 7.1 para una experiencia de juego más inmersiva.' },
    { id: 9,  nombre: 'Mousepad XL Extended (90x40cm)',   precio: 12990,  categoria: 'accesorios',  img: 'MousepadXL.webp',            stock: 25, oferta: false, descripcion: 'Mousepad extendido de 90x40 cm que cubre teclado y mouse, con superficie suave para un deslizamiento preciso.' },
    { id: 10, nombre: 'Procesador AMD Ryzen 5',           precio: 120000, categoria: 'hardware',    img: 'ryzen5.jpg',                 stock: 9,  oferta: true,  descripcion: 'Procesador AMD Ryzen 5 con excelente relación precio-rendimiento para gaming y productividad.' },
    { id: 11, nombre: 'Unidad SSD 1TB NVMe M.2',          precio: 100000, categoria: 'hardware',    img: 'ssdnvme1TB.jpg',             stock: 3,  oferta: true,  descripcion: 'Unidad de estado sólido de 1 TB con interfaz NVMe M.2 para tiempos de carga muy reducidos.' },
    { id: 12, nombre: 'Webcam Streaming 1080p 60fps',     precio: 35000,  categoria: 'perifericos', img: 'Webcam.jfif',                stock: 11, oferta: false, descripcion: 'Webcam Full HD 1080p a 60 cuadros por segundo para streaming y videollamadas.' },
];

export const categoriasIniciales = [
    { id: 'hardware',    nombre: 'Hardware',    descripcion: 'Componentes internos para armar y mejorar tu PC.' },
    { id: 'perifericos', nombre: 'Periféricos', descripcion: 'Mouse, audífonos, cámaras y más para tu setup.' },
    { id: 'accesorios',  nombre: 'Accesorios',  descripcion: 'Complementos para tu espacio de juego.' },
];

export const OPCIONES_ENTREGA = [
    { id: 'estandar', nombre: 'Despacho estándar (3 a 5 días hábiles)' },
    { id: 'express',  nombre: 'Despacho express (24 horas)' },
];

export const blogsIniciales = [
    {
        id: 1,
        titulo: 'CASO CURIOSO #1: ¿Por qué las memorias RAM y componentes de PC vienen en color verde o negro?',
        resumen: 'Aunque hoy estamos acostumbrados al RGB y diseños agresivos, el clásico verde se debió a costos de fabricación industriales...',
        contenido: [
            'Si abres un computador, lo más probable es que las placas y memorias tengan un tono verde. Ese color no es un adorno: viene de la máscara de soldadura, una capa que cubre el circuito impreso (PCB) para proteger las pistas de cobre y evitar que la soldadura una puntos que no debe.',
            'El verde se convirtió en el estándar de la industria porque era el color más fácil y económico de producir a gran escala. Además, contrasta bien con las letras blancas impresas y con el cobre, lo que facilita la inspección visual durante la fabricación.',
            'Con el auge de la estética gamer, los fabricantes empezaron a ofrecer placas negras, rojas, blancas o azules, junto con iluminación RGB. Hoy el color es parte del diseño del producto, aunque el verde clásico sigue siendo muy común en componentes económicos y de uso industrial.',
        ],
    },
    {
        id: 2,
        titulo: 'CASO CURIOSO #2: El origen del botón de encendido y el icónico símbolo de I/O',
        resumen: 'Proviene de la Segunda Guerra Mundial, usando código binario (1 encendido, 0 apagado) en interruptores militares...',
        contenido: [
            'El símbolo de encendido que ves en gabinetes, fuentes de poder y electrodomésticos combina una línea vertical (I) y un círculo (O). Esas dos formas representan los dígitos del sistema binario: 1 para encendido y 0 para apagado.',
            'Una explicación muy difundida atribuye su origen a los interruptores de equipos militares de la Segunda Guerra Mundial, que usaban esa notación para evitar confusiones entre idiomas. Su uso se generalizó después y hoy forma parte de las normas internacionales de símbolos para equipos eléctricos.',
            'Con el tiempo, el símbolo se fusionó en un solo ícono (un círculo con una línea que lo atraviesa) que se usa para el modo de espera o para el botón de encendido, y que reconocemos en casi cualquier dispositivo del mundo.',
        ],
    }
];

//Cliente solo puede comprar
export const ROLES = ['Administrador', 'Editor de Productos', 'Soporte al Cliente', 'Cliente'];
export const esRolAdmin = (rol) => rol !== 'Cliente';

export const usuariosIniciales = [
    { id: 1, nombre: 'Fernando Serrano', correo: 'fernando@duoc.cl', password: '1234', rol: 'Administrador' },
    { id: 2, nombre: 'Manuel',           correo: 'manuel@duoc.cl',   password: '1234', rol: 'Editor de Productos' },
    { id: 3, nombre: 'Matias',           correo: 'matias@duoc.cl',   password: '1234', rol: 'Soporte al Cliente' },
    { id: 4, nombre: 'Cliente Demo',     correo: 'cliente@gmail.com', password: '1234', rol: 'Cliente' },
];

const CLAVE_PRODUCTOS = 'misProductos';
const CLAVE_USUARIOS = 'misUsuarios';
const CLAVE_CATEGORIAS = 'misCategorias';
const CLAVE_ORDENES = 'misOrdenes';
const CLAVE_VERSION = 'auraDbVersion';
const VERSION_DB = '3'; 

function leer(clave, valorInicial) {
    try {
        const guardado = localStorage.getItem(clave);
        if (guardado) return JSON.parse(guardado);
    } catch (error) {
        console.error(`Error leyendo "${clave}":`, error);
    }
    guardar(clave, valorInicial);
    return valorInicial;
}

function guardar(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
    } catch (error) {
        console.error(`Error guardando "${clave}":`, error);
    }
}

function siguienteId(lista) {
    return lista.length > 0 ? Math.max(...lista.map((item) => item.id)) + 1 : 1;
}

function verificarVersion() {
    try {
        if (localStorage.getItem(CLAVE_VERSION) !== VERSION_DB) {
            guardar(CLAVE_PRODUCTOS, productosIniciales);
            guardar(CLAVE_USUARIOS, usuariosIniciales);
            guardar(CLAVE_CATEGORIAS, categoriasIniciales);
            localStorage.removeItem(CLAVE_ORDENES);
            localStorage.removeItem('carrito'); 
            localStorage.setItem(CLAVE_VERSION, VERSION_DB);
        }
    } catch (error) {
        console.error('Error verificando versión de la base de datos:', error);
    }
}
verificarVersion();

//CRUD DE PRODUCTOS


export function obtenerProductos() {
    return leer(CLAVE_PRODUCTOS, productosIniciales);
}


export function obtenerProductoPorId(id) {
    return obtenerProductos().find((p) => p.id === Number(id)) || null;
}


export function obtenerProductosPorCategoria(categoriaId) {
    return obtenerProductos().filter((p) => p.categoria === categoriaId);
}

export function obtenerOfertas() {
    return obtenerProductos().filter((p) => p.oferta);
}

export const STOCK_CRITICO = 5;

export function obtenerProductosCriticos() {
    return obtenerProductos().filter((p) => p.stock <= STOCK_CRITICO);
}

export function crearProducto(datos) {
    const productos = obtenerProductos();
    const nuevo = { img: 'default.svg', stock: 0, oferta: false, ...datos, id: siguienteId(productos) };
    guardar(CLAVE_PRODUCTOS, [...productos, nuevo]);
    return nuevo;
}

export function actualizarProducto(id, cambios) {
    const lista = obtenerProductos().map((p) =>
        p.id === Number(id) ? { ...p, ...cambios, id: p.id } : p
    );
    guardar(CLAVE_PRODUCTOS, lista);
    return lista.find((p) => p.id === Number(id)) || null;
}

export function eliminarProducto(id) {
    guardar(CLAVE_PRODUCTOS, obtenerProductos().filter((p) => p.id !== Number(id)));
}

//CATEGORÍAS

export function obtenerCategorias() {
    return leer(CLAVE_CATEGORIAS, categoriasIniciales);
}

export function obtenerCategoriaPorId(id) {
    return obtenerCategorias().find((c) => c.id === id) || null;
}

// El id de la categoría es su nombre sin tildes ni espacios
function crearSlug(texto) {
    return String(texto)
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Devuelve { ok: true } o { ok: false, error }
export function crearCategoria({ nombre, descripcion = '' }) {
    const id = crearSlug(nombre);
    if (!id) return { ok: false, error: 'El nombre de la categoría no es válido.' };
    if (obtenerCategoriaPorId(id)) return { ok: false, error: 'Ya existe una categoría con ese nombre.' };
    guardar(CLAVE_CATEGORIAS, [...obtenerCategorias(), { id, nombre: nombre.trim(), descripcion }]);
    return { ok: true };
}

// Al editar cambia el nombre visible y la descripción
export function actualizarCategoria(id, { nombre, descripcion = '' }) {
    const repetida = obtenerCategorias().some((c) => c.id !== id && crearSlug(c.nombre) === crearSlug(nombre));
    if (repetida) return { ok: false, error: 'Ya existe una categoría con ese nombre.' };
    guardar(CLAVE_CATEGORIAS, obtenerCategorias().map((c) =>
        c.id === id ? { ...c, nombre: nombre.trim(), descripcion } : c
    ));
    return { ok: true };
}

//ÓRDENES DE COMPRA

export function obtenerOrdenes() {
    return leer(CLAVE_ORDENES, []);
}

export function obtenerOrdenPorId(id) {
    return obtenerOrdenes().find((o) => o.id === Number(id)) || null;
}

export function obtenerOrdenesPorUsuario(usuarioId) {
    return obtenerOrdenes().filter((o) => o.usuarioId === Number(usuarioId));
}

// Número visible de la orden
function generarNumeroOrden(id) {
    const hoy = new Date();
    const fecha = `${hoy.getFullYear()}${String(hoy.getMonth() + 1).padStart(2, '0')}${String(hoy.getDate()).padStart(2, '0')}`;
    return `${fecha}${String(id).padStart(3, '0')}`;
}

// Guarda una orden. Si se indica una orden existente que no está pagada (reintento de pago), la actualiza.
// datos: { usuarioId, cliente, entrega, direccion, items, estado: 'Pagada' | 'Pago fallido', motivoFallo }
export function guardarOrden(datos, ordenIdExistente = null) {
    const ordenes = obtenerOrdenes();
    const total = datos.items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
    const existente = ordenIdExistente ? ordenes.find((o) => o.id === Number(ordenIdExistente)) : null;

    if (existente && existente.estado !== 'Pagada') {
        const actualizada = { ...existente, ...datos, total };
        guardar(CLAVE_ORDENES, ordenes.map((o) => (o.id === existente.id ? actualizada : o)));
        return actualizada;
    }

    const id = siguienteId(ordenes);
    const nueva = {
        id,
        numero: generarNumeroOrden(id),
        fecha: new Date().toISOString(),
        usuarioId: null,
        motivoFallo: null,
        ...datos,
        total,
    };
    guardar(CLAVE_ORDENES, [...ordenes, nueva]);
    return nueva;
}

//CRUD DE USUARIOS

export function obtenerUsuarios() {
    return leer(CLAVE_USUARIOS, usuariosIniciales);
}

export function obtenerUsuarioPorId(id) {
    return obtenerUsuarios().find((u) => u.id === Number(id)) || null;
}

export function buscarUsuarioPorCorreo(correo) {
    const buscado = String(correo).trim().toLowerCase();
    return obtenerUsuarios().find((u) => u.correo.toLowerCase() === buscado) || null;
}

export function crearUsuario(datos) {
    if (buscarUsuarioPorCorreo(datos.correo)) {
        return { ok: false, error: 'Ya existe un usuario con ese correo.' };
    }
    const usuarios = obtenerUsuarios();
    const nuevo = { rol: 'Cliente', ...datos, id: siguienteId(usuarios) };
    guardar(CLAVE_USUARIOS, [...usuarios, nuevo]);
    return { ok: true, usuario: nuevo };
}

export function actualizarUsuario(id, cambios) {
    const lista = obtenerUsuarios().map((u) =>
        u.id === Number(id) ? { ...u, ...cambios, id: u.id } : u
    );
    guardar(CLAVE_USUARIOS, lista);
    return lista.find((u) => u.id === Number(id)) || null;
}

export function eliminarUsuario(id) {
    guardar(CLAVE_USUARIOS, obtenerUsuarios().filter((u) => u.id !== Number(id)));
}

// Valida credenciales
export function validarCredenciales(correo, password) {
    const usuario = buscarUsuarioPorCorreo(correo);
    return usuario && usuario.password === password ? usuario : null;
}

// Formato 
export const formatearPrecio = (valor) => '$' + Number(valor).toLocaleString('es-CL');
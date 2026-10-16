export const productosIniciales = [
    { id: 1,  nombre: 'Tarjeta de Video NVIDIA RTX 4060', precio: 320000, categoria: 'hardware',    img: 'rtx4060.webp',               stock: 8,  oferta: false },
    { id: 2,  nombre: 'Placa Madre B550 AM4',             precio: 95000,  categoria: 'hardware',    img: 'placaMadreB550.jfif',        stock: 12, oferta: false },
    { id: 3,  nombre: 'Fuente de Poder 650W 80+ Bronze',  precio: 55000,  categoria: 'hardware',    img: 'fuente650w.webp',            stock: 15, oferta: true  },
    { id: 4,  nombre: 'Gabinete ATX Cristal Templado',    precio: 45000,  categoria: 'hardware',    img: 'gabineteAtx.avif',           stock: 10, oferta: false },
    { id: 5,  nombre: 'Refrigeración Líquida 240mm',      precio: 75000,  categoria: 'hardware',    img: 'RefrigeracionLíquida.jfif',  stock: 4,  oferta: false },
    { id: 6,  nombre: 'Memoria RAM 16GB Crucial',         precio: 150000, categoria: 'hardware',    img: 'ram16gbCrucial.webp',        stock: 20, oferta: false },
    { id: 7,  nombre: 'Mouse Gamer',                      precio: 20000,  categoria: 'perifericos', img: 'mouseGamer.webp',            stock: 30, oferta: false },
    { id: 8,  nombre: 'Audífonos Gamer 7.1 Surround',     precio: 40000,  categoria: 'perifericos', img: 'Audífonosgamer.jfif',        stock: 18, oferta: true  },
    { id: 9,  nombre: 'Mousepad XL Extended (90x40cm)',   precio: 12990,  categoria: 'accesorios',  img: 'MousepadXL.webp',            stock: 25, oferta: false },
    { id: 10, nombre: 'Procesador AMD Ryzen 5',           precio: 120000, categoria: 'hardware',    img: 'ryzen5.jpg',                 stock: 9,  oferta: true  },
    { id: 11, nombre: 'Unidad SSD 1TB NVMe M.2',          precio: 100000, categoria: 'hardware',    img: 'ssdnvme1TB.jpg',             stock: 3,  oferta: true  },
    { id: 12, nombre: 'Webcam Streaming 1080p 60fps',     precio: 35000,  categoria: 'perifericos', img: 'Webcam.jfif',                stock: 11, oferta: false },
];

export const blogsIniciales = [
    {
        id: 1,
        titulo: 'CASO CURIOSO #1: ¿Por qué las memorias RAM y componentes de PC vienen en color verde o negro?',
        resumen: 'Aunque hoy estamos acostumbrados al RGB y diseños agresivos, el clásico verde se debió a costos de fabricación industriales...'
    },
    {
        id: 2,
        titulo: 'CASO CURIOSO #2: El origen del botón de encendido y el icónico símbolo de I/O',
        resumen: 'Proviene de la Segunda Guerra Mundial, usando código binario (1 encendido, 0 apagado) en interruptores militares...'
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
const CLAVE_VERSION = 'auraDbVersion';
const VERSION_DB = '2'; 

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

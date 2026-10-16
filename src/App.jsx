import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Componentes y Páginas del Cliente
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Carrito } from './pages/Carrito';
import { Contacto } from './pages/Contacto';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Nosotros } from './pages/Nosotros';
import { Blogs } from './pages/Blogs';

// Páginas del Administrador
import { AdminHome } from './pages/AdminHome';
import { AdminProductos } from './pages/AdminProductos';
import { AdminNuevoProducto } from './pages/AdminNuevoProducto';
import { AdminUsuarios } from './pages/AdminUsuarios';
import { AdminNuevoUsuario } from './pages/AdminNuevoUsuario';
import { AdminEditarProducto } from './pages/AdminEditarProducto';
import { AdminEditarUsuario } from './pages/AdminEditarUsuario';

//molde cliente (con Header y Footer)
const ClientLayout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100 bg-dark text-white">
    <Header />
    <main className="flex-grow-1">
      {children}
    </main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/*CLIENTE*/}
        <Route path="/" element={<ClientLayout><Home /></ClientLayout>} />
        <Route path="/productos" element={<ClientLayout><Productos /></ClientLayout>} />
        <Route path="/carrito" element={<ClientLayout><Carrito /></ClientLayout>} />
        <Route path="/contacto" element={<ClientLayout><Contacto /></ClientLayout>} />
        <Route path="/login" element={<ClientLayout><Login /></ClientLayout>} />
        <Route path="/registro" element={<ClientLayout><Registro /></ClientLayout>} />
        <Route path="/nosotros" element={<ClientLayout><Nosotros /></ClientLayout>} />
        <Route path="/blogs" element={<ClientLayout><Blogs /></ClientLayout>} />

        {/*ADMINISTRADOR */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/productos" element={<AdminProductos />} />
        <Route path="/admin/producto/nuevo" element={<AdminNuevoProducto />} />
        <Route path="/admin/usuarios" element={<AdminUsuarios />} />
        <Route path="/admin/usuario/nuevo" element={<AdminNuevoUsuario />} />
        <Route path="/admin/producto/editar/:id" element={<AdminEditarProducto />} />
        <Route path="/admin/usuario/editar/:id" element={<AdminEditarUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Páginas simples provisionales
const Home = () => <div className="container my-5"><h2>Bienvenido a Aura Shop</h2></div>;
const Productos = () => <div className="container my-5"><h2>Catálogo de Productos</h2></div>;

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
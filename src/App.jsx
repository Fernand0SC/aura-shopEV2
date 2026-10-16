import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Productos } from './pages/Productos';
import { Carrito } from './pages/Carrito';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-dark text-white">
        <Header />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
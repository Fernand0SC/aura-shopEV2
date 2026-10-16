// src/pages/Blogs.jsx
import { blogsIniciales } from '../data/db';

export const Blogs = () => {
    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <h2 className="text-center mb-4">NOTICIAS IMPORTANTES</h2>
            {blogsIniciales.map(blog => (
                <article key={blog.id} className="card bg-dark text-white border-secondary p-4 mb-4 shadow">
                    <h3 className="h5 text-info">{blog.titulo}</h3>
                    <p className="text-light">{blog.resumen}</p> {/* <-- Cambiado a text-light */}
                    <button className="btn btn-outline-info btn-sm align-self-start">VER CASO &rarr;</button>
                </article>
            ))}
        </div>
    );
};
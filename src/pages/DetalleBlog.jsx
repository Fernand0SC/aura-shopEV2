import { Link, useParams } from 'react-router-dom';
import { blogsIniciales } from '../data/db';

export const DetalleBlog = () => {
    const { id } = useParams();
    const blog = blogsIniciales.find((b) => b.id === Number(id));

    if (!blog) {
        return (
            <div className="container my-5 text-center">
                <h2>Caso no encontrado</h2>
                <Link to="/blogs" className="btn btn-outline-info mt-3">Volver a Blogs</Link>
            </div>
        );
    }

    return (
        <div className="container my-5" style={{ maxWidth: '800px' }}>
            <Link to="/blogs" className="btn btn-sm btn-outline-light mb-4">&larr; Volver a Blogs</Link>
            <article className="card bg-dark text-white border-secondary p-4 shadow">
                <h2 className="h4 text-info mb-4">{blog.titulo}</h2>
                {blog.contenido.map((parrafo, i) => (
                    <p key={i} className="text-light">{parrafo}</p>
                ))}
            </article>
        </div>
    );
};
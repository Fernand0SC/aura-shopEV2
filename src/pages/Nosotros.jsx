export const Nosotros = () => {
    return (
        <div className="container my-5 text-center">
            <section className="mb-5">
                <h2>¿Quiénes Somos?</h2>
                <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
                    En Aura Shop somos apasionados por la tecnología y el hardware. Nuestro objetivo es brindar los mejores componentes de PC, asegurando calidad y rendimiento para que puedas armar el equipo de tus sueños.
                </p>
            </section>
            <section>
                <h2 className="mb-4">Nuestro Equipo de Desarrollo</h2>
                <div className="row justify-content-center g-4">
                    <div className="col-md-3"><div className="card bg-dark text-white border-secondary p-3"><h4>Fernando</h4><p className="text-info fw-bold">Desarrollador Frontend</p></div></div>
                    <div className="col-md-3"><div className="card bg-dark text-white border-secondary p-3"><h4>Manuel</h4><p className="text-info fw-bold">Desarrollador Backend</p></div></div>
                    <div className="col-md-3"><div className="card bg-dark text-white border-secondary p-3"><h4>Matias</h4><p className="text-info fw-bold">Bases de Datos</p></div></div>
                </div>
            </section>
        </div>
    );
};
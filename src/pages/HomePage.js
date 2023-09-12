import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="columnas">
                <div className="columna">
                    <img src="/images/cafeteria.jpg" alt="cafetería" />
                </div>
                <div className="columna">
                    <div className="columna1">
                        <h2> Bienvenidos</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusantium nemo eos provident
                            doloremque
                            molestiae incidunt, maiores ullam excepturi ex facere voluptatum quod pariatur eius odit, labore
                            iusto
                            sapiente! Magnam!
                        </p>
                    </div>

                    <div className="columna1">
                        <h2> Café de Especialidad</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa accusantium nemo eos provident
                            doloremque
                            molestiae incidunt, maiores ullam excepturi ex facere voluptatum quod pariatur eius odit, labore
                            iusto
                            sapiente! Magnam!
                        </p>
                    </div>
                    <div className="columna1">
                        <div className="columna2">
                            <section className="destacados">
                                <h2>Dirección</h2>
                                <div className="destacado">
                                    <span className="resaltado">Julio Argentino Roca 823</span>
                                    <span className="normal">Vicente Lopez, Buenos Aires</span>
                                    <span className="normal">Argentina</span>
                                </div>
                            </section>

                            <section className="destacados">
                                <h2>Horarios</h2>
                                <div className="destacado">
                                    <span className="resaltado">Lunea a Sábado 9:00 a 19:00</span>
                                    <span className="resaltado">Domingo 10:00 a 13:30</span>
                                </div>
                            </section>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}

export default HomePage;
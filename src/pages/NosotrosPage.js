import '../styles/components/pages/NosotrosPage.css';
import React from 'react';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="columnas_nosotros">
                <div className="columna_nosotros">
                    <img src="/images/baristas.jpg" alt="Baristas" />
                    <h2>Baristas</h2>
                    <p>Te orientamos a elegir tu café según diferentes métodos de preparado. </p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/cafe_latte.jpg" alt="latte" />
                        <h2>Local</h2>
                        <p>Contamos con mesas adentro y en la vereda para disfrutar donde quieras.</p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/cafe_para_llevar.jpg" alt="café para llevar" />
                    <h2>Para Llevar</h2>
                    <p>Llevate tu café para disfrutar de camino. Tenés un 10% de descuento si traes tu vaso. </p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/pasteleria.jpg" alt="pastelería de masa madre con opciones vegana" />
                    <h2>Vegan</h2>
                    <p>Tenemos pastelería de masa madre con varias opciones veganas. </p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/pet_friendly.jpg" alt="pet friendly" />
                    <h2>Pet Friendly</h2>
                    <p>Mascotas felices y con buenos modales son bienvenidas.</p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/cuartos_cafe.jpg" alt="cuartos de café" />
                    <h2>Home Barista</h2>
                    <p>Llevate a casa nuestros cuartos de café en grano o molidos en el momento. </p>
                </div>
                <div className="columna_nosotros">
                    <img src="/images/tostadores.jpg" alt="tostadores de café" />
                    <h2>Tostamos</h2>
                    <p>Elegimos los mejores granos de café de especialidad para tostar y ofrecerte. </p>
                </div>
            </div>
        </main>
    );
}

export default NosotrosPage;
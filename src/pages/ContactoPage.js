import '../styles/components/pages/ContactoPage.css';
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";



const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rápido</h2>
                <form action="" method="" className="formulario">
                    <p>
                        <label form="nombre">Nombre</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="" />
                    </p>
                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="" />
                    </p>
                    <p className="p_multilinea">
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
            </div>
            <div>
                <div className="datos">
                    <h2>Otras vías de Contacto</h2>
                    <p>Contactanos por acá también</p>
                    <ul>
                        <li>
                            <a href="mailto:surch.vilo@hotmail.com">
                                <FontAwesomeIcon icon={faEnvelope} className="icono" size="xl" />
                            </a> Email: surch.vilo@hotmail.com
                        </li>
                        <li>
                            <a href="https://www.instagram.com/surch.vilo"
                                className="instagram social">
                                <FontAwesomeIcon icon={faInstagram} className="icono" size="xl" />
                            </a> Instagram: @surch.vilo
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;
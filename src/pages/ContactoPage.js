import React from 'react';

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
                        <li><i className="fa-regular fa-envelope fa-xl"></i> Email: surchcafe@hotmail.com</li>
                        <li><i className="fa-brands fa-instagram fa-xl"></i> Instagram: @surch.vilo</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default ContactoPage;
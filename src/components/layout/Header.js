import '../../styles/components/layout/Header.css';
import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img className="imgLogo" src="/images/logo_cafeteria.jpg" alt="Cafetería Surch" />
                <h1>Surch Café</h1>
            </div>
        </header>
    )
}

export default Header;
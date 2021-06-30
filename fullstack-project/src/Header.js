import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <ul className="menu">
                <li className="text-x-medium"><Link to="/Dashboard">Dashboard</Link></li>
                <li className="text-x-medium"><Link to="/Usuarios">Usuarios</Link></li>
            </ul>
        </header>

    );
}

export default Header;
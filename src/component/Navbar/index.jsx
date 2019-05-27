import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar is-link" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                    OMDbApp
                </Link>

                <a href="#!" role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
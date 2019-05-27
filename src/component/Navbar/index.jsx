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

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a href="#!" className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a href="#!" className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
import React from 'react';
import './Navbar.styles.css';

const Navbar = (props) => (
    <header className="Navbar">
        <nav className="Navbar-tool">
            <div></div>
            <div className="Navbar-tool-logo"><a href="/">Krishnam</a></div>
            <div className="Spacer" />
            <div className="Navbar-tool-items">
                <ul>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Skills</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar;
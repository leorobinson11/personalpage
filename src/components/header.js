import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#portfolio" className="nav-link"> Portfolio </a>
                    </li>

                    <li className="nav-item">
                        <a href="#socials" className="nav-link"> Socials </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
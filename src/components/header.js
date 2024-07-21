import React from 'react';
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header">
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item">
                        <a href="#home" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#services" className="nav-link">Services</a>
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
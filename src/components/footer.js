import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div id="footer-box">
                <div class="footer-content">
                    <div class="links">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/description">Service</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/blog">News</a></li>
                        </ul>
                        <ul>
                            <li><a href="email@gmail.com"> email@gmail.com </a></li>
                            <li><a href="tel:+number"> +number </a></li>
                            <li><a href="facebook.com"> Facebook</a></li>
                            <li><a href="instagram.com"> Instagram </a></li>
                        </ul>
                    </div>
                </div>
                <div id="copywritebox">
                    <span id="copywrite"> © 2023 All Rights Reserved by Leo Robinson </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
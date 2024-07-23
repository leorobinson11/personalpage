import React from 'react';
import '../styles/socials.css'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Social_link = ({ link, logo }) => {

    const handleClick = () => {
        window.open(link)
    };

    return (
        <div className="socials-item" onClick={handleClick}>
            <div class="logo-container">
                {logo}
            </div>
        </div>  
    );
};

const Socials = () => {
    return (
        <div class="socials-section">
            <p> Connect with me on LinkedIN or check out my Projects on Github! </p>
            <div class="socials-container">
                <Social_link 
                    link={"https://www.linkedin.com/in/leo-robinson-437a46283/"} 
                    logo={<FaLinkedin class="socials-logo" />} 
                />
                <Social_link 
                    link={"https://github.com/leorobinson11/"} 
                    logo={<FaGithub class="socials-logo" />} 
                />

                <Social_link 
                    link={"https://www.instagram.com/rleo228/?hl=en"}
                    logo={<FaInstagram class="socials-logo" />}
                />
            </div>
        </div>
    );
};

export default Socials;
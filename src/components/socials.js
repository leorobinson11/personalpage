import React from 'react';
import '../styles/socials.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Social_link = ({ link, logo }) => {

    const handleClick = () => {
        window.location.href = link
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
            <p> Connect with me on LinkedIN or check out my Project on github</p>
            <div class="socials-container">
                <Social_link 
                    link={"https://www.linkedin.com/in/leo-robinson-437a46283/"} 
                    logo={<FaLinkedin class="logo" />} 
                />
                <Social_link 
                    link={"https://github.com/leorobinson11/"} 
                    logo={<FaGithub class="logo" />} 
                />
            </div>
        </div>
    );
};

export default Socials;
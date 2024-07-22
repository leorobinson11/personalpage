import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/portfolio.css';
import DynoMol from '../images/dynomol.png'

const GithubLogo = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" class="githublink">
          <FaGithub class="githublogo"/>
        </a>
      );
};

const Project = ({ title, image, description, link }) => {
    return (
        <div className='prodject-container'>
            <div className="project">
                <img src={image} alt={title} className="project-image" />
            </div>
            <div class="prodject-data">
                <h2 className="project-title"> {title} </h2>
                <p className="project-description"> {description} </p>
                <GithubLogo url={link} />
            </div>
        </div>
    );
};

const Portfolio = () => {
    const projects = [
        { 
            title: 'DynoMol', 
            image: DynoMol, 
            description: 'A molecular dynamics programm writen from scratch. Simulates the movements the internal structures of simple hydrocarbons.',
            link: 'https://github.com/leorobinson11/DynaMol'
        },
        { 
            title: 'StealthNav', 
            image: "none", 
            description: 'A navigation tool that lets the user find the shortest route without being sighted by security cameras.',
            link: ''
        }
    ];

    return (
        <div className="portfolio">
            {projects.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default Portfolio;

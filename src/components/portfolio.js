import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/portfolio.css';
import projectdata from '../data/project_data.json'
import { FaGithub } from 'react-icons/fa';

const GithubLogo = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" class="githublink">
          <FaGithub class="logo"/>
        </a>
      );
};

const Project = ({ title, image, description, link, index }) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('projects/'+index);
    };

    return (
        <div className='prodject-container' onClick={handleClick}>
            <div className="project">
                <img src={require(`../images/${image}`)} alt={title} className="project-image" />
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
    return (
        <div className="portfolio">
            {projectdata.map((project, index) => (
                <Project
                    key={index}
                    title={project.title}
                    image={project.images[0]}
                    description={project.description}
                    link={project.link}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Portfolio;

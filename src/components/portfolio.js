import React from 'react';
import '../styles/portfolio.css';
import DynoMol from '../images/dynomol.png'

const Project = ({ title, image, description }) => {
    return (
        <div className='prodject-container'>
            <div className="project">
                <img src={image} alt={title} className="project-image" />
            </div>
            <div>
                <h2 className="project-title">{title}</h2>
                <p className="project-description">{description}</p>
            </div>
        </div>
    );
};

const Portfolio = () => {
    const projects = [
        { 
            title: 'DynoMol', 
            image: DynoMol, 
            description: 'Description for project 1'
        },
        { 
            title: 'Mapper', 
            image: "none", 
            description: 'Description for project 2'
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
                />
            ))}
        </div>
    );
};

export default Portfolio;

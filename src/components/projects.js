import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/projects.css';

import image from '../images/DynoMol.png'

import projectdata from '../data/project_data.json'

const Projects = () => {
  const { index } = useParams();

  // Here you would fetch the project details using the projectId
  // For this example, we'll just display the projectId
  return (
    <body class="project-body">
      <div class="project-container">
        <div class="image-container">
          
          <img src={require(`../images/${projectdata[index].images[0]}`)} alt="Project Image" class="project-image" />
        </div>
        <div class="text-container">
          <h1 class="title"> {projectdata[index].title} </h1>
          <p class="description"> {projectdata[index].description} </p>
          <a href="/" class="return-home">
            <span class="arrow">&larr;</span> <span> Return Home </span>
          </a>
        </div>
      </div>
    </body>
  );
};

export default Projects;
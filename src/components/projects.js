import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/projects.css';
import projectdata from '../data/project_data.json'
import { FaGithub } from 'react-icons/fa';

const GithubLogo = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" class="githublink">
          <FaGithub class="logo" style={{color:"white"}}/>
        </a>
      );
};

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
          <a href="/personalpage" class="return-home">
            <span class="arrow">&larr;</span> <span> Return Home </span>
          </a>
          <div class="logo-container">
            <GithubLogo url={projectdata[index].link} />
          </div>
        </div>
      </div>
    </body>
  );
};

export default Projects;
import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectdata from '../data/project_data.json'
import { FaGithub } from 'react-icons/fa';
import '../styles/projects.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const GithubLogo = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" class="githublink">
          <FaGithub class="logo" style={{color:"white"}}/>
        </a>
      );
};

/*
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
*/
/*
        <div class="image-container">
          <img src={require(`../images/${slide.image}`)} alt="Project Image" class="project-image" />
        </div>
        <div class="description">
          <p> {slide.description} </p>
        </div>
*/

const Slide = ({ slide, isActive }) => {
  return (
    <div className={`slide ${isActive ? 'active' : ''}`}>
      <img src={require(`../images/${slide.image}`)} alt="Project Image" class="project-image" />
      <div className="description">
        {slide.description}
      </div>
    </div>
  );
}

const Projects = () => {
  const { index } = useParams();
  const data = projectdata[index]
  const [activeSlide, setActiveSlide] = useState(0);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  const handleSlideChange = (nextSlide) => {
    setActiveSlide(nextSlide);
  };

  return (
    <div class="project-section">
      <h1 id="project-title"> {data.title} </h1>
      <div className="carousel-container">
        <Carousel 
          responsive={responsive}
          afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
        >
          {data.slides.map((slide, idx) => (
            <Slide key={idx} slide={slide} isActive={idx === activeSlide}/>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
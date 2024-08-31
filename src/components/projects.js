import { React, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectdata from '../data/project_data.json'
import { FaGithub, FaTheRedYeti } from 'react-icons/fa';
import '../styles/projects.css';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const GithubLogo = ({ url }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" class="githublink">
          <FaGithub class="git-logo" style={{color:"white"}}/>
        </a>
      );
};

const Slide = ({ slide, isActive }) => {
  return (
    <div class={`slide ${isActive ? 'active' : ''}`}>
      <div class="image-container">
        <img src={require(`../images/${slide.image}`)} alt="Project Image" class="slide-image" />
      </div>
      <div class="description">
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
            arrows={true} 
            swipeable={true}
            draggable={true}
            afterChange={(previousSlide, { currentSlide }) => handleSlideChange(currentSlide)}
          >
            {data.slides.map((slide, idx) => (
              <Slide key={idx} slide={slide} isActive={idx === activeSlide}/>
            ))}
          </Carousel>
        </div>
        <div class="link-bar">
          <GithubLogo url={data.link} />
        </div>
          
    </div>
  );
};

export default Projects;
import React, { useEffect, useRef } from 'react';
import Earth from '../images/earth.png'
import Saturn from '../images/saturn.png'
import Neptune from '../images/neptune.png'
import Jupiter from  '../images/jupiter.png'
import Mars from '../images/mars.png'
import Mercury from '../images/mercury.png'
import '../styles/solarsystem.css'


const Planet = ({angle, name}) => {
  const imageRef = useRef(null);

  useEffect(() => {    
    const image = imageRef.current;
    var radiusX;
    var radiusY;

    var centerX;
    var centerY;


    const speed = 0.01;

    const animate = () => {
      if (window.innerWidth < 700) {
        radiusX = 150;
        radiusY = 150;
        centerX = 130; 
        centerY = 125; 
      } else if (window.innerWidth < 1200) {
        radiusX = 280;
        radiusY = 160;
        centerX = 180; 
        centerY = 175; 
      } else {
        radiusX = 280;
        radiusY = 80;
        centerX = 180; 
        centerY = 175; 
      }

      angle += speed;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      image.style.left = `${x}px`;
      image.style.top = `${y}px`;

      requestAnimationFrame(animate);
    };

    animate();
  }, []);


  return (
    <img
      ref={imageRef}
      src={name}
      alt="Earth"
      class="Planet"
    />
  )
}


const Solarsystem = () => {
  return (
    <div class="solarsystem">
      <Planet angle={0} name={Mercury} />
      <Planet angle={1} name={Jupiter} />
      <Planet angle={2} name={Saturn} />
      <Planet angle={3.2} name={Neptune} />
      <Planet angle={4.1} name={Mars} />
      <Planet angle={5.1} name={Earth} />
    </div>
  );
};

export default Solarsystem;
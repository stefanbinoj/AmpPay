import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from "../images/pexels-created-stories-11481760.jpg";
import CarouselImg2 from "../images/pexels-olha-dobosh-4113930.jpg";
import CarouselImg3 from "../images/pexels-tatan-zuleta-17022636-3.jpg";
import './Carousel.css';

function IndividualIntervalsExample() {
  const [direction, setDirection] = useState('right');

  function CustomNextButton(props) {
    const handleClick = () => {
      setDirection('right');
    };

    return (
      <button className="carousel-custom-next" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
          <path className='custom-button-path' fill="white" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"/>
        </svg>
      </button>
    );
  }

  function CustomPrevButton(props) {
    const handleClick = () => {
      setDirection('left');
    };

    return (
      <button className="carousel-custom-prev" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24">
          <path className='custom-button-path' fill="white" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z" />
        </svg>
      </button>
    );
  }

  return (
    <Carousel nextIcon={<CustomNextButton />} prevIcon={<CustomPrevButton />}>
      <Carousel.Item className={direction === 'left' ? 'carousel-item1' : ' '} interval={3000}>
        <div className='carousel' style={{backgroundImage: `url(${CarouselImg1})`,}}>
          <img src={CarouselImg1} alt="First slide" />
          <Carousel.Caption>
            <h3>Transforming Energy Habits</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className={direction === 'left' ? 'carousel-item1' : ' '} interval={3000}>
        <div className='carousel' style={{backgroundImage: `url(${CarouselImg2})`}}>
          <img src={CarouselImg2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Transforming Energy Habits</h3>
            <p>Turn the tide on high energy bills and make informed decisions about your consumption with AmpPay.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item className={direction === 'left' ? 'carousel-item1' : ' '} interval={3000}>
        <div className='carousel' style={{backgroundImage: `url(${CarouselImg3})`}}>
          <img src={CarouselImg3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;

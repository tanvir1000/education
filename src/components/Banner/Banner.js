import React from 'react';
import img from '../../Logo/cover 1.jpg';
import img2 from '../../Logo/2.jpg';
import img3 from '../../Logo/cover2.jpg';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            	<Carousel className="caro">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Premium room</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
      
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Best Dentiest</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
		
            
        </div>
    );
};

export default Banner;
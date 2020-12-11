import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Stay1 from '../assets/tokyokitty/484150.jpg';

const StayCarousel = () => {
    return (
        <div className="stay-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ Stay1 }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Explore Cincinnati to it's fullest!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ Stay1 }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Enjoy Cincinnati to it's fullest!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ Stay1 }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Live it up in the finest lifestyle!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default StayCarousel
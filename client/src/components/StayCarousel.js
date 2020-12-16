import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Otr from '../assets/places/otr.jpg';
import Clifton from '../assets/places/clifton1.jpg';
import MtAdams from '../assets/places/mtadams.jpg';

const StayCarousel = () => {
    return (
        <div className="stay-carousel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ Otr }
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Over The Rhine</h3>
                <p>Explore Cincinnati to it's fullest!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ Clifton }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Clifton</h3>
                <p>Enjoy Cincinnati to it's fullest!</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={ MtAdams }
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Mt. Adams</h3>
                <p>Live it up in the finest lifestyle!</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    )
}

export default StayCarousel
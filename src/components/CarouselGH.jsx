import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function CarouselGH() {
  return (
    <>
    
    <Carousel fade className='w-100 pt-3 pb-3'>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhouse.jpg')}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhousering.jpg')}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhouserumble.jpg')}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>

  </>
  )
}

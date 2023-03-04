import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function CarouselGH() {
  return (
    <>
    <div className='d-flex justify-content-center'>
    <Carousel fade className='p-3 mt-3 mb-3 w-75 carousel'>
    <Carousel.Item interval={2400} >
      <img
        className="d-block  container-fluid carousel-image"
        src={require('../images/grindhouse.jpg')}
        alt="First slide"
      />
     </Carousel.Item>
    <Carousel.Item interval={2400}>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhousering.jpg')}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2400}>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhouserumble.jpg')}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
    </div>
  </>
  )
}

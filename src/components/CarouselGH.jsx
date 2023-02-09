import React from 'react'
import Carousel from 'react-bootstrap/Carousel';



export default function CarouselGH() {
  return (
    <>
    
    <Carousel fade className='p-3 mt-3 mb-3 w-75'>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhouse.jpg')}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhousering.jpg')}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 container-fluid carousel-image"
        src={require('../images/grindhouserumble.jpg')}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </>
  )
}

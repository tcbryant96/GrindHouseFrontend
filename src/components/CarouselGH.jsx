import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function CarouselGH() {
  return (
    <>
    <div className=''>
    <Carousel fade className='p-4'>
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
        src={require('../images/grindhouse.jpg')}
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
        src={require('../images/grindhouse.jpg')}
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
  </div>
  </>
  )
}

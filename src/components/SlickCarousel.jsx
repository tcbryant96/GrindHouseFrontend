import React from 'react'
import { useState } from 'react'
import Slider from "react-slick"
import GhLogo from "../images/grindhouse.jpg"
import GhRing from "../images/grindhousering.jpg"
import GhRumble from "../images/grindhouserumble.jpg"

const images = [GhLogo, GhRing, GhRumble]
export default function SlickCarousel() {
    const settings ={
        infinite: true,
        lazyload: true,
        speed: 300,
        slideToShow:3,
        centerMode: true,
        centerPadding: 0,

    }
  return (
    <>
<Slider className='slider-css'>
<div>
    <img src={require('../images/grindhousering.jpg')}></img>
</div>
<div>
<img src={require('../images/grindhousering.jpg')}></img>
</div>
<div>
<img src={require('../images/grindhousering.jpg')}></img>
</div>
</Slider>

</>
    )
}

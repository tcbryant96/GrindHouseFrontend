import React from 'react'
import AboutUs from "../components/AboutUs";
import CarouselGH from "../components/CarouselGH";
import IconNav from "../components/IconNav";
import NextShow from "../components/NextShow";
import Quotes from "../components/Quotes";


export default function Home() {
  return (
    <>
    <CarouselGH></CarouselGH>
    <IconNav></IconNav>
    <AboutUs></AboutUs>
    <Quotes></Quotes>
    <NextShow></NextShow>
    </>
  )
}

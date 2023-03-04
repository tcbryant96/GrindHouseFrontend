import React from 'react'
import AboutUs from "../components/AboutUs";
import CarouselGH from "../components/CarouselGH";
import IconNav from "../components/IconNav";
import NextShow from "../components/NextShow";
import Quotes from "../components/Quotes";
import Footer from './Footer';
import NavbarDefault from './NavbarDefault';


export default function Home() {
  return (
    <>
    <NavbarDefault/>
    <CarouselGH></CarouselGH>
    <IconNav></IconNav>
    <AboutUs></AboutUs>
    <Quotes></Quotes>
    <NextShow></NextShow>
    <Footer/>
    </>
  )
}

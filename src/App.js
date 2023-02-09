import { Animator, MoveIn, ScrollContainer, ScrollPage, Sticky } from "react-scroll-motion";
import "./App.css";
import AboutUs from "./components/AboutUs";
import CarouselGH from "./components/CarouselGH";
import IconNav from "./components/IconNav";
import NavbarDefault from "./components/NavbarDefault";
import SlickCarousel from "./components/SlickCarousel";

function App() {
  return (
    <>
    
        
          <NavbarDefault></NavbarDefault>
          <div className="d-flex justify-content-center">
            <CarouselGH></CarouselGH>
          </div>

          <IconNav></IconNav>
    
          
            <AboutUs></AboutUs>
      
      
    
    </>
  );
}

export default App;

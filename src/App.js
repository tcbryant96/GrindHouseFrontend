import "./App.css";
import AboutUs from "./components/AboutUs";
import CarouselGH from "./components/CarouselGH";
import Footer from "./components/Footer";
import IconNav from "./components/IconNav";
import NavbarDefault from "./components/NavbarDefault";
import NextShow from "./components/NextShow";
import Quotes from "./components/Quotes";

function App() {
  return (
    <>
      <NavbarDefault></NavbarDefault>
      <CarouselGH></CarouselGH>
      <IconNav></IconNav>
      <AboutUs></AboutUs>
      <Quotes></Quotes>
      <NextShow></NextShow>
      <Footer></Footer>
    </>
  );
}

export default App;

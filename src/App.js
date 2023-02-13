import { Route, Routes } from "react-router-dom";
import "./App.css";
import Academy from "./components/Academy";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavbarDefault from "./components/NavbarDefault";
import Reservations from "./components/Reservations";
import Shop from "./components/Shop";
import Shows from "./components/Shows";
import Superstars from "./components/Superstars";

function App() {
  return (
    <>
      <NavbarDefault></NavbarDefault>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/academy" element={<Academy/>}></Route>
        <Route path="/shows" element={<Shows/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/superstars" element={<Superstars/>}></Route>
        <Route path="/reservations" element={<Reservations/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;

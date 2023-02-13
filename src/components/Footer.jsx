import React, {useState} from "react";
import * as FaIcons from "react-icons/fa"
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";



export default function Footer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <div className="row footer">
      <div className="col ms-3 mb-3">
        <div className="row d-flex justify-content-center">
          <h1 className="text-center">Location</h1>
          <img
            src={require("../images/grindhouse location.png")}
            className="location-image"
          ></img>
        </div>
        <div className="row">
          <Link className="text-center text-white" to="https://goo.gl/maps/5gQjKQtMvnspkMU66">
            Grindhouse Pro Wrestling Academy, 1416 Spring St, Jeffersonville, IN
            47130
          </Link>
        </div>
      </div>

      <div className="col-9 text-center">
        <div className="row">
          <div className="col text-center">
            <h1 className="ps-4">Services</h1>
            <ul className="service">
              <li className="service-list">
                <Link to="/academy" className="service-link">
                  Academy
                </Link>
              </li>
              <li className="service-list">
                <Link to="/shows" className="service-link">
                  Tickets & Videos
                </Link>
              </li>
              <li className="service-list">
                <Link to="superstars" className="service-link">
                  Superstars
                </Link>
              </li>
              <li className="service-list">
                <Link to="shop" className="service-link">
                  Shop
                </Link>
              </li>
              <li className="service-list">
                <Link to="reservations" className="service-link">
                  Reservations & Rentals
                </Link>
              </li>
              <li className="service-list">
                <button style={{background:"none"}}  href="/" onClick={handleShow} className="service-link">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <h1 className="text-center">Partners</h1>
            <div className="row d-flex justify-content-evenly mt-3">
                <div className="col">
                <img src={require("../images/Clarks & Riggs.jpg")} className="partners-image"/>
                <h5>Clarks & Riggs</h5>
                <Link to="https://www.clarkandriggs.com/" style={{color:"white"}}>www.clarkandriggs.com</Link>
                </div>
                <div className="col">
                <img src={require("../images/Jets pizza.jpg")} className="partners-image"/>
                <h5>Jets Pizza</h5>
                <Link to="https://www.jetspizza.com/" style={{color:"white"}}>www.jetspizza.com</Link>
                </div>
                <div className="col">
                <img src={require("../images/Walrus.jpg")} className="partners-image"/>
                <h5>LRS 102 - "The Walrus"</h5>
                <Link to="https://www.lrs102.com/" style={{color:"white"}}>www.lrs102.com</Link>
                </div>

            </div>
          </div>
        </div>
        <div className="row pt-2">
            <div className="col d-flex justify-content-evenly">
            <Link to="https://www.facebook.com/GrindhouseProWrestling/" className="media-link">

            <FaIcons.FaFacebook className="media-icons"></FaIcons.FaFacebook>
            </Link>
            <Link to="https://www.instagram.com/grindhouseprowrestling/?hl=en" className="media-link">
            <FaIcons.FaInstagram className="media-icons"></FaIcons.FaInstagram>
            </Link>
            <Link to="https://twitter.com/grindhouseX" className="media-link">
            <FaIcons.FaTwitter className="media-icons"></FaIcons.FaTwitter>
            </Link>
            <Link to="https://www.youtube.com/channel/UCKN7vmh6NeIJYMp0NABnfSA" className="media-link">
            <FaIcons.FaYoutube className="media-icons"></FaIcons.FaYoutube>
            </Link>
            </div>
            <div className="col">
                <p>
            © 2023 GrindHouse Pro Wrestling | All rights reserved
                </p>
                <p>
                    Web Design and Development by Trevor Bryant
                </p>
            </div>
        </div>
      </div>
    </div>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row d-flex align-items-center">
                <div className="col-8">

            <h1>(859)-588-1044</h1>
                </div>
                <div className="col">

            <button className="call-us-button"><a href="tel:859-588-1044" className="call-us-link">Call Us!</a></button>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <h3>Or Email:</h3>
            </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your email"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>How Can We Help?</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter text" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Send Email
          </Button>
        </Modal.Footer>
      </Modal>
    
    </>
  );
}

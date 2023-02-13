import React from "react";
import * as FaIcons from "react-icons/fa"



export default function Footer() {
  return (
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
          <a className="text-center text-white" href="#">
            Grindhouse Pro Wrestling Academy, 1416 Spring St, Jeffersonville, IN
            47130
          </a>
        </div>
      </div>

      <div className="col-9 text-center">
        <div className="row">
          <div className="col text-center">
            <h1 className="ps-4">Services</h1>
            <ul className="service">
              <li className="service-list">
                <a href="#" className="service-link">
                  Academy
                </a>
              </li>
              <li className="service-list">
                <a href="#" className="service-link">
                  Tickets & Videos
                </a>
              </li>
              <li className="service-list">
                <a href="#" className="service-link">
                  Superstars
                </a>
              </li>
              <li className="service-list">
                <a href="#" className="service-link">
                  Shop
                </a>
              </li>
              <li className="service-list">
                <a href="#" className="service-link">
                  Reservations & Rentals
                </a>
              </li>
              <li className="service-list">
                <a href="#" className="service-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-9">
            <h1 className="text-center">Partners</h1>
            <div className="row d-flex justify-content-evenly mt-3">
                <div className="col">
                <img src={require("../images/Clarks & Riggs.jpg")} className="partners-image"/>
                <h5>Clarks & Riggs</h5>
                <a href="www.clarkandriggs.com" style={{color:"white"}}>www.clarkandriggs.com</a>
                </div>
                <div className="col">
                <img src={require("../images/Jets pizza.jpg")} className="partners-image"/>
                <h5>Jets Pizza</h5>
                <a href="www.clarkandriggs.com" style={{color:"white"}}>www.jetspizza.com</a>
                </div>
                <div className="col">
                <img src={require("../images/Walrus.jpg")} className="partners-image"/>
                <h5>LRS 102 - "The Walrus"</h5>
                <a href="www.clarkandriggs.com" style={{color:"white"}}>www.lrs102.com</a>
                </div>

            </div>
          </div>
        </div>
        <div className="row pt-2">
            <div className="col d-flex justify-content-evenly">
            <a href="#" className="media-link">

            <FaIcons.FaFacebook className="media-icons"></FaIcons.FaFacebook>
            </a>
            <a href="#" className="media-link">
            <FaIcons.FaInstagram className="media-icons"></FaIcons.FaInstagram>
            </a>
            <a href="#" className="media-link">
            <FaIcons.FaTwitter className="media-icons"></FaIcons.FaTwitter>
            </a>
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
  );
}

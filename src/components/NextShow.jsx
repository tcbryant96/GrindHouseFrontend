import React from "react";
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useInView } from "react-intersection-observer";



export default function NextShow() {
    const { ref: showCard, inView: moveCardIn} = useInView()

  return (
    <>
      <div className="row next-show">
        <div className="col d-flex justify-content-center">
          <Card bg="dark" key="dark" text="white" className={`next-show-card ${moveCardIn ? 'animate-show-card' : 'hidden'}`} ref={showCard}>
            <Card.Body>
                <Row>
                <Col>
               <Card.Img variant="left"  className="container-fluid next-show-image" src={require("../images/grindhouse.jpg")}></Card.Img>
                </Col>
                <Col>
                <h1>Watch Us Live!</h1>
                <h3 className="mt-5">Next Show:</h3>
                <h5 className="mt-3" style={{color:"rgb(240, 16, 16)"}}>July 8th, 2022  5:30 P.M.</h5>
                <Button className="ticket-button" variant="outline-dark">
                    Get Tickets Here!
                </Button>
                </Col>
                </Row>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

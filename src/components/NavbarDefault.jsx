import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

export default function NavbarDefault() {
  return (
    <>
    <Navbar bg="dark" variant="dark" className='navbar navbar-expand-lg'>
       <Container>
         <Navbar.Brand href="#home" className='me-5'>
         <img
             src={require('../images/grindhouse.jpg')}
             width="30"
             height="30"
             className="d-inline-block align-top nav-image me-5"
             alt="React Bootstrap logo"
           />
           GrindHouse Pro Wrestling
         </Navbar.Brand>
         
         <Nav className='me-auto ms-5'>       
           <Nav.Link href="#home" className='me-2'>Home</Nav.Link>
           <Nav.Link href="#features" className='me-2'>Academy</Nav.Link>
           <Nav.Link href="#pricing" className='me-2'>Tickets & Videos</Nav.Link>
           <Nav.Link href="#stars" className='me-2'>Superstars</Nav.Link>
           <Nav.Link href="#shop" className='me-2'>Shop</Nav.Link>
           <Nav.Link href="#reservaions" className='me-2'>Reservations & Rentals</Nav.Link>        
         </Nav>
       </Container>
     </Navbar>
     </> 
  )
}

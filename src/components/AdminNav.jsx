import React from 'react'
import Nav from 'react-bootstrap/Nav';


export default function AdminNav() {
  return (
    <>
    <Nav className="flex-column admin-nav"  defaultActiveKey="/admin-shows">
    <Nav.Link className='admin-nav-link' href="/admin-shows" >Manage Shows</Nav.Link>
    <Nav.Link className='admin-nav-link'>Manage Wrestlers</Nav.Link>
    <Nav.Link className='admin-nav-link' href="/admin-merch">Manage Merchandise</Nav.Link>
    <Nav.Link className='admin-nav-link' >Manage Videos</Nav.Link>
    <Nav.Link className='admin-nav-link'>Manage Orders</Nav.Link>
    <Nav.Link className='admin-nav-link'>Website Traffic</Nav.Link>
  </Nav>
  </>
  )
}

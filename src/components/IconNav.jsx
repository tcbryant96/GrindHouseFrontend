import React from 'react'
import * as GiIcons from "react-icons/gi"
import * as IoIcons from "react-icons/io"
import * as FaIcons from "react-icons/fa"
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


export default function IconNav() {
    const navigate = useNavigate()

  return (
    <>
<div className='row mb-5'>
    <div className='col-sm-12 col-md-6 col-lg-3 d-flex icon-box'>
        <Button onClick={() => navigate('/academy')} className='d-flex justify-content-evenly icon-button' variant='outline-dark'>
        <IoIcons.IoIosSchool className='nav-icons'></IoIcons.IoIosSchool>
        <h3 className='p-4'>Academy</h3>
        </Button>
        <div className='vertical-line'></div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 d-flex icon-box'>
        <Button onClick={() => navigate('/reservations')} className='d-flex justify-content-evenly icon-button' variant='outline-dark'>
        <GiIcons.GiPartyPopper className='nav-icons'></GiIcons.GiPartyPopper>
        <h3 className='p-4'>Birthday Parties</h3>
        </Button>
        <div className='vertical-line'></div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 d-flex icon-box'>
        <Button onClick={() => navigate('/shows')} className='d-flex justify-content-evenly icon-button' variant='outline-dark'>
        <img src={require("../images/whitegrindhouselogo.jpg")} className="nav-icons white-logo"></img>
        <h3 className='p-4'>Our Shows</h3>
        </Button>
       <div className='vertical-line'></div>
    </div>
    <div className='col-sm-12 col-md-6 col-lg-3 d-flex icon-box'>
        <Button onClick={() => navigate('/reservations')} className='d-flex justify-content-evenly icon-button' variant='outline-dark'>
        <FaIcons.FaBuilding className='nav-icons'></FaIcons.FaBuilding>
        <h3 className='p-4'>Rentals</h3>
        </Button>
    
    </div>
</div>

    </>
  )
}

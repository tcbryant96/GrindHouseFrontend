import React from 'react'
import Card from 'react-bootstrap/Card';


export default function AboutUs() {
  return (
 <div className='row'>
    <div className='col ms-5'>
        <h1 className='text-center font-header'>About Us</h1>
        <p className=' font-body'>Aliquip in culpa sint eiusmod esse excepteur. Ea excepteur nostrud quis dolor pariatur officia laboris adipisicing ex eiusmod tempor. Velit voluptate mollit aliqua ipsum Lorem consequat labore est in. </p>
        <p className='font-body'>Mollit id excepteur duis adipisicing sit proident commodo nostrud laborum ipsum anim Lorem velit velit. Fugiat anim voluptate mollit veniam adipisicing mollit commodo dolore. Magna veniam cupidatat dolor enim. Dolor ut exercitation labore dolor sunt.</p>
    </div>
    <div className='col d-flex justify-content-center mt-3'>
            <img src={require("../images/grindhouserumble.jpg")} className="about-image"></img>
    </div>
    
 </div>
  )
}

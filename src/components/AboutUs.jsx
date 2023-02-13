import React from "react";
import { useInView } from "react-intersection-observer";

export default function AboutUs() {
    const { ref: aboutImage, inView: moveImageIn} = useInView()
   
  return (
    <>
            <div className="row mt-5 about-div">

              <div className={`col ms-5`}>
                <h1 className="text-center font-header">About Us</h1>
                <p className=" font-body">
                  Aliquip in culpa sint eiusmod esse excepteur. Ea excepteur
                  nostrud quis dolor pariatur officia laboris adipisicing ex
                  eiusmod tempor. Velit voluptate mollit aliqua ipsum Lorem
                  consequat labore est in.{" "}
                </p>
                <p className="font-body">
                  Mollit id excepteur duis adipisicing sit proident commodo
                  nostrud laborum ipsum anim Lorem velit velit. Fugiat anim
                  voluptate mollit veniam adipisicing mollit commodo dolore.
                  Magna veniam cupidatat dolor enim. Dolor ut exercitation
                  labore dolor sunt.
                </p>
              </div>
    
              <div className={`col d-flex justify-content-center align-items-center mt-3 ${moveImageIn ? "animate-image" : "hidden"}`} ref={aboutImage}>
                <img
                  src={require("../images/whitegrindhouselogo.jpg")}
                  className="about-image"
                ></img>
              </div>
            </div>

    
    </>
  );
}

import React from "react";
import Badge from 'react-bootstrap/Badge';
import { useInView } from "react-intersection-observer";

export default function Quotes() {
    const { ref: valueBadge, inView: moveBadgeIn} = useInView()
    const { ref: valueBadge2, inView: moveBadgeIn2} = useInView()
    const { ref: valueBadge3, inView: moveBadgeIn3} = useInView()
    const { ref: quote, inView: fadeQuoteIn} = useInView()
    const { ref: quote2, inView: fadeQuoteIn2} = useInView()
    const { ref: quote3, inView: fadeQuoteIn3} = useInView()



  return (
    <>
    <div className="row">
        <p className="join-text" href="#">Join Our Academy And<span className="join-span"> Improve </span> Your <span className="join-span"> Lifestyle</span></p>
    </div>
      <div className="row mb-5 d-flex justify-content-end align-items-center">
        <div className="col d-flex justify-content-center">
            <h1>
            <Badge pill bg="dark" className={`values ${moveBadgeIn ? 'animate-badge-left': "hidden" }`} ref={valueBadge}>Confidence</Badge>
            </h1>
        </div>
        <div className="col-6">
        <p className={`quote-text me-3 ${fadeQuoteIn ? 'animate-quote' : "hidden"}`} ref={quote}>
          “I woke up and realised life is great and people are awesome and life
          is worth living.”
          <br/>
          <span style={{ color: "black" }} className="d-flex justify-content-end me-5 mt-3">
           - Hulk Hogan
           </span>
        </p>

        </div>
      </div>
      <div className="row mb-5 d-flex align-items-center">
        <div className="col-6 ms-5">
        <p className={`quote-text me-3 ${fadeQuoteIn2 ? 'animate-quote' : "hidden"}`} ref={quote2}>
          “Wrestling teaches you nothing comes easy. Nothing in life comes easy,
          so you have to work at it.” 
          <br/>
          <span style={{ color: "black" }} className="d-flex justify-content-end me-5 mt-3">
          - Mike Sullivan
          </span>
        </p>
        </div>
        <div className="col d-flex justify-content-center">
            <h1>
        <Badge pill bg="dark" className={`values ${moveBadgeIn2 ? 'animate-badge-right': "hidden" }`} ref={valueBadge2}>Discipline</Badge>
        </h1>
        </div>
      </div>
      <div className="row mt-5 mb-5 d-flex justify-content-end align-items-center">
      <div className="col d-flex justify-content-center">
      <h1>
        <Badge pill bg="dark"  className={`values ${moveBadgeIn3 ? 'animate-badge-left': "hidden" }`} ref={valueBadge3}>Strength</Badge>
        </h1>
        </div>
        <div className="col-6">
          <p className={`quote-text me-3 ${fadeQuoteIn3 ? 'animate-quote' : "hidden"}`} ref={quote3}>
            “There is no honour in not fighting at all.”
            <br />
            <span style={{ color: "black" }} className="d-flex justify-content-end me-5 mt-3">
              -The Undertaker
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

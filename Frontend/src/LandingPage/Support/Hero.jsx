import React from "react";
import "./hero.css";

function Hero() {
  return (
    <section className="container-fluid mt-0 mb-5" id="supportHero">
      <div className="p-5  mt-5" id="supportWrapper">
        <h4 style={{fontWeight:"400"}}>Support portal</h4>
        <a style={{ color: "white" }} href="">
          Track Tickets
        </a>
      </div>
      <div className="row p-3" id="supportHeroBottom">
        <div className="col-6 p-5">
          <h3 className="fs-4" style={{fontWeight:"400"}}>
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input className="mb-3 mt-2" type="text" placeholder="Eg. How do i activate F&O" />
          <br />
          <a href="">Track your account opening</a>
          <a href="">Track your segmengt activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>

        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4" style={{fontWeight:"400"}}>Featured</h1>
          <ol style={{lineHeight:"2"}}>
            <li><a href="" >Current takeover and Delisting</a></li>
            <li><a href="">Latest intraday leverages - MIS & CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;

import React from "react";

function Team() {
  return (
    <div className="container mt-5 border-top">
      <div className="row  ">
        <h1 className="mt-5 text-center">People</h1>
        <div className="col-6 text-muted text-center mt-5 mb-5">
          <img
            src="media/images/teamp2.jpg"
            alt="#"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h2 className="fs-4 mt-3">Piyush sahu</h2>
          <h3 className="fs-6">Founder, CEO</h3>
        </div>
        <div className="col-6 text-muted  mt-5 mb-5" style={{lineHeight:"25px"}}>
          <p>
            piyush bootstrapped and founded StockNest in 2025 to overcome <br /> the
            hurdles he faced during his decade long stint as a trader. <br />Today,
            StockNest has changed the landscape of the Indian broking  <br /> industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory <br /> Committee
            (SMAC) and the  Market Data Advisory Committee <br /> (MDAC).
          </p> 
          <p>
            {" "}
            Playing basketball is his zen. <br /> <br /> Connect on <a  style={{textDecoration:"none"}} href="" >Homepage</a> / <a style={{textDecoration:"none"}}  href="" >TradingQnA </a>/
           <a style={{textDecoration:"none"}}   href="" > Twitter</a> {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

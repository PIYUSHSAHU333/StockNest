import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <img src="media/images/homeHero.png" alt="#" className="mb-5" />
          <h1 className="mb-4">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="signupBtn btn btn-primary mt-2 p-2 fs-5 mb-5">
            Signup now
          </button>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col-6 col-sm-6">
          <img
            src="media/images/education.svg"
            style={{ width: "70%" }}
            alt="#"
          />
        </div>
        <div className="col-6 col-sm-6">
          <h1 className="fs-2 mb-2">Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything <br />
            from the basics to advanced trading
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Varsity →
          </a>
          <p className="mt-5">
            Trading Q&A, the most active trading and investment <br /> market
            related queries{" "}
          </p>

          <a href="" style={{ textDecoration: "none" }}>
            Trading Q&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;

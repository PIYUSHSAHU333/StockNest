import React from "react";

function RightImage({ imageURL, heading, learnmore, description }) {
  return (
    <div className="container  mt-5">
      <div className="row mt-5">
        <div className="col-6  mt-5">
          <h1>{heading}</h1>
          <p className="text-muted" style={{ lineHeight: "2em" }}>
            {description}
          </p>
          <div className="mb-4">
            <a href={learnmore} style={{ textDecoration: "none" }}>
              Learn more →
            </a>
          </div>
        </div>
        <div className="col-6 mt-5  ">
          <img src={imageURL} alt="#" />
        </div>
      </div>
    </div>
  );
}

export default RightImage;

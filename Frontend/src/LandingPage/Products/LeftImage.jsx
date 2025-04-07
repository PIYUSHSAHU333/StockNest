import React from "react";

function LeftImage({
  imageURL,
  heading,
  description,
  tryDemo,
  learnmore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container  mb-5 mt-5">
      <div className="row">
        <div className="col-6 mt-5 ">
          <img src={imageURL} alt="#" />
        </div>
        <div className="col-6 mt-5 ">
          <h1>{heading}</h1>
          <p className="text-muted" style={{ lineHeight: "2em" }}>
            {description}
          </p>
          <div className="mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo →
            </a>{" "}
            <a
              href={learnmore}
              style={{ marginLeft: "30px", textDecoration: "none" }}
            >
              Learn more →
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "15px" }}>
              <img src="media\images\appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;

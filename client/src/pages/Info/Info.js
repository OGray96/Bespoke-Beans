import React from "react";
import "./Info.css";

import image1 from "../../images/info-page.jpg";
import image2 from "../../images/map-image.png";

export default function Info() {
  return (
    <div className="page-wrapper-top">
      <div className="image-wrapper-top">
        <img src={image1} alt="" />
        <div className="info-text">
          <p>Opening Hours | Mon - Fri: 8am - 3:30pm</p>
        </div>
      </div>

      <div className="image-wrapper-bottom">
        <div className="find-us">
          <p>
           We are located at 80 Collins Street, Melbourne
          </p>
          <img src={image2} alt="" />
        </div>
      </div>
    </div>
  );
}

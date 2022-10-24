import React from "react";
import "./Info.css";

import image1 from "../images/info-page-image.jpg";
import image2 from "../images/map-image.png";

export default function Info() {
  return (
    <div className="page-wrapper-top">
      <div className="image-wrapper-top">
        <img src={image1} alt="" />
      </div>

        <div className="image-wrapper-bottom">
          <img src={image2} alt="" />
        </div>
      </div>

  );
}

import React from "react";
import "./Info.css";

import mapImage from "../../images/map-image.png";

export default function Info() {
  return (
    <div className="info">
      <div className="info-header">
        <div className="info-header-content">
          <h1>Opening Hours</h1>
          <span>Monday - Friday</span>
          <span>8am - 3:30pm</span>
        </div>
      </div>
      <div className="info-location">
        <div className="info-location-content">
        <h1>Location</h1>
          <span>80 Collins Street</span>
          <span>Melbourne</span>

        </div>
        <div className="info-location-image-wrapper">
        <img src={mapImage} alt="" />
        </div>
        
      </div>
    </div>
    // <div className="page-wrapper-top">
    //   <div className="image-wrapper-top">
    //     <img src={image1} alt="" />
    //     <div className="info-text">
    //       <p>Opening Hours | Mon - Fri: 8am - 3:30pm</p>
    //     </div>
    //   </div>

    //   <div className="image-wrapper-bottom">
    //     <div className="find-us">
    //       <p>
    //        We are located at 80 Collins Street, Melbourne
    //       </p>
    //       <img src={image2} alt="" />
    //     </div>
    //   </div>
    // </div>
  );
}

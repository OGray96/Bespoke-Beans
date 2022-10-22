import React from "react";
import "./Homepage.css";
import frontpageimage1 from "../images/front-page-image.jpg";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="page-container">
      <div className="box">
        <div className="left">
          <div className="content-wrapper">
            <div className="page-title">
              <h1>Bespoke Beans</h1>
            </div>

            <div className="about-us">
              <div className="about-us-wwd">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nesciunt inventore repellat optio quia magnam repellendus
                  eligendi facere deserunt nisi neque?
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="image-wrapper">
              <motion.img
                src={frontpageimage1}
                alt=""
                animate={{ translateX: 0 }}
                initial={{ translateX: 200 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.15 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

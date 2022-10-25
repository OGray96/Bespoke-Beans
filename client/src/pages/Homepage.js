import React from "react";
import "./Homepage.css";
import frontpageimage1 from "../images/mockup-of-multiple-paper-cups-placed-circularly-on-a-surface-m29048-r-el2 (1)-PhotoRoom (1).png";

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
                  Bespoke Beans is a small coffee shop in the heart of
                  Melbourne, serving only the finest, most expensive coffees in
                  town. But don't let that fool you—we know our stuff! We're
                  obsessed with finding the perfect bean and putting it in your
                  cup. Our name was inspired by two different things: the first
                  is our love for fine clothing and accessories; the second is
                  our belief that good coffee should be treated like an art
                  form, not a commodity. Every cup we serve is hand-crafted to
                  ensure that it meets our standards of quality, which are high.
                  Oliver, one of our baristas, has been with Bespoke Beans since
                  we opened our doors in 2022. He's passionate about coffee and
                  is always willing to help new customers find their perfect
                  cup. He takes pride in his work and wants everyone who walks
                  through our doors to feel welcome and comfortable. Zoran is
                  another one of our baristas who has been serving up cups of
                  hot joe at Bespoke Beans since 2022. His favourite part about
                  working here? Learning about different blends from all over
                  the world!
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

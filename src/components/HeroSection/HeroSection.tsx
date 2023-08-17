import React from "react";

import { pizza, vector } from "../../assets";

import "./index.css";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="left">
        <div className="home-page-text">
          <h1>
            Discover the <span>Best</span> Food and Drinks
          </h1>
          <p>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button id="explore-now-btn">Explore Now!</button>
        </div>
      </div>
      <div className="right">
        <div>
          <img
            src={pizza}
            className="pizza-img"
            alt=""
            height="804"
            width="735px"
            style={{ position: "absolute", zIndex: -5 }}
          />
          <img
            src={vector}
            className="vector-img"
            alt=""
            height="839"
            width="752"
          />
          <div className="contact-container">
            <button id="get-in-touch-btn">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroSection);

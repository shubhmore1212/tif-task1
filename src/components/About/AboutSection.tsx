import React from "react";
import "./index.css";
import { about } from "../../assets";

const AboutSection = () => {
  return (
    <div className="about-container">
      <div className="content-container">
        <div className="image-container">
          <img className="about-image" src={about} alt="cuttlery-image" />
        </div>
        <div className="text-container">
          <div className="about-text">
            <div>
              <h1>About Us</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. t has
                survived not only five centuries.
              </p>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AboutSection);

import React from "react";

import "./index.css";

const Cards = ({ image, title }: { image: any; title: string }) => {
  return (
    <div className="card-container">
      <div className="image-box">
        <img src={image} alt="" />
      </div>
      <div className="content-box">
        <div className="text-box">
          <h3>{title}</h3>
          <p>
            PLorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </p>
        </div>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
};

export default React.memo(Cards);

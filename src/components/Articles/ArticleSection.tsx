import React from "react";

import "./index.css";
import Cards from "../../shared/Cards";
import { cardDetails } from "../../utils/constants";

const ArticleSection = () => {
  return (
    <div className="articles-container">
      <div className="heading-container">
        <h2>Latest Articles</h2>
      </div>
      <div className="cards-container">
        {cardDetails.map((card, index) => (
          <Cards key={index} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(ArticleSection);

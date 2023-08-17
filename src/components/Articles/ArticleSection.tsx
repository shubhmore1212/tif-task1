import React, { useState } from "react";

import Cards from "../../shared/Cards";
import Pagination from "../../shared/Pagination";

import { cardDetails } from "../../utils/constants";
import "./index.css";

const cardsPerPage = 3;

const ArticleSection = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const slicedCards = cardDetails.slice(firstCardIndex, lastCardIndex);

  return (
    <section className="latest-articles">
      <div className="articles-container">
        <div className="heading-container">
          <h2>Latest Articles</h2>
        </div>
        <div className="cards-container">
          {slicedCards.map((card, index) => (
            <Cards key={index} image={card.image} title={card.title} />
          ))}
        </div>
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </section>
  );
};

export default React.memo(ArticleSection);

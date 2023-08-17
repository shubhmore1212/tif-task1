import React from "react";
import { left, leftActive, right, rightActive } from "../assets";

import "./index.css";

const Pagination = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: Function;
}) => {
  return (
    <div className="pagination-container">
      <button
        className="button-left"
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(1)}
      >
        {currentPage !== 1 ? <img src={leftActive} /> : <img src={left} />}
      </button>
      <div className="pagination-text">{currentPage + "/2"}</div>
      <button
        className="button-right"
        disabled={currentPage === 2}
        onClick={() => setCurrentPage(2)}
      >
        {currentPage !== 2 ? <img src={rightActive} /> : <img src={right} />}
      </button>
    </div>
  );
};

export default React.memo(Pagination);

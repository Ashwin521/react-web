import React from "react";
import { useGlobalContext } from "./context";

const Pagination = () => {
  const { page, nbPages, nextPage, prevPage } = useGlobalContext();

  return (
    <div className="pagination">
      <button onClick={prevPage} disabled={nbPages <= 1}>
        Prev
      </button>
      <span>
        Page {page + 1} of {nbPages}
      </span>
      <button onClick={nextPage} disabled={nbPages <= 1}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

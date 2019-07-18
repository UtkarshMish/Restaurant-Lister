import React from "react";
import _ from "lodash";
const Pagination = props => {
  const { itemSize, pageSize, onPageChange, currentPage } = props;
  const pageCount = itemSize / pageSize;
  const pages = _.range(1, pageCount + 1);
  return (
    <div
      className="ui pagination menu"
      style={{ backgroundColor: "#000000", marginRight: "200px" }}
    >
      {pages.map(page => {
        const mystyle =
          page === currentPage
            ? { backgroundColor: "White", color: "#ff0000" }
            : { color: "#ff0000" };
        return (
          <a
            key={page}
            className={page === currentPage ? "active item" : "item"}
            onClick={() => onPageChange(page)}
            style={mystyle}
          >
            {page}
          </a>
        );
      })}
    </div>
  );
};

export default Pagination;

import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
const Pagination = props => {
  const { itemSize, pageSize, onPageChange } = props;
  let { currentPage } = props;
  currentPage = parseInt(currentPage);
  const pageCount = Math.ceil(itemSize / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <div
      className="ui pagination menu"
      style={{
        backgroundColor: "#000000",
        marginRight: "5em",
        paddingLeft: "0em",
        paddingRight: "0em"
      }}
    >
      {pages.map(page => {
        const mystyle =
          page === currentPage
            ? { backgroundColor: "White", color: "#ff0000" }
            : { color: "#ff0000" };
        return (
          <Link
            to={`/${page}`}
            key={page}
            className={page === currentPage ? "active item" : "item"}
            onClick={() => onPageChange(page)}
            style={mystyle}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;

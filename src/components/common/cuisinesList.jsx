import React from "react";
import { Link } from "react-router-dom";
const CuisinesList = props => {
  const { items, onItemSelect, selectedItem } = props;

  return (
    <div className="ui column">
      <div
        className="ui segment pusher"
        style={{
          backgroundColor: "#099"
        }}
      >
        <h5 style={{ color: "black" }}>Categories</h5>
      </div>
      <div
        className="ui segments"
        style={{ overflow: "auto", height: "650px" }}
      >
        {items.map(item => (
          <div
            className="segment item ui"
            style={{ margin: "0em", padding: "0em", background: "inherit" }}
          >
            <Link
              to="/"
              className={
                item === selectedItem
                  ? "ui icon button red item"
                  : "ui icon button light"
              }
              style={{
                color: "Black",
                cursor: "pointer",
                width: "auto",
                display: "grid",
                borderRadius: "0",
                lineHeight: "2em"
              }}
              onClick={() => onItemSelect(item)}
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CuisinesList;

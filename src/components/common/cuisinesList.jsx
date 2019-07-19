import React from "react";
const CuisinesList = props => {
  const { items, onItemSelect, selectedItem } = props;

  return (
    <div className="column">
      <div className="ui segments">
        <div className="ui segment" style={{ backgroundColor: "#099" }}>
          <h5 style={{ color: "black" }}>Categories</h5>
        </div>
        {items.map(item => (
          <div
            className="ui segment"
            key={item}
            style={{
              backgroundColor: item === selectedItem ? "red" : "#e6f2ff"
            }}
          >
            <p
              className={item === selectedItem ? "ui active red" : "ui "}
              style={{
                color: "Black",
                cursor: "pointer"
              }}
              onClick={() => onItemSelect(item)}
            >
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CuisinesList;

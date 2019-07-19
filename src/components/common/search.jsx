import React from "react";
const Searchbar = props => {
  return (
    <React.Fragment>
      <div className="ui fluid category search">
        <div className="ui icon input">
          <input
            className="prompt"
            type="text"
            placeholder="Search Restaurants..."
          />
          <i className="search icon" />
        </div>
        <div className="results" />
      </div>
      <a className="item" style={{ color: "#099" }}>
        Search Restaurant
      </a>
    </React.Fragment>
  );
};

export default Searchbar;

import React from "react";
const Overview = ({ restaurantData }) => {
  return (
    <div className="container ui grid">
      <div className="ui row wide four column">
        <div className="column">
          <p className="ui" style={{ color: "black" }}>
            Has Table Booking -- {restaurantData["Has Table booking"]}
          </p>
        </div>
        <div className="column">
          <p className="ui" style={{ color: "black" }}>
            Has Online delivery -- {restaurantData["Has Online delivery"]}
          </p>
        </div>
        <div className="column">
          <p className="ui" style={{ color: "black" }}>
            Average Cost for two -- {restaurantData["Average Cost for two"]} Rs
          </p>
        </div>
        <div className="column">
          <p className="ui" style={{ color: "black" }}>
            Votes -- {restaurantData["Votes"]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Overview;

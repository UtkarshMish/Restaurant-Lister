import React from "react";
const Overview = ({ restaurantData }) => {
  return (
    <div className="container">
      <p className="ui" style={{ color: "black" }}>
        Has Table Booking -- {restaurantData["Has Table booking"]}
      </p>
      <p className="ui" style={{ color: "black" }}>
        Has Online delivery -- {restaurantData["Has Online delivery"]}
      </p>
      <p className="ui" style={{ color: "black" }}>
        Average Cost for two -- {restaurantData["Average Cost for two"]} Rs
      </p>
      <p className="ui" style={{ color: "black" }}>
        Votes -- {restaurantData["Votes"]}
      </p>
    </div>
  );
};

export default Overview;

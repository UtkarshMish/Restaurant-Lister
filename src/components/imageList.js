import React from "react";
import ImgCrd from "./imageCard";

const ImagLst = ({ restaurants }) => (
  <div className="ui four cards">{renderImageCard(restaurants)} </div>
);

const renderImageCard = restaurants => {
  return restaurants.map(restaurant => (
    <ImgCrd restaurant={restaurant} key={restaurant._id} />
  ));
};

export default ImagLst;

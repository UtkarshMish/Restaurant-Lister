import React from "react";
const Rating = ({ ratingColor, ratingText, aggregate }) => {
  aggregate = Math.round(aggregate);
  ratingColor = ratingColor.toLowerCase().replace(/\s/g, "");
  return (
    <div className="ui star rating">
      {renderRating(aggregate, ratingColor)}
      <p className="div dark">{ratingText}</p>
    </div>
  );
};
const renderRating = (aggregate, ratingColor) => {
  let maxRating = 5;
  let cols = [];
  for (let i = 0; i < aggregate; i++) {
    cols.push(
      <div key={i} className="icon rating" style={{ color: ratingColor }} />
    );
  }
  for (let i = aggregate; i < maxRating; i++) {
    cols.push(<div key={i} className="icon rating" />);
  }
  return cols;
};

export default Rating;

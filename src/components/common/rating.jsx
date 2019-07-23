import React from "react";
const Rating = ({ ratingColor, ratingText, aggregate }) => {
  const roundedAggregate = Math.round(aggregate);
  ratingColor = ratingColor.toLowerCase().replace(/\s/g, "");
  return (
    <React.Fragment>
      <div className="ui grid">
        <div className="row ui centered">
          <p>{aggregate} stars</p>
          <div className="ui star rating" id="aggregate">
            {renderRating(roundedAggregate, ratingColor)}
          </div>
          <p>{ratingText}</p>
        </div>
      </div>
    </React.Fragment>
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

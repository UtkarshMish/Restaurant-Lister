import React from "react";
import Rating from "./common/rating";
const Reviews = ({ restaurantData }) => {
  if (restaurantData["Aggregate rating"])
    return (
      <div className="container" id="restDetails">
        <Rating
          ratingColor={restaurantData["Rating color"]}
          ratingText={restaurantData["Rating text"]}
          aggregate={restaurantData["Aggregate rating"]}
        />
      </div>
    );
  return null;
};
export default Reviews;

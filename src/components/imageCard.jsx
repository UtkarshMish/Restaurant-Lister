import React from "react";
import { Link } from "react-router-dom";
import Rating from "./common/rating";

const ImgCrd = ({ restaurantsLocation, restaurants }) => (
  <div
    className="  card "
    style={{ backgroundColor: "#43476B", color: "white" }}
  >
    <img
      src="https://i.pinimg.com/originals/8b/24/25/8b24255f002fb3bc59eb45c6760357f8.jpg"
      className="ui small image white"
      alt="Restaurant Logo"
    />
    <div className="header">
      <Rating
        ratingColor={restaurants["Rating color"]}
        ratingText={restaurants["Rating text"]}
        aggregate={restaurants["Aggregate rating"]}
      />
    </div>
    <div className="content ui">
      <h4>Name : {restaurants["Restaurant Name"]}</h4>
      <p>
        <strong>Cuisine : {restaurants["Cuisines"]}</strong>
      </p>

      <div className="meta" id="meta">
        <p>City : {restaurantsLocation.City} </p>
      </div>
      <div className="description " id="meta">
        <p>Address : {restaurantsLocation.Address}</p>
      </div>
      <Link
        className="ui icon  button  red "
        to={`/restaurantdesc/${restaurants["Restaurant ID"]}`}
        id="meta"
      >
        Order Online from {restaurants["Restaurant Name"]}!
      </Link>
    </div>
  </div>
);

export default ImgCrd;

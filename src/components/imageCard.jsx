import React from "react";
import restaurantdesc from "./restaurantdesc";
import { Link } from "react-router-dom";

const ImgCrd = ({ restaurantsLocation, restaurants }) => (
  <div
    className="ui card "
    style={{ backgroundColor: "#43476B", color: "white" }}
  >
    <img
      src="https://i.pinimg.com/originals/8b/24/25/8b24255f002fb3bc59eb45c6760357f8.jpg"
      className="ui small image white"
      alt="Restaurant Logo"
    />
    <div className="header">
      <p> Ratings : {restaurants["Aggregate rating"]} stars</p>
    </div>
    <div className="content ui">
      <h4>Name : {restaurants["Restaurant Name"]}</h4>
      <p>
        <strong>Cuisine : {restaurants["Cuisines"]}</strong>
      </p>

      <div className="meta" style={{ color: "white" }}>
        <p>City : {restaurantsLocation.City} </p>
      </div>
      <div className="description " style={{ color: "white" }}>
        <p>Address : {restaurantsLocation.Address}</p>
      </div>
      <button className="ui icon  button  red ">
        <Link
          to={{ pathname: "/restaurantdesc", state: { restaurants } }}
          component={restaurantdesc}
          style={{ color: "white" }}
        >
          Order Online from this Restaurant!
        </Link>
      </button>
    </div>
  </div>
);

export default ImgCrd;

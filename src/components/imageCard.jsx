import React from "react";

const ImgCrd = ({ restaurant }) => (
  <div>
    <div className="ui card">
      <div className="content">
        Hello {restaurant.City}
        <div className="header" />
        {restaurant.Locality}
        <div className="meta" />
        <div className="description">{restaurant.Address}</div>
      </div>
    </div>
  </div>
);

export default ImgCrd;

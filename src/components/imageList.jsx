import React from "react";
import ImgCrd from "./imageCard";

const ImagLst = ({ restaurantsLocation, restaurants }) => (
  <div className="three row ui grid ">
    {renderImageCard(restaurantsLocation, restaurants)}
  </div>
);

const renderImageCard = (restaurantsLocation, restaurants) => {
  return restaurantsLocation.map(restaurant => {
    return restaurants.map(restNames => {
      if (restNames["Restaurant ID"] === restaurant["Restaurant ID"])
        return (
          <React.Fragment key={restaurant._id}>
            <div className="ui columns  cards" style={{ display: "contents" }}>
              <ImgCrd
                restaurantsLocation={restaurant}
                restaurants={restNames}
              />
            </div>
          </React.Fragment>
        );
      return null;
    });
  });
};

export default ImagLst;

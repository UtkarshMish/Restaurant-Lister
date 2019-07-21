import React from "react";
import ImgCrd from "./imageCard";

const ImagLst = ({ restaurantsLocation, restaurants }) => (
  <div className="ui three column stackable grid padded ">
    {renderImageCard(restaurantsLocation, restaurants)}
  </div>
);

const renderImageCard = (restaurantsLocation, restaurants) => {
  return restaurantsLocation.map(restaurant => {
    return restaurants.map(restNames => {
      if (restNames["Restaurant ID"] === restaurant["Restaurant ID"])
        return (
          <React.Fragment key={restaurant._id}>
            <div className="ui columns cards">
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

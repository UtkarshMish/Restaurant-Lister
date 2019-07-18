import React from "react";
import ImgCrd from "./imageCard";

const ImagLst = ({ restaurantsLocation, restaurants }) => (
  <div className="ui four coloumn grid padded ">
    {renderImageCard(restaurantsLocation, restaurants)}
  </div>
);

const renderImageCard = (restaurantsLocation, restaurants) => {
  return restaurantsLocation.map(restaurant => {
    return restaurants.map(restNames => {
      if (restNames["Restaurant ID"] === restaurant["Restaurant ID"])
        return (
          <React.Fragment>
            <div className="ui cards">
              <ImgCrd
                restaurantsLocation={restaurant}
                key={restaurant._id}
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

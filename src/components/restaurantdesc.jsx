import React, { Component } from "react";
class restaurantdesc extends Component {
  state = {
    restaurantData: []
  };
  componentDidMount() {
    const { restaurants } = this.props.location.state;
    this.setState({ restaurantData: restaurants });
  }
  render() {
    const { restaurantData } = this.state;

    return (
      <React.Fragment>
        <main className="container">
          <div className="cards ui">
            <div className="card ui fluid">
              <div className="image">
                <img
                  className="ui image "
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZC3-C-vDl4eKe2nIhnujxtGlROdb-2BIqS3ae1Q6awGUfddOuw"
                  alt="Restaurant.jpg"
                />
              </div>
              <div className="container">
                <h2 className="header" style={{ color: "black" }}>
                  {restaurantData["Restaurant Name"]}
                </h2>
                <div className="meta">
                  <span className="date">{restaurantData["Cuisines"]}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ui four item stackable tabs menu">
            <a className="active item">Overview</a>
            <a className="item">Menu</a>
            <a className="item">Reviews</a>
            <a className="item">Photos</a>
          </div>
          <div className="ui bottom attached active tab segment">
            <div className="container">
              <p className="ui" style={{ color: "black" }}>
                Has Table Booking -- {restaurantData["Has Table booking"]}
              </p>
              <p className="ui" style={{ color: "black" }}>
                Has Online delivery -- {restaurantData["Has Online delivery"]}
              </p>
              <p className="ui" style={{ color: "black" }}>
                Average Cost for two -- {restaurantData["Average Cost for two"]}{" "}
                Rs
              </p>
              <p className="ui" style={{ color: "black" }}>
                Votes -- {restaurantData["Votes"]}
              </p>
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default restaurantdesc;

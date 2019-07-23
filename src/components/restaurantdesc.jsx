import React, { Component } from "react";
import { Redirect, Route, Link, Switch } from "react-router-dom";
import Overview from "./overview";
import Reviews from "./reviews";
import Photos from "./photos";
import { searchRestaurants } from "./restdata";
class restaurantdesc extends Component {
  state = {
    restaurantData: [],
    tabContent: "overview",
    isLoading: false
  };
  async componentDidMount() {
    const restid = this.props.match.params.id;
    const tab = this.props.match.params.tab || "overview";
    const restaurants = await searchRestaurants(restid);
    this.setState({
      restaurantData: restaurants,
      isLoading: true,
      tabContent: tab
    });
  }
  handleClick = data => {
    this.setState({ tabContent: data });
  };
  render() {
    const { restaurantData } = this.state;

    return (
      <React.Fragment>
        <main className="container ui">
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
            <Link
              to={`/restaurantdesc/${restaurantData["Restaurant ID"]}/overview`}
              className={
                this.state.tabContent === "overview" ? "active item" : "item"
              }
              onClick={() => this.handleClick("overview")}
            >
              Overview
            </Link>
            <Link
              to={`/restaurantdesc/${restaurantData["Restaurant ID"]}/review`}
              className={
                this.state.tabContent === "review" ? "active item" : "item"
              }
              onClick={() => this.handleClick("review")}
            >
              Reviews
            </Link>
            <Link
              to={`/restaurantdesc/${restaurantData["Restaurant ID"]}/photos`}
              className={
                this.state.tabContent === "photos" ? "active item" : "item"
              }
              onClick={() => this.handleClick("photos")}
            >
              Photos
            </Link>
          </div>

          <div className="ui bottom attached active tab segment">
            <Switch>
              <Route
                path="/restaurantdesc/:id/overview"
                exact
                className="item"
                render={props => (
                  <Overview restaurantData={restaurantData} {...props} />
                )}
              />
              <Route
                path="/restaurantdesc/:id/review"
                className="item"
                render={props => (
                  <Reviews restaurantData={restaurantData} {...props} />
                )}
              />
              <Route
                path="/restaurantdesc/:id/photos"
                className="item"
                component={Photos}
              />
              <Redirect
                from="/restaurantdesc/:id/"
                to={`/restaurantdesc/:id/${this.state.tabContent}`}
              />
            </Switch>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default restaurantdesc;

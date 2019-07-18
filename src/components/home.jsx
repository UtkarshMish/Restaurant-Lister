import React, { Component } from "react";
import ImagLst from "./imageList";
import axios from "axios";
import Pagination from "../components/common/pagination";
import { paginate } from "./utils/paginate";
class Home extends Component {
  state = {
    restaurants: [],
    restaurantsLocation: [],
    pageSize: 9,
    currentPage: 1,
    isLoading: true
  };
  handlePageChange = page => {
    document.documentElement.scrollTop = 0;
    let { currentPage } = this.state;
    currentPage = page;
    this.setState({ currentPage: currentPage });
  };
  getRestaurants = () => axios.get("/api/restaurants");
  getRestaurantsLocation = () => axios.get("/api/restaurantLocation");

  async componentDidMount() {
    const response = await this.getRestaurants();
    const responseloc = await this.getRestaurantsLocation();
    this.setState({
      restaurants: response.data,
      restaurantsLocation: responseloc.data,
      isLoading: false
    });
  }

  render() {
    const { restaurants, pageSize } = this.state;
    const { restaurantsLocation } = this.state;
    const restaurantData = paginate(
      restaurants,
      this.state.currentPage,
      pageSize
    );
    if (this.state.isLoading === true) {
      return (
        <div className="ui segment " style={{ background: "inherit" }}>
          <div
            className="ui active dimmer "
            style={{
              position: "sticky",
              height: "40em",
              top: "0",
              left: "0",
              bottom: "0",
              right: "0",
              background: "inherit"
            }}
          >
            <div className="ui indeterminate text loader ">Preparing Files</div>
          </div>
        </div>
      );
    }
    const restaurantLocationData = paginate(
      restaurantsLocation,
      this.state.currentPage,
      pageSize
    );
    return (
      <div>
        <ImagLst
          restaurants={restaurantData}
          restaurantsLocation={restaurantLocationData}
        />
        <p class="ui horizontal divider header" />

        <div className="ui centered grid ">
          <Pagination
            itemSize={restaurants.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Home;

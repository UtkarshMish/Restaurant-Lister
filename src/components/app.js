import React from "react";
import ImagLst from "./imageList";
import Footer from "./Footer";
const axios = require("axios");
// let restr = [];

class App extends React.Component {
  state = {
    restaurants: [],
    isLoading: true
  };

  getRestaurants = () => axios.get("/api/restaurantLocation");

  async componentDidMount() {
    const response = await this.getRestaurants();
    this.setState({ restaurants: response.data });
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div className="ui container">
        <ImagLst restaurants={restaurants} />
        <Footer />
      </div>
    );
  }
}

export default App;

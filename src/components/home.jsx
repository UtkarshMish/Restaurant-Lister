import React, { Component } from "react";
import ImagLst from "./imageList";
import { getRestaurants, getRestaurantsLocation } from "./restdata";
import Pagination from "../components/common/pagination";
import { paginate } from "./utils/paginate";
import CuisinesList from "./common/cuisinesList";
import _ from "lodash";
import Searchbar from "./common/search";
class Home extends Component {
  state = {
    restaurants: [],
    restaurantsLocation: [],
    sortRest: [],
    pageSize: 6,
    currentPage: 1,
    Cuisines: [],
    selectedItem: "",
    isLoading: true
  };
  handleSearch = query => {
    document.documentElement.scrollTop = 0;
    let { restaurants, sortRest } = this.state;
    sortRest = restaurants.filter(
      restr =>
        restr["Restaurant Name"].toLowerCase().search(query.toLowerCase()) >= 0
    );

    this.setState({ sortRest: sortRest, currentPage: 1 });
  };
  handlePageChange = page => {
    document.documentElement.scrollTop = 0;
    let { currentPage } = this.state;
    currentPage = page;
    this.setState({ currentPage: currentPage });
  };
  getCuisines = res => {
    return res.map(restData => {
      return restData["Cuisines"].split(", ");
    });
  };

  async componentDidMount() {
    const response = await getRestaurants();
    const responseloc = await getRestaurantsLocation();
    let { Cuisines, currentPage } = this.state;
    Cuisines = await this.getCuisines(response.data);
    Cuisines = Cuisines.flat(1);
    if (this.props.match.params.id) currentPage = this.props.match.params.id;
    Cuisines = _.uniq(Cuisines);
    Cuisines.splice(Cuisines.indexOf(""), 1);
    this.setState({
      restaurants: response.data,
      restaurantsLocation: responseloc.data,
      sortRest: response.data,
      Cuisines: Cuisines,
      isLoading: false,
      currentPage: currentPage
    });
  }
  handleItem = item => {
    document.documentElement.scrollTop = 0;
    let { restaurants, sortRest } = this.state;
    sortRest = restaurants.filter(restr => restr["Cuisines"].search(item) >= 0);

    this.setState({ selectedItem: item, sortRest: sortRest, currentPage: 1 });
  };

  render() {
    const { pageSize, sortRest } = this.state;
    const { restaurantsLocation } = this.state;
    const restaurantData = paginate(sortRest, this.state.currentPage, pageSize);
    if (this.state.isLoading === true) {
      return (
        <div className="ui segment" style={{ background: "inherit" }}>
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
    return (
      <React.Fragment>
        <div className="ui  grid">
          <div className="row " style={{ marginLeft: "3em" }}>
            <Searchbar onSearch={this.handleSearch} />
          </div>
          <div
            className="ui grid row "
            style={{
              marginLeft: "1em"
            }}
          >
            <div
              className="two row coloumn "
              style={{ marginBottom: "3em", paddingRight: "0em" }}
            >
              <div className="column two wide">
                <CuisinesList
                  items={this.state.Cuisines}
                  selectedItem={this.state.selectedItem}
                  onItemSelect={this.handleItem}
                />
              </div>
              <div className="column fourteen wide">
                <ImagLst
                  restaurants={restaurantData}
                  restaurantsLocation={restaurantsLocation}
                />
              </div>
            </div>
          </div>
        </div>
        <p className="ui horizontal divider header" />

        <div className="ui centered grid">
          <Pagination
            itemSize={this.state.sortRest.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={this.state.currentPage}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;

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
    Cuisines = _.sortBy(Cuisines);
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
        <div className="ui segment " id="load">
          <div className="ui active dimmer " id="dimmer">
            <div className="ui indeterminate text loader ">Preparing Files</div>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="ui  grid">
          <div className="row " id="search">
            <Searchbar onSearch={this.handleSearch} />
          </div>
          <div className="ui grid row" id="mrg">
            <div className="ui two column grid " id="list">
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

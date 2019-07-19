import React, { Component } from "react";
class Searchbar extends Component {
  state = {
    value: ""
  };
  handleChange = e => {
    this.setState({ value: e.target.value });
    this.props.onSearch(this.state.value);
  };
  render() {
    return (
      <React.Fragment>
        <div className="ui fluid category search">
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Search Restaurants..."
            />
            <i className="search icon" />
          </div>
          <div className="results" />
        </div>
      </React.Fragment>
    );
  }
}

export default Searchbar;

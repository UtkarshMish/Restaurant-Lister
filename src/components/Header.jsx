import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./common/search";

const Header = () => {
  return (
    <div className="ui inverted menu padded">
      <Link to="/" className=" item">
        Home
      </Link>

      <Link to="/" className="item right">
        Restaurant
      </Link>
      <Searchbar />
    </div>
  );
};
export default Header;

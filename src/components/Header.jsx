import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted menu padded">
      <Link to="/" className=" item">
        Home
      </Link>

      <Link to="/" className="item right">
        Restaurant
      </Link>
    </div>
  );
};
export default Header;

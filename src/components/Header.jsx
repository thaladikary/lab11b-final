import React from "react";
import FavoriteList from "./FavoriteList";

const Header = (props) => {
  return (
    <div className="m-2 mt-10">
      <FavoriteList favorites={props.favorites} />
    </div>
  );
};

export default Header;

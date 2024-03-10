import React from "react";
import SingleFavorite from "./SingleFavorite";

const FavoriteList = (props) => {
  return (
    <div>
      <h3 className="text-xl font-bold">Favorites</h3>
      <div className="flex flex-row">
        {props.favorites.map((favorite) => {
          return <SingleFavorite key={favorite.id} movie={favorite} />;
        })}
      </div>
    </div>
  );
};

export default FavoriteList;

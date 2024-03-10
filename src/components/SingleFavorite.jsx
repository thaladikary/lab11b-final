import React from "react";

const SingleFavorite = (props) => {
  console.log(props);
  return (
    <div className="m-1">
      <img
        className="object-cover object-center w-full h-24"
        src={`https://image.tmdb.org/t/p/w342/${props.movie.poster}`}
        alt={`${props.movie.title}`}
      />
    </div>
  );
};

export default SingleFavorite;

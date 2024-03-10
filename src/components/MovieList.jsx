import React from "react";
import SingleMovie from "./SingleMovie";

const MovieList = (props) => {
  return (
    <div className="flex flex-row flex-wrap">
      {props.movieList.map((movie) => {
        return (
          <SingleMovie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            tagline={movie.tagline}
            poster={movie.poster}
            addToFavorites={props.addToFavorites}
          />
        );
      })}
    </div>
  );
};

export default MovieList;

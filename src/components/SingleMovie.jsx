import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const SingleMovie = (props) => {
  const handleAddMovie = () => {
    //calling function in App component and passing it the current movie prop
    props.addToFavorites(props);
  };

  return (
    <li className="list-none m-2 w-52">
      <div className="bg-white overflow-hidden shadow-md border-0 rounded-md">
        <div className="">
          <img
            className="object-cover object-center w-full h-58"
            src={`https://image.tmdb.org/t/p/w342/${props.poster}`}
            alt={`${props.title}`}
          />
        </div>
        <div className="p-4">
          <h2 className="text-base font-semibold mb-2 text-center">
            {props.title}
          </h2>
          <p className="text-xs text-gray-500 text-center">{props.tagline}</p>
        </div>
        <div className="flex justify-center items-center p-2 border-2 rounded-md">
          <button onClick={handleAddMovie}>
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleMovie;

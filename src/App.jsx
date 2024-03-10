import { useEffect, useState } from "react";
import movieData from "../public/movie-data";
import Header from "./components/Header";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([movieData]);
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    } else {
      console.log("movie already in favs");
    }
  };

  return (
    <div className="mr-20 ml-20">
      <Header favorites={favorites} />
      <MovieList movieList={movies[0]} addToFavorites={addToFavorites} />
    </div>
  );
}

export default App;

import React from "react";
import MovieDetails from "./MovieDetails";
import "../styles.css";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-slide">
          <MovieDetails movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

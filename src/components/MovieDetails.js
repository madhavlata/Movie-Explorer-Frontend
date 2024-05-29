import React from "react";

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <p>
        <strong>Year:</strong> {movie.Year}
      </p>
      <p>
        <strong>Genre:</strong> {movie.Genre}
      </p>
      {movie.Plot ? (
        <p>
          <strong>Synopsis:</strong> {movie.Plot}
        </p>
      ) : (
        <p>
          <strong>Synopsis:</strong> No synopsis available
        </p>
      )}
    </div>
  );
};

export default MovieDetails;

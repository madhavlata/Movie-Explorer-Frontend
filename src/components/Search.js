import React, { useState } from "react";
import axios from "axios";
import MovieList from "./MovieList";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setError("");
    try {
      setMovies([]);
      const response = await axios.get(
        `https://movie-explorer-omdb.onrender.com`,
        {
          params: { query },
        }
      );
      setMovies(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setError(error.message);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default Search;

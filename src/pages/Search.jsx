// src/pages/Search.jsx
import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "YOUR_TMDB_API_KEY"; // 🔑 Replace with your TMDb API key
  const BASE_URL = "https://api.themoviedb.org/3/search/movie";

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(
        `${BASE_URL}?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center mb-8"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for movies..."
          className="w-full max-w-lg px-4 py-3 rounded-l-2xl bg-gray-800 text-gray-200 
                     placeholder-gray-500 border border-gray-700 focus:outline-none 
                     focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-r-2xl bg-purple-600 hover:bg-purple-700 
                     transition-colors font-semibold shadow-md"
        >
          Search
        </button>
      </form>

      {/* Loading State */}
      {loading && <p className="text-center text-gray-400">Loading...</p>}

      {/* Results */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
              releaseDate={movie.release_date}
              rating={movie.vote_average}
            />
          ))
        ) : (
          !loading && (
            <p className="col-span-full text-center text-gray-400">
              No movies found. Try searching for something else.
            </p>
          )
        )}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Search() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);

    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=batman&apikey=33f53f9a{
          import.meta.env.VITE_OMDB_API_KEY
        }&query=${encodeURIComponent(query)}`
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Search Movies</h1>

      <form onSubmit={searchMovies} className="flex mb-8">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-purple-600 px-6 rounded-r-lg hover:bg-purple-700 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-400">Loading...</p>}

      {!loading && movies.length === 0 && query && (
        <p className="text-gray-400">No results found.</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

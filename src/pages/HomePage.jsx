import React, { useEffect, useState } from "react";

const API_KEY = "33f53f9a"; // your OMDb API key

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      try {
        console.log("Fetching default movies...");
        const res = await fetch(
          `https://www.omdbapi.com/?s=batman&apikey=${API_KEY}`
        );
        const data = await res.json();
        console.log("Fetched data:", data);
        if (data.Search) {
          setMovies(data.Search);
        } else {
          console.warn("No Search results in data:", data);
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const keyword = e.target.search.value.trim();
    if (!keyword) return;

    setLoading(true);
    try {
      console.log("Searching for:", keyword);
      const res = await fetch(
        `https://www.omdbapi.com/?s=${keyword}&apikey=${API_KEY}`
      );
      const data = await res.json();
      console.log("Search data:", data);
      if (data.Search) {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error searching:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    console.log("Clearing search results");
    setSearchResults([]);
  };

  const displayMovies = searchResults.length > 0 ? searchResults : movies;

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">MovieVerse Haven</h1>

      <form onSubmit={handleSearch} className="flex gap-2 justify-center mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search movies..."
          className="px-4 py-2 rounded-lg text-black w-64"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded-lg">
          Search
        </button>
        {searchResults.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 bg-gray-500 rounded-lg"
          >
            Clear
          </button>
        )}
      </form>

      {loading ? (
        <p className="text-center">Loading movies...</p>
      ) : displayMovies.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {displayMovies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-900 rounded-lg p-2 text-center"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
                alt={movie.Title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <h2 className="text-sm font-semibold mt-2">{movie.Title}</h2>
              <p className="text-xs text-gray-400">{movie.Year}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No movies found</p>
      )}
    </div>
  );
}

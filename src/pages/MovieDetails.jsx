// src/pages/MovieDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams(); // get movie id from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "YOUR_TMDB_API_KEY"; // 🔑 Replace with your TMDb API key

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  }

  if (!movie) {
    return <p className="text-center text-red-400 mt-10">Movie not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
      <Link to="/" className="text-purple-400 hover:underline">&larr; Back</Link>
      
      <div className="max-w-5xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Poster */}
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image"
          }
          alt={movie.title}
          className="w-full rounded-2xl shadow-lg"
        />

        {/* Movie Info */}
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-400 mb-4 italic">{movie.tagline}</p>
          <p className="mb-4">{movie.overview}</p>

          <p className="text-gray-300">
            <span className="font-semibold">Release Date:</span> {movie.release_date}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Runtime:</span> {movie.runtime} mins
          </p>
          <p className="text-yellow-400 font-bold text-lg">
            ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
          </p>

          <div className="mt-4">
            <span className="font-semibold text-gray-200">Genres: </span>
            {movie.genres?.map((g) => (
              <span key={g.id} className="bg-purple-700 px-3 py-1 rounded-full text-sm mr-2">
                {g.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

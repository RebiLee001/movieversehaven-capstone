import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = "33f53f9a"; // your OMDb key

  useEffect(() => {
    async function fetchMovie() {
      try {
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setLoading(false);
      }
    }
    fetchMovie();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading movie details...</p>;
  if (!movie) return <p className="text-center mt-10">Movie not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{movie.Title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "/no-poster.png"}
          alt={movie.Title}
          className="w-64 rounded-lg shadow-md"
        />
        <div>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p className="mt-4"><strong>Plot:</strong> {movie.Plot}</p>

          {/* Back Button */}
          <Link to="/" className="inline-block mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

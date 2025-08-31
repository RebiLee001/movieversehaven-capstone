import React from "react";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden w-60">
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/no-poster.png" // fallback image in case TMDb has no poster
        }
        alt={movie.title}
        className="w-full h-80 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{movie.title}</h3>
        <p className="text-sm text-gray-400">
          {movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}
        </p>
      </div>
    </div>
  );
}
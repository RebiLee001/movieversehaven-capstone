import React from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const sampleMovies = [
    { title: "Inception", year: "2010", poster: "https://m.media-amazon.com/images/I/51nbVEuw1HL._AC_SY679_.jpg" },
    { title: "Interstellar", year: "2014", poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg" },
    { title: "The Dark Knight", year: "2008", poster: "https://m.media-amazon.com/images/I/71pVYf7wA6L._AC_SY679_.jpg" },
  ];

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6 text-red-500">Trending Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sampleMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} />
        ))}
      </div>
    </div>
  );
}
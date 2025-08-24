import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../components/MovieCard";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(stored);
  }, []);

  const handleRemoveClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const confirmRemove = () => {
    const updated = favorites.filter((m) => m.id !== selectedMovie.id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    setShowModal(false);
    setSelectedMovie(null);
  };

  const cancelRemove = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  if (favorites.length === 0) {
    return <p className="p-6">No favorite movies yet.</p>;
  }

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorites.map((movie) => (
        <div key={movie.id} className="relative group">
          <Link to={`/movie/${movie.id}`}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={
                movie.poster
                  ? `https://image.tmdb.org/t/p/w500${movie.poster}`
                  : "/placeholder.png"
              }
              rating={movie.rating}
            />
          </Link>

          {/* Remove button */}
          <button
            onClick={() => handleRemoveClick(movie)}
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 text-sm rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition"
          >
            ✕
          </button>
        </div>
      ))}

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 w-80"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-lg font-bold mb-3">Remove Favorite</h2>
              <p className="mb-4">
                Are you sure you want to remove{" "}
                <span className="font-semibold text-red-400">
                  {selectedMovie?.title}
                </span>{" "}
                from your favorites?
              </p>
              <div className="flex justify-end gap-3">
                <button
                  onClick={cancelRemove}
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmRemove}
                  className="px-4 py-2 bg-red-600 rounded-lg hover:bg-red-500 transition"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function MovieCard({ title, image, releaseDate, rating, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
        <img src={image} alt={title} className="w-full h-80 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-100 truncate">{title}</h3>
          <p className="text-gray-400 text-sm">Release: {releaseDate || "N/A"}</p>
          <p className="text-yellow-400 font-bold">⭐ {rating ? rating.toFixed(1) : "N/A"}</p>
        </div>
      </div>
    </Link>
  );
}
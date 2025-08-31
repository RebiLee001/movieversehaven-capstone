import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-blue-400 hover:text-blue-300 transition">
          🎬 MovieVerseHaven
        </Link>

        {/* Links */}
        <div className="space-x-6 text-lg">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>
          <Link to="/signup" className="hover:text-blue-400 transition">
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}

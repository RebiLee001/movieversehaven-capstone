import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-red-500">🎬 MovieVerseHaven</h1>
        <ul className="flex gap-6">
          <li><a href="/" className="hover:text-red-400">Home</a></li>
          <li><a href="/search" className="hover:text-red-400">Search</a></li>
          <li><a href="/login" className="hover:text-red-400">Login</a></li>
          <li><a href="/signup" className="hover:text-red-400">Signup</a></li>
        </ul>
      </div>
    </nav>
  );
}
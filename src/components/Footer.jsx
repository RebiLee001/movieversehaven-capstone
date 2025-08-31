import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} 🎬 MovieVerseHaven</p>
        <p className="text-sm text-gray-400">
          Crafted with ❤️ using React + Tailwind CSS
        </p>
      </div>
    </footer>
  );
}

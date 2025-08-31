import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-6">Sign Up</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

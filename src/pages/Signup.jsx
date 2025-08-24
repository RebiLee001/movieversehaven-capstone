import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({ show: false, message: "" });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Example simple signup validation
    if (email && password.length >= 6) {
      setModal({ show: true, message: "Account created successfully 🎬" });
      setTimeout(() => {
        setModal({ show: false, message: "" });
        navigate("/login"); // redirect after signup
      }, 2000);
    } else {
      setModal({ show: true, message: "Signup failed: Password too short ❌" });
      setTimeout(() => setModal({ show: false, message: "" }), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <form onSubmit={handleSignup} className="bg-gray-900 p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-semibold"
        >
          Sign Up
        </button>
      </form>

      {/* Modal */}
      <AnimatePresence>
        {modal.show && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="p-6 rounded-2xl shadow-xl w-72 text-center bg-indigo-700"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg font-semibold">{modal.message}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
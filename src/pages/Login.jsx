import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState({ show: false, message: "", success: false });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Example validation
    if (email === "test@example.com" && password === "123456") {
      setModal({ show: true, message: "Login successful! 🎉", success: true });
      setTimeout(() => {
        setModal({ show: false, message: "", success: false });
        navigate("/"); // redirect to homepage
      }, 2000);
    } else {
      setModal({ show: true, message: "Invalid credentials ❌", success: false });
      setTimeout(() => setModal({ show: false, message: "", success: false }), 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white">
      <form onSubmit={handleLogin} className="bg-gray-900 p-8 rounded-2xl shadow-xl w-80">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-semibold"
        >
          Login
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
              className={`p-6 rounded-2xl shadow-xl w-72 text-center ${
                modal.success ? "bg-green-700" : "bg-red-700"
              }`}
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
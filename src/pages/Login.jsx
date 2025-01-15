import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPopupVisible, setPopupVisible] = useState(false); // State to control popup visibility
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setPopupVisible(true); // Show popup after successful login
    } catch (err) {
      setError(err.message);
    }
  };

  // Automatically redirect after a successful login
  useEffect(() => {
    if (isPopupVisible) {
      const timer = setTimeout(() => {
        navigate("/dashboardPage"); // Navigate to dashboard after a short delay
      }, 2000); // Wait for 2 seconds to show the popup

      return () => clearTimeout(timer); // Cleanup the timeout when the component unmounts
    }
  }, [isPopupVisible, navigate]);

  return (
    <>
      <motion.div
        className="flex h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 h-full"></div>

        <div className="hidden items-center justify-center md:flex w-1/2 bg-cover bg-center bg-[url('https://images.pexels.com/photos/2834653/pexels-photo-2834653.jpeg?auto=compress&cs=tinysrgb&w=600')]">
          <div className="m-20">
            <h1 className="text-[50px] text-white">Otto-Sons</h1>
            <h2 className="text-[30px] text-gray-400">
              Where Quality Meets Needs..
            </h2>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-gray-900 z-50 flex items-center justify-center">
          <motion.div
            className="w-full max-w-md px-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
              >
                Login
              </button>
              <p className="mt-5 text-sm text-gray-400">
                Don't have an account?{" "}
                <span
                  onClick={() => navigate("/signup")}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  Signup here
                </span>
              </p>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Popup Modal */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-md p-6 w-96"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-center text-greebluen-600">
              Login Successful!
            </h3>
          </motion.div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Login;

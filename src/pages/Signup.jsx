import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer";
import { motion } from "framer-motion"; // Import framer-motion

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true); // Track password match
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordMatch(false); // Show error if passwords do not match
      return;
    }
    try {
      // Create user with Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get the new user info
      const newUser = {
        id: userCredential.user.uid, // Using UID as unique user identifier
        email: email,
        role: "user", // Default role for new users (can be changed later)
      };

      // Save user info to localStorage
      const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
      storedUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(storedUsers));

      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <motion.div
        className="flex h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 h-full"></div>

        {/* Left Side Background Image */}
        <div className="hidden items-center justify-center md:flex w-1/2 bg-cover bg-center bg-[url('https://images.pexels.com/photos/3399938/pexels-photo-3399938.jpeg?auto=compress&cs=tinysrgb&w=600')]">
          <div className="m-20">
            <h1 className="text-[50px] text-white">Otto-Sons</h1>
            <h2 className="text-[30px] text-gray-400">
              Where Quality Meets Needs..
            </h2>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-gray-900 z-50 flex items-center justify-center relative">
          <motion.div
            className="w-full max-w-md px-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Wave Background */}
            <div className="absolute inset-0 -z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute top-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <path
                  fill="#1e293b"
                  fillOpacity="1"
                  d="M0,160L60,154.7C120,149,240,139,360,144C480,149,600,171,720,165.3C840,160,960,128,1080,133.3C1200,139,1320,181,1380,202.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
                ></path>
              </svg>
              <div className="absolute top-10 right-10 w-32 h-32 bg-blue-600 rounded-full blur-2xl opacity-30"></div>
              <div className="absolute bottom-20 left-10 w-48 h-48 bg-pink-600 rounded-full blur-2xl opacity-30"></div>
            </div>

            {/* Form Content */}
            <h2 className="text-3xl font-bold text-white mb-6">Sign Up</h2>
            <form onSubmit={handleSignup} className="space-y-6">
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

              <div className="relative">
                <label
                  htmlFor="confirmPassword"
                  className={`block text-sm font-medium ${
                    !passwordMatch ? "text-red-500" : "text-gray-300"
                  }`}
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    if (e.target.value === password) {
                      setPasswordMatch(true);
                    } else {
                      setPasswordMatch(false);
                    }
                  }}
                  className={`w-full p-3 rounded-md ${
                    passwordMatch
                      ? "bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
                      : "bg-gray-800 text-white border-red-500 border-2 outline-none"
                  }`}
                  required
                />
                {/* Checkmark Icon Inside Input */}
                {passwordMatch && (
                  <i className="bx bx-check-circle absolute right-3 mt-2 top-1/2 transform -translate-y-1/2 text-green-500 text-xl"></i>
                )}
                {!passwordMatch && (
                  <p className="text-red-500 text-sm mt-3">
                    Passwords do not match!
                  </p>
                )}
              </div>

              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className=" w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500"
              >
                Sign Up
              </button>
            </form>
            <p className="mt-5 text-sm text-gray-400">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}

export default Signup;

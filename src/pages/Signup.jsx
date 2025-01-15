import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Footer from "../components/Footer";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
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
      <div className="flex h-screen">
        {/* Left Section with Image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 h-full "></div>

        <div className="hidden items-center justify-center md:flex w-1/2 bg-cover bg-center bg-[url('/src/assets/image1.jpg')]">
          <div className="m-20">
            <h1 className="text-[50px] text-white">Otto-Sons</h1>
            <h2 className="text-[30px] text-gray-400">
              Where Quality Meet Needs..
            </h2>
          </div>
        </div>

        {/* Right Section with Form */}
        <div className="w-full md:w-1/2 bg-gray-900 z-50 flex items-center justify-center">
          <div className="w-full max-w-md px-8">
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
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md"
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleCreateUser = (e) => {
    e.preventDefault();
    if (!newUserEmail || !newUserPassword) {
      setError("Please provide both email and password.");
      return;
    }

    const newUser = {
      id: new Date().getTime().toString(), // Generate a unique user ID
      email: newUserEmail,
      role: "user", // Default role is "user"
    };

    // Save new user to localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setUsers(storedUsers);
    setNewUserEmail("");
    setNewUserPassword("");
    setError("");
  };

  const handleUpdateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleDeleteUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 flex flex-col text-black p-6"
    >
      <h3 className="text-xl font-semibold text-black mb-4">Create User</h3>
      <form onSubmit={handleCreateUser} className="space-y-4">
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <label className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            value={newUserEmail}
            onChange={(e) => setNewUserEmail(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-300 text-black outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-black">
            Password
          </label>
          <input
            type="password"
            value={newUserPassword}
            onChange={(e) => setNewUserPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-gray-300 text-black outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
        >
          Create User
        </button>
      </form>

      <h3 className="text-xl font-semibold text-white mt-8 mb-4">
        Manage Users
      </h3>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <p className="text-lg font-semibold">{user.email}</p>
              <p className="text-gray-600">Role: {user.role}</p>
            </div>
            <div>
              <button
                onClick={() =>
                  handleUpdateUser({
                    ...user,
                    role: user.role === "user" ? "admin" : "user",
                  })
                }
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
              >
                Toggle Role
              </button>
              <button
                onClick={() => handleDeleteUser(user.id)}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ManageUsers;

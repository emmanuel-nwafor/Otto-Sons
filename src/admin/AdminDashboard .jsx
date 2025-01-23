import React, { useState } from "react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      {/* Header */}
      <header className="bg-gray-600 text-white py-4 shadow-md ">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
          >
            Logout
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i class="bx bx-menu-alt-right text-[25px] "></i>{" "}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={`lg:w-64 lg:h-[100vh] bg-gray-700 shadow-md p-4 transition-transform transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:static fixed top-0 left-0 z-10 h-full w-64 bg-gray-700 text-white shadow-md p-4`}
        >
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Manage Users
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Manage Vehicles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  View Bookings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 rounded hover:bg-blue-100 hover:text-black"
                >
                  Generate Reports
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Admin</h2>
          <p className="text-gray-600 mb-6">
            Use the navigation menu to manage users, vehicles, bookings, and
            reports.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Statistics */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Users</h3>
              <p className="text-3xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Total Vehicles</h3>
              <p className="text-3xl font-bold text-blue-600">45</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Bookings Today</h3>
              <p className="text-3xl font-bold text-blue-600">8</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Reports Generated</h3>
              <p className="text-3xl font-bold text-blue-600">15</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

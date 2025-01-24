import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function GenerateReport() {
  const [selectedReport, setSelectedReport] = useState("userActivity"); // Default to User Activity Report
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState(""); // To show any validation errors
  const navigate = useNavigate();

  // Handle report generation
  const handleGenerateReport = () => {
    // Check if dates are valid
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start Date cannot be later than End Date.");
      return;
    }

    // Clear error if dates are valid
    setError("");

    // Here, you would fetch the data or generate the report based on selected options
    alert(`Generating ${selectedReport} from ${startDate} to ${endDate}`);
    // Navigate to a specific page or show the report preview
    navigate("/view-report"); // Assuming you have a route for viewing the report
  };

  // Handle exporting the report
  const handleExportReport = () => {
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start Date cannot be later than End Date.");
      return;
    }

    // Clear error if dates are valid
    setError("");

    // Implement export logic (CSV/PDF) here
    alert(`Exporting ${selectedReport} from ${startDate} to ${endDate}...`);
    // Redirect or perform another action after export
    navigate("/download"); // Example export/download route
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Smooth fade-in and fade-out transition
      className="min-h-screen bg-gray-100 flex flex-col p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Generate Reports</h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-md mb-6">{error}</div>
      )}

      {/* Report Selection */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Select Report Type</h3>
        <select
          className="w-full p-3 bg-gray-800 text-white rounded-md"
          value={selectedReport}
          onChange={(e) => setSelectedReport(e.target.value)}
        >
          <option value="userActivity">User Activity Report</option>
          <option value="vehicleSales">Vehicle Sales Report</option>
          <option value="bookingSummary">Booking Summary Report</option>
          <option value="repairRequests">Repair Requests Report</option>
        </select>
      </div>

      {/* Date Range Picker */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Select Date Range</h3>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">
              Start Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-600">
              End Date
            </label>
            <input
              type="date"
              className="w-full p-3 bg-gray-800 text-white rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Generate and Export Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={handleGenerateReport}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          Generate Report
        </button>
        <button
          onClick={handleExportReport}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Export Report
        </button>
      </div>
    </motion.div>
  );
}

export default GenerateReport;

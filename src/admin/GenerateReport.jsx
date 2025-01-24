import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";

function GenerateReport() {
  const [selectedReport, setSelectedReport] = useState("userActivity");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");
  const [reportData, setReportData] = useState([]);
  const [reportCount, setReportCount] = useState(0); // Uncomment this line
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current report count from localStorage
    const storedCount = parseInt(localStorage.getItem("reportCount")) || 0;
    setReportCount(storedCount);
  }, []);

  const updateReportCount = () => {
    const newCount = reportCount + 1;
    setReportCount(newCount);
    localStorage.setItem("reportCount", newCount);
  };

  // Fetch activities from localStorage
  const fetchActivities = () => {
    const activities = JSON.parse(localStorage.getItem("userActivities")) || [];
    return activities;
  };

  // Dynamically determine the columns and data based on the selected report
  const getReportColumns = () => {
    switch (selectedReport) {
      case "userActivity":
        return [
          { label: "User ID", key: "userId" },
          { label: "Activity Type", key: "activityType" },
          { label: "Activity Date", key: "date" },
        ];
      case "purchase":
        return [
          { label: "User ID", key: "userId" },
          { label: "Vehicle Name", key: "vehicleName" },
          { label: "Purchase Date", key: "purchaseDate" },
          { label: "Price", key: "price" },
        ];
      case "booking":
        return [
          { label: "User ID", key: "userId" },
          { label: "Vehicle Name", key: "vehicleName" },
          { label: "Booking Date", key: "bookingDate" },
          { label: "Booking Status", key: "status" },
        ];
      case "repair":
        return [
          { label: "User ID", key: "userId" },
          { label: "Vehicle Name", key: "vehicleName" },
          { label: "Repair Request Date", key: "requestDate" },
          { label: "Repair Status", key: "status" },
        ];
      default:
        return [];
    }
  };

  // Filter activities based on selected report type and date range
  const filterReportData = () => {
    const activities = fetchActivities();

    // Filter by selected report type
    let filtered = activities.filter((activity) =>
      selectedReport === "userActivity"
        ? true
        : activity.type === selectedReport
    );

    // Filter by date range
    if (startDate && endDate) {
      filtered = filtered.filter((activity) => {
        const activityDate = new Date(activity.date);
        return (
          activityDate >= new Date(startDate) &&
          activityDate <= new Date(endDate)
        );
      });
    }

    return filtered;
  };

  // Handle report generation
  const handleGenerateReport = () => {
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start Date cannot be later than End Date.");
      return;
    }

    setError(""); // Clear error
    const data = filterReportData();
    setReportData(data);
    updateReportCount(); // Increment report count
    navigate("/view-report", {
      state: {
        reportData: data,
        startDate,
        endDate,
      },
    });
  };

  // Handle CSV export functionality
  const handleExportCSV = () => {
    if (new Date(startDate) > new Date(endDate)) {
      setError("Start Date cannot be later than End Date.");
      return;
    }

    setError(""); // Clear error
    const data = filterReportData();
    setReportData(data);
    updateReportCount(); // Increment report count
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 flex flex-col p-6"
    >
      <h2 className="text-2xl font-semibold mb-6">Generate Reports</h2>

      {error && (
        <div className="bg-red-500 text-white p-3 rounded-md mb-6">{error}</div>
      )}

      {/* Report Selection */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <h3 className="text-xl font-semibold mb-4">Select Report Type</h3>
        <select
          className="w-full p-3 bg-gray-300 text-black rounded-md"
          value={selectedReport}
          onChange={(e) => setSelectedReport(e.target.value)}
        >
          <option value="userActivity">All User Activity</option>
          <option value="purchase">Vehicle Purchases</option>
          <option value="booking">Booking Summary</option>
          <option value="repair">Repair Requests</option>
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
              className="w-full p-3 bg-gray-300 text-black rounded-md"
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
              className="w-full p-3 bg-gray-300 text-black rounded-md"
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
        <CSVLink
          data={reportData}
          headers={getReportColumns()}
          filename={`${selectedReport}_${startDate}_to_${endDate}.csv`}
          className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          onClick={handleExportCSV}
        >
          Export as CSV
        </CSVLink>
      </div>
    </motion.div>
  );
}

export default GenerateReport;

import React from "react";
import { CSVLink } from "react-csv";
import { useLocation } from "react-router-dom";

function Download() {
  const location = useLocation();
  const { reportType, startDate, endDate } = location.state || {};

  // Simulate report data for export
  const mockReportData = {
    userActivity: [
      { id: 1, activity: "Logged in" },
      { id: 2, activity: "Viewed Dashboard" },
    ],
    vehicleSales: [{ id: 1, vehicle: "Tesla Model S", sales: 15 }],
    bookingSummary: [{ id: 1, vehicle: "BMW X5", bookings: 8 }],
    repairRequests: [{ id: 1, vehicle: "Toyota Camry", repairs: 3 }],
  };

  const reportData = mockReportData[reportType] || [];
  const csvHeaders = Object.keys(reportData[0] || {}).map((key) => ({
    label: key.charAt(0).toUpperCase() + key.slice(1),
    key,
  }));

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Download Report</h1>
      <p>
        Report Type: {reportType} <br />
        Date Range: {startDate} to {endDate}
      </p>

      <div className="mt-4">
        {reportData.length > 0 ? (
          <CSVLink
            data={reportData}
            headers={csvHeaders}
            filename={`${reportType}-report.csv`}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Download CSV
          </CSVLink>
        ) : (
          <p>No data available for download.</p>
        )}
      </div>
    </div>
  );
}

export default Download;

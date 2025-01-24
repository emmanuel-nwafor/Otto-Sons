import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ViewReport() {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract report details from location.state
  const { reportData = [], startDate, endDate } = location.state || {};

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Generated Report</h1>

      {/* Display date range */}
      {startDate && endDate ? (
        <p className="mb-4">
          <strong>Date Range:</strong> {startDate} to {endDate}
        </p>
      ) : (
        <p className="mb-4 text-red-500">No date range selected.</p>
      )}

      {/* Report data table */}
      <div className="bg-white p-4 rounded shadow">
        {reportData.length > 0 ? (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                {Object.keys(reportData[0]).map((key, index) => (
                  <th key={index} className="border border-gray-300 p-2">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  {Object.values(item).map((value, idx) => (
                    <td key={idx} className="border border-gray-300 p-2">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">
            No data available for the selected report.
          </p>
        )}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Report Generation
      </button>
    </div>
  );
}

export default ViewReport;

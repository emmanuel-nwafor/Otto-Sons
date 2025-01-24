import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StatisticsChart = ({ bookings, users }) => {
  const [reportsGenerated, setReportsGenerated] = useState(0);

  // Fetch the report count from localStorage
  useEffect(() => {
    const reportCount = JSON.parse(localStorage.getItem("reportCount")) || 0;
    setReportsGenerated(reportCount);
  }, []);

  const chartData = {
    labels: ["Total Users", "Total Bookings", "Reports Generated"],
    datasets: [
      {
        label: "Statistics",
        data: [users.length, bookings.length, reportsGenerated],
        backgroundColor: ["#4CAF50", "#2196F3", "#FF9800"], // New color for reports
        borderColor: ["#388E3C", "#1976D2", "#F57C00"], // Border color for reports
        borderWidth: 1,
        barThickness: 40, // Adjust bar thickness for better sizing
        maxBarThickness: 50, // Maximum bar thickness for responsiveness
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false, // Allow the chart to scale dynamically
    plugins: {
      legend: {
        display: true,
        position: "top", // Position the legend above the chart
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.raw} items`, // Display number of items
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide gridlines on the x-axis for a cleaner look
        },
        ticks: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div
      className="bg-white p-4 rounded shadow w-full"
      style={{ height: "400px" }}
    >
      <h3 className="text-lg font-semibold mb-4">
        Booking, User, and Report Statistics
      </h3>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default StatisticsChart;

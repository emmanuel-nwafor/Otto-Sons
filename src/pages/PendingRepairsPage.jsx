import React from 'react'
import { Link } from "react-router-dom"


function PendingRepairsPage() {
  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Pending repairs</h1>
      <p className="text-lg">
        This page provides details about the pending repairs. 
        Add filters, sorting, or data visualization here.
      </p>
      <Link
        to="/dashboardPage"
        className="mt-6 inline-block bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Back to Dashboard
      </Link>
      </div>
   </>
  )
}

export default PendingRepairsPage

import React, { useEffect, useState } from "react";

const AdminPurchaseHistory = () => {
  const [history, setHistory] = useState([]);
  const [showModal, setShowModal] = useState(false); // State to manage the popup visibility

  useEffect(() => {
    // Retrieve purchase history from localStorage
    const storedHistory =
      JSON.parse(localStorage.getItem("purchaseHistory")) || [];
    setHistory(storedHistory);
  }, []);

  // Function to delete all purchase history
  const confirmDeleteHistory = () => {
    localStorage.removeItem("purchaseHistory"); // Remove from localStorage
    setHistory([]); // Clear the state
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <div className="purchase-history-page text-white p-6">
        <div className="p-3 mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-black">Purchase History</h1>
            {history.length > 0 && (
              <button
                onClick={() => setShowModal(true)} // Open the modal
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete History
              </button>
            )}
          </div>

          {history.length === 0 ? (
            <div className="max-md:flex-col flex items-center justify-center">
              <p className="text-black text-[180px]">No</p>
              <p className="text-black">
                Purchase <br className="max-md:hidden" /> history available
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {history.map((item, index) => {
                // Handle missing or invalid fields
                const vehicleName = item.vehicleName || "Unknown Vehicle";
                const vehicleImage = item.vehicleImage || "/placeholder.jpg";
                const vehiclePrice = item.vehiclePrice
                  ? `${item.vehiclePrice.toFixed(2)} €`
                  : "Price not available";
                const purchaseDate = item.date
                  ? new Date(item.date).toLocaleString()
                  : "Date not available";
                const buyerName = item.userDetails?.fullName || "Buyer Unknown";

                return (
                  <div
                    key={index}
                    className="bg-gray-50 text-black p-4 rounded-lg"
                  >
                    <img
                      src={vehicleImage}
                      alt={vehicleName}
                      className="w-full h-40 object-contain rounded-lg mb-4"
                    />
                    <h2 className="text-xl font-bold">{vehicleName}</h2>
                    <p className="text-lg text-green-500">{vehiclePrice}</p>
                    <p className="text-sm text-gray-400">
                      Date: {purchaseDate}
                    </p>
                    <p className="text-sm text-gray-400">Buyer: {buyerName}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Modal for confirming deletion */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-gray-800 text-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
                <p className="mb-6">
                  Are you sure you want to delete the entire purchase history?
                  This action cannot be undone.
                </p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowModal(false)} // Close the modal
                    className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmDeleteHistory} // Confirm deletion
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminPurchaseHistory;

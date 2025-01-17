import React, { useState } from "react";
import UpdateFinancial from "./UpdateFinancial"; // Import the UpdateFinancial component

const FinancialDocs = () => {
  const [currentIndex, setCurrentIndex] = useState(null); // Track which financial detail to update
  const [financialDetails, setFinancialDetails] = useState([
    {
      accountNumber: "000101001",
      accountName: "John Doe",
      bankName: "GTBank",
      accountType: "Savings Account",
    },
    {
      accountNumber: "000101002",
      accountName: "Doe John",
      bankName: "GTBank",
      accountType: "Savings Account",
    },
  ]);

  const handleUpdate = (updatedDetail) => {
    // Update the financialDetails array
    setFinancialDetails((prevDetails) =>
      prevDetails.map((detail, index) =>
        index === currentIndex ? updatedDetail : detail
      )
    );
    setCurrentIndex(null); // Return to the list view
  };

  return (
    <div className="flex-1 rounded-lg bg-[#E3EDF9]">
      {currentIndex === null ? (
        // Render Financial Details List
        <div className="w-[35vw] bg-white rounded-lg p-6 space-y-6 shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Financial Details
          </h2>
          <div className="space-y-4">
            {financialDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-[#F6F9FC] w-[33vw] p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div>
                  <p className="font-medium text-lg">
                    {detail.accountNumber} | {detail.accountName}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detail.bankName} | {detail.accountType}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentIndex(index)} // Set the current index to the clicked item
                  className="bg-[#28A745] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                >
                  Update
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <UpdateFinancial
          detail={financialDetails[currentIndex]} // Pass the selected detail
          onUpdate={handleUpdate} // Handle updating the detail
          onBack={() => setCurrentIndex(null)} // Handle back navigation
        />
      )}
    </div>
  );
};

export default FinancialDocs;

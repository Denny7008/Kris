import React, { useState } from "react";
import Navbar from "./Usernavbar";

const FinancialDocs = () => {
  

  const financialDetails = [
    {
      accountNumber: "000101001",
      accountName: "John Doe",
      bankName: "GTBank",
      accountType: "Savings Account",
    },
    {
      accountNumber: "000101001",
      accountName: "Doe John",
      bankName: "GTBank",
      accountType: "Savings Account",
    },
  ];

  return (
    <div className="flex-1 pl-8 rounded-lg bg-[#E3EDF9]">
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 space-y-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Financial Details
              </h2>
              <div className="space-y-4">
                {financialDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="bg-[#F6F9FC] p-4 rounded-lg shadow flex justify-between items-center"
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
                      type="submit"
                      className="bg-[#28A745] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                      Update
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
  );
};

export default FinancialDocs;

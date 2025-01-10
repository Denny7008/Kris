import React, { useState } from "react";
import Navbar from "./Usernavbar";

const FinancialDocs = () => {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of Kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("Financial Details");

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
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Update Profile
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-7xl rounded-lg flex">
          {/* Sidebar */}
          <div className="w-1/3 h-full border-r bg-gray-100 p-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left p-4 rounded-lg ${
                    item === activeTab
                      ? "bg-[#FFC107] text-black"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>

          {/* Main Content */}
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
        </div>
      </div>
    </div>
  );
};

export default FinancialDocs;
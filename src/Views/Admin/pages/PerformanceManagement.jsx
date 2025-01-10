import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const PerformanceManagement = () => {
  const menuItems = ["Target Setup", "Targets", "Appraisals", "Settings", "Reports"];
  const [activeTab, setActiveTab] = useState("Target Setup");

  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] h-screen rounded-lg">
          <div className="mb-3">
            <h1 className="text-xl font-semibold">Performance Management</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex space-x-4 mb-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`px-6 py-3 rounded-full text-sm font-medium ${
                  item === activeTab
                    ? "bg-[#FFC107] text-black"
                    : "bg-white hover:bg-gray-100 text-gray-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Banner Section */}
          <div className="bg-[#012D6F] text-white rounded-lg p-8 flex items-center">
            <div>
              <h2 className="text-3xl font-bold mb-2">Stay Updated on Employees KPI's</h2>
              <p className="text-lg">Track and manage performance effectively.</p>
            </div>
            <div className="ml-auto">
              <img
                src="https://via.placeholder.com/400x200" // Replace with the actual image URL
                alt="Performance Dashboard"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-6 p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{activeTab} Section</h2>
            <p className="text-gray-700">
              Content related to the "{activeTab}" section will be displayed here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;

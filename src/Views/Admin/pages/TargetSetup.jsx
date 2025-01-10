import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";;

const TargetSetup = () => {
  const menuItems = ["Target Setup", "Targets", "Appraisals", "Settings", "Reports"];
  const [activeTab, setActiveTab] = useState("Target Setup");

  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] rounded-lg">
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

          {/* Target Setup Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-6">Target Setup</h2>
            <form className="grid grid-cols-2 gap-6">
              {/* Title */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Enter title"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                />
              </div>

              {/* KPI Weight */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">KPI Weight</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                >
                  <option>Select KPI Weight</option>
                  <option>10%</option>
                  <option>20%</option>
                  <option>30%</option>
                </select>
              </div>

              {/* Description */}
              <div className="col-span-2">
                <label className="block text-gray-700 text-sm font-medium mb-2">Description</label>
                <textarea
                  placeholder="Enter description"
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                ></textarea>
              </div>

              {/* Employees */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Employees</label>
                <input
                  type="text"
                  placeholder="Enter employee names"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                />
              </div>

              {/* Start Date */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                />
              </div>

              {/* End Date */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">End Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg bg-[#F8FAFC] focus:outline-none"
                />
              </div>

              {/* Buttons */}
              <div className="col-span-2 flex space-x-4 mt-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="px-6 py-3 bg-[#FFC107] text-black rounded-lg hover:bg-yellow-500"
                >
                  Add More Targets
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetSetup;

import React, { useState } from "react";

const ManageTargets = () => {
  const menuItems = ["Target Setup", "Targets", "Appraisals", "Settings", "Reports"];
  const [activeTab, setActiveTab] = useState("Targets");
  const [actionDropdown, setActionDropdown] = useState(null);

  const targets = [
    {
      name: "Johnny Elton Camry",
      title: "Make 400 Billion Naira",
      kpiWeight: 5,
      startDate: "01-Jan-2021",
      endDate: "01-Jan-2022",
    },
    {
      name: "Johnny Elton Camry",
      title: "Develop KRACADA Campaign",
      kpiWeight: 4,
      startDate: "01-Jan-2021",
      endDate: "01-Jan-2022",
    },
  ];

  const handleActionClick = (index) => {
    setActionDropdown(index === actionDropdown ? null : index);
  };

  return (
          <div className="bg-white p-2">
            <h2 className="text-lg font-semibold mb-6">Manage Targets</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left text-sm font-medium text-gray-700">
                    <th className="p-4">Name(s)</th>
                    <th className="p-4">Title(s)</th>
                    <th className="p-4">KPI Weight</th>
                    <th className="p-4">Target Date</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {targets.map((target, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="p-4">{target.name}</td>
                      <td className="p-4">{target.title}</td>
                      <td className="p-4">{target.kpiWeight}</td>
                      <td className="p-4">
                        {target.startDate} / {target.endDate}
                      </td>
                      <td className="p-4">
                        <div className="relative">
                          <button
                            onClick={() => handleActionClick(index)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                          >
                            Actions
                            <svg
                              className="w-4 h-4 ml-2"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {actionDropdown === index && (
                            <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-md shadow-lg z-10">
                              <ul className="text-sm text-gray-700">
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => alert("Edit KPI Goals")}
                                >
                                  Edit KPI Goals
                                </li>
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => alert("Initiate KPI")}
                                >
                                  Initiate KPI
                                </li>
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer text-red-600"
                                  onClick={() => alert("Delete KPI")}
                                >
                                  Delete KPI
                                </li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
  );
};

export default ManageTargets;

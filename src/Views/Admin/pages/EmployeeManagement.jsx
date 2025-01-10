import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const EmployeeManagement = () => {
  const [actionDropdown, setActionDropdown] = useState(null);

  const employees = [
    {
      name: "John Steven Doe",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "Barry Jhay",
      dept: "IT",
      jobTitle: "Backend Engineer",
      startDate: "28/04/2022",
      category: "Remote",
      gender: "Male",
    },
    {
      name: "Tiwa Cavage",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
    {
      name: "James IDK",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "Vanessa Chidi",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
    {
      name: "Don Gorgon",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Male",
    },
    {
      name: "Sarah Wilson",
      dept: "Design",
      jobTitle: "UI UX Designer",
      startDate: "28/04/2022",
      category: "Full time",
      gender: "Female",
    },
  ];

  const handleActionClick = (index) => {
    setActionDropdown(index === actionDropdown ? null : index);
  };

  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] rounded-lg">
          <div className="mb-3">
            <h1 className="text-xl font-semibold">Employee Management</h1>
          </div>

          {/* Employee Table */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <button className="flex items-center px-4 py-2 bg-gray-200 rounded-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
                Filter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Export
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left text-sm font-medium text-gray-700">
                    <th className="p-4">Name(s)</th>
                    <th className="p-4">Dept</th>
                    <th className="p-4">Job Title</th>
                    <th className="p-4">Start Date</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Gender</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="p-4">{employee.name}</td>
                      <td className="p-4">{employee.dept}</td>
                      <td className="p-4">{employee.jobTitle}</td>
                      <td className="p-4">{employee.startDate}</td>
                      <td className="p-4">{employee.category}</td>
                      <td className="p-4">{employee.gender}</td>
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
                                  onClick={() => alert("View Profile")}
                                >
                                  View Profile
                                </li>
                                <li
                                  className="p-2 hover:bg-gray-100 cursor-pointer"
                                  onClick={() => alert("Edit Profile")}
                                >
                                  Edit Profile
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
        </div>
      </div>
    </div>
  );
};

export default EmployeeManagement;

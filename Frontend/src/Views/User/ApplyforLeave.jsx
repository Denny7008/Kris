import React from "react";
import AdminUpperNavbar from "../../Components/AdminUpperNavbar";
import Usernavbar from "./Usernavbar";

const LeaveDashboard = () => {
  const leaveData = [
    {
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "26/04/2022",
      type: "Sick",
      reason: "Personal",
    },
    {
      name: "John Steven Doe",
      duration: 7,
      startDate: "22/04/2022",
      endDate: "30/04/2022",
      type: "Exam",
      reason: "Examination",
    },
    {
      name: "John Steven Doe",
      duration: 120,
      startDate: "22/04/2022",
      endDate: "28/06/2022",
      type: "Maternity",
      reason: "Child Care",
    },
    {
      name: "John Steven Doe",
      duration: 5,
      startDate: "22/04/2022",
      endDate: "26/04/2022",
      type: "Sick",
      reason: "Personal",
    },
  ];

  return (
    <div className="bg-[#E3EDF9] py-4 ">
      <div className="p-4 ml-6 mr-6 bg-white text-2xl hover:text-blue-500">
        Dashboard/applyforleave
      </div>

      <div className="p-6 bg-white p-4 mt-8 ml-8 mr-8">
        <h1 className="text-2xl mt-4 font-semibold mb-6">Leave Application</h1>

        <div className=" grid grid-cols-4 gap-4 mb-8">
          {[
            { type: "Annual Leave", count: 60 },
            { type: "Sick Leave", count: 20 },
            { type: "Maternity Leave", count: 60 },
            { type: "Compassionate Leave", count: 30 },
          ].map((leave, index) => (
            <div
              key={index}
              className="bg-blue-600 shadow rounded-lg p-6 flex flex-col items-center"
            >
              <span className="text-4xl font-bold text-white">
                {leave.count}
              </span>
              <span className="text-lg font-medium text-black">
                {leave.type}
              </span>
              <button className="mt-4 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-blue-600">
                Apply
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white shadow rounded-lg p-6 h-[60vh]">
          <h2 className="text-xl font-semibold mb-4">Leave History</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="p-4">Name(s)</th>
                <th className="p-4">Duration(s)</th>
                <th className="p-4">Start Date</th>
                <th className="p-4">End Date</th>
                <th className="p-4">Type</th>
                <th className="p-4">Reason(s)</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.map((leave, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                >
                  <td className="p-4">{leave.name}</td>
                  <td className="p-4">{leave.duration}</td>
                  <td className="p-4">{leave.startDate}</td>
                  <td className="p-4">{leave.endDate}</td>
                  <td className="p-4">{leave.type}</td>
                  <td className="p-4">{leave.reason}</td>
                  <td className="p-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                      Actions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveDashboard;

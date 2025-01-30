// import React from "react";
// import AdminSideNavbar from "../../../Components/AdminSideNavbar";
// import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

// const Leaverecall = () => {
//   const applications = [
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "28/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "Barry Jhayson",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "30/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "Tiwa Cavage",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "28/06/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "28/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "Barry Jhayson",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "30/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "Tiwa Cavage",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "28/06/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "28/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "Tiwa Cavage",
//       duration: 7,
//       startDate: "22/04/2022",
//       endDate: "28/06/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//     {
//       name: "John Steven Doe",
//       duration: 5,
//       startDate: "22/04/2022",
//       endDate: "28/04/2022",
//       type: "Casual",
//       reason: "Personal",
//     },
//   ];
//   return (
//     <div className="flex bg-blue-900 w-[80vw] h-[550px]">

//           {/* Main Banner Section */}
//           <div className="p-8">
//             <h2 className="text-2xl font-bold mb-4">
//               Ongoing Leave Applications
//             </h2>

//             {/* Table container with horizontal scroll */}
//             <div className="overflow-y-scroll w-[75vw] h-[60vh]">
//               <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//                 <thead className="bg-blue-100">
//                   <tr>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Name(s)
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Duration(s)
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Start Date
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       End Date
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Type
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Reason(s)
//                     </th>
//                     <th className="py-3 px-4 text-left font-semibold text-gray-700">
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {applications.map((application, index) => (
//                     <tr
//                       key={index}
//                       className={`border-t ${
//                         index % 2 === 0 ? "bg-blue-50" : "bg-white"
//                       }`}
//                     >
//                       <td className="py-3 px-4  text-gray-700">{application.name}</td>
//                       <td className="py-3 px-4  text-gray-700">{application.duration}</td>
//                       <td className="py-3 px-4  text-gray-700">{application.startDate}</td>
//                       <td className="py-3 px-4  text-gray-700">{application.endDate}</td>
//                       <td className="py-3 px-4  text-gray-700">{application.type}</td>
//                       <td className="py-3 px-4  text-gray-700">{application.reason}</td>
//                       <td className="py-3 px-4  text-gray-700">
//                         <button className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600">
//                           Recall
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//   );
// };

// export default Leaverecall;



import React, { useState, useEffect } from "react";
import axios from "axios";

const Leaverecall = () => {
  const [approvedApplications, setApprovedApplications] = useState([]);

  useEffect(() => {
    const fetchApprovedApplications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/leave-applications/approved");
        const filteredApplications = response.data.filter(app => app.status === "Approved"); // Ensure only approved leaves
        setApprovedApplications(filteredApplications);
      } catch (error) {
        console.error("Error fetching approved leave applications:", error);
      }
    };

    fetchApprovedApplications();
  }, []);

  return (
    <div className="flex bg-blue-900 w-[80vw] h-[550px] rounded-lg shadow-xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Approved Leave Applications</h2>

        <div className="overflow-y-scroll w-[75vw] h-[60vh] bg-white rounded-lg p-4">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Name</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Duration</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Start Date</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">End Date</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Reason</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {approvedApplications.length > 0 ? (
                approvedApplications.map((application, index) => (
                  <tr key={application._id} className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}>
                    <td className="py-3 px-4 text-gray-700">{application.name}</td>
                    <td className="py-3 px-4 text-gray-700">{application.duration} Days</td>
                    <td className="py-3 px-4 text-gray-700">{application.startDate}</td>
                    <td className="py-3 px-4 text-gray-700">{application.endDate}</td>
                    <td className="py-3 px-4 text-gray-700">{application.type}</td>
                    <td className="py-3 px-4 text-gray-700">{application.reason}</td>
                    <td className="py-3 px-4">
                      <button className="bg-red-500 text-white py-1 px-4 rounded-lg hover:bg-red-600">
                        Recall
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-4">
                    No approved leave applications found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaverecall;


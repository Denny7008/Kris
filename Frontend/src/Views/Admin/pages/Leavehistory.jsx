
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const LeaveHistory = () => {
//   const [applications, setApplications] = useState([]);
//   const [dropdownIndex, setDropdownIndex] = useState(null);

//   useEffect(() => {
//     const fetchLeaveApplications = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/leave-applications"); // Correct endpoint
//         setApplications(response.data);
//       } catch (error) {
//         console.error("Error fetching leave applications:", error);
//       }
//     };

//     fetchLeaveApplications();
//   }, []);

//   const toggleDropdown = (index) => {
//     setDropdownIndex(dropdownIndex === index ? null : index);
//   };

//   return (
//     <div className="flex bg-blue-900 w-[80vw] h-[550px] rounded-lg shadow-xl">
//       <div className="p-8">
//         <h2 className="text-2xl font-bold mb-4">Leave History</h2>

//         <div className="overflow-y-scroll w-[75vw] h-[60vh]">
//           <table className="min-w-full bg-white shadow-md rounded-lg">
//             <thead className="bg-blue-100">
//               <tr>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Name</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Duration</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Start Date</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">End Date</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Reason</th>
//                 <th className="py-3 px-4 text-left font-semibold text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {applications.length > 0 ? (
//                 applications.map((application, index) => (
//                   <tr key={application._id} className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}>
//                     <td className="py-3 px-4 text-gray-700">{application.name}</td>
//                     <td className="py-3 px-4 text-gray-700">{application.duration}</td>
//                     <td className="py-3 px-4 text-gray-700">{application.startDate}</td>
//                     <td className="py-3 px-4 text-gray-700">{application.endDate}</td>
//                     <td className="py-3 px-4 text-gray-700">{application.type}</td>
//                     <td className="py-3 px-4 text-gray-700">{application.reason}</td>
//                     <td className="py-3 px-4 text-gray-700">
//                       <div className="relative inline-block text-left">
//                         <button
//                           className="bg-blue-900 text-white py-1 px-4 rounded-lg hover:bg-red-600 flex items-center "
//                           onClick={() => toggleDropdown(index)}
//                         >
//                           Actions
//                           <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
//                           </svg>
//                         </button>

//                         {dropdownIndex === index && (
//                           <div className="dropdown-content absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//                             <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Approve</button>
//                             <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">Decline</button>
//                           </div>
//                         )}
//                       </div>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="7" className="text-center text-gray-500 py-4">No leave applications found.</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LeaveHistory;




import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaveHistory = () => {
  const [applications, setApplications] = useState([]);
  const [dropdownIndex, setDropdownIndex] = useState(null);

  useEffect(() => {
    const fetchLeaveApplications = async () => {
      try {
        const response = await axios.get("http://localhost:5000/leave-applications"); // Correct endpoint
        setApplications(response.data);
      } catch (error) {
        console.error("Error fetching leave applications:", error);
      }
    };

    fetchLeaveApplications();
  }, []);

  const toggleDropdown = (index) => {
    setDropdownIndex(dropdownIndex === index ? null : index);
  };

  const handleApprove = async (applicationId) => {
    try {
      const response = await axios.patch(`http://localhost:5000/leave-applications/${applicationId}`, { status: 'Approved' });
      setApplications(applications.map((app) =>
        app._id === applicationId ? { ...app, status: 'Approved' } : app
      ));
    } catch (error) {
      console.error("Error updating leave application status:", error);
    }
  };

  const handleDecline = async (applicationId) => {
    try {
      const response = await axios.patch(`http://localhost:5000/leave-applications/${applicationId}`, { status: 'Declined' });
      setApplications(applications.map((app) =>
        app._id === applicationId ? { ...app, status: 'Declined' } : app
      ));
    } catch (error) {
      console.error("Error updating leave application status:", error);
    }
  };

  return (
    <div className="flex bg-blue-900 w-[80vw] h-[550px] rounded-lg shadow-xl">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Leave History</h2>

        <div className="overflow-y-scroll w-[75vw] h-[60vh]">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-blue-100">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Name</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Duration</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Start Date</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">End Date</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Type</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Reason</th>
                <th className="py-3 px-4 text-left font-semibold text-gray-700">Status</th> {/* Status column */}
              </tr>
            </thead>
            <tbody>
              {applications.length > 0 ? (
                applications.map((application, index) => (
                  <tr key={application._id} className={`border-t ${index % 2 === 0 ? "bg-blue-50" : "bg-white"}`}>
                    <td className="py-3 px-4 text-gray-700">{application.name}</td>
                    <td className="py-3 px-4 text-gray-700">{application.duration}</td>
                    <td className="py-3 px-4 text-gray-700">{application.startDate}</td>
                    <td className="py-3 px-4 text-gray-700">{application.endDate}</td>
                    <td className="py-3 px-4 text-gray-700">{application.type}</td>
                    <td className="py-3 px-4 text-gray-700">{application.reason}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {application.status === 'Pending' ? (
                        <div className="relative inline-block text-left">
                          <button
                            className="bg-blue-900 text-white py-1 px-4 rounded-lg hover:bg-red-600 flex items-center"
                            onClick={() => toggleDropdown(index)}
                          >
                            Actions
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                          </button>

                          {dropdownIndex === index && (
                            <div className="dropdown-content absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                              <button
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                onClick={() => handleApprove(application._id)}
                              >
                                Approve
                              </button>
                              <button
                                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                                onClick={() => handleDecline(application._id)}
                              >
                                Decline
                              </button>
                            </div>
                          )}
                        </div>
                      ) : (
                        <span className={`text-${application.status === 'Approved' ? 'green' : 'red'}-500 font-semibold`}>
                          {application.status}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-gray-500 py-4">No leave applications found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveHistory;

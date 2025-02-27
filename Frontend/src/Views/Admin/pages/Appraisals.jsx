// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Appraisal = () => {
//   const [appraisal, setAppraisal] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const userId = "67a10108e3cf0cd6e9e15f18"; // Replace with actual user ID

//   useEffect(() => {
//     const fetchAppraisal = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/appraisal/${userId}`);
//         setAppraisal(response.data);
//       } catch (error) {
//         setError("Failed to fetch appraisal data.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAppraisal();
//   }, []);

//   return (
//     <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
//       <h2 className="text-2xl font-semibold text-blue-700 mb-4">Performance Appraisal</h2>

//       {loading ? (
//         <p className="text-gray-500">Loading...</p>
//       ) : error ? (
//         <p className="text-red-500">{error}</p>
//       ) : appraisal ? (
//         <div>
//           {/* Score & Feedback */}
//           <div className="bg-blue-100 p-4 rounded-lg mb-4">
//             <p className="text-lg font-semibold text-gray-700">
//               Final Score: <span className="text-blue-600">{appraisal.finalScore}%</span>
//             </p>
//             <p className="text-gray-700">Status: {appraisal.status}</p>
//             <p className="text-gray-700">Feedback: {appraisal.feedback}</p>
//           </div>

//           {/* KPI List */}
//           <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Assigned KPIs</h3>
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse border border-gray-300">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-700">
//                   <th className="p-3 border">Title</th>
//                   <th className="p-3 border">Status</th>
//                   <th className="p-3 border">Target Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {appraisal.kpis.map((kpi) => (
//                   <tr key={kpi._id} className="text-gray-600 hover:bg-gray-100">
//                     <td className="p-3 border">{kpi.title}</td>
//                     <td className="p-3 border">{kpi.status}</td>
//                     <td className="p-3 border">{kpi.targetDate || "N/A"}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500">No appraisal found.</p>
//       )}
//     </div>
//   );
// };

// export default Appraisal;





import React, { useState } from "react";

const Appraisal = () => {
  // Hardcoded Appraisal Data
  const appraisal = {
    finalScore: 85.5,
    status: "Reviewed",
    feedback: "Excellent job! Keep up the great work.",
    kpis: [
      {
        _id: "1",
        title: "Develop E-commerce Website",
        status: "Completed",
        targetDate: "2025-02-26 to 2025-02-27",
      },
      {
        _id: "2",
        title: "Optimize Website Performance",
        status: "In Progress",
        targetDate: "2025-03-01 to 2025-03-05",
      },
      {
        _id: "3",
        title: "Fix Security Vulnerabilities",
        status: "Not Started",
        targetDate: "2025-03-10 to 2025-03-15",
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Performance Appraisal</h2>

      <div className="bg-blue-100 p-4 rounded-lg mb-4">
        <p className="text-lg font-semibold text-gray-700">
          Final Score: <span className="text-blue-600">{appraisal.finalScore}%</span>
        </p>
        <p className="text-gray-700">Status: {appraisal.status}</p>
        <p className="text-gray-700">Feedback: {appraisal.feedback}</p>
      </div>

      {/* KPI List */}
      <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Assigned KPIs</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 border">Title</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Target Date</th>
            </tr>
          </thead>
          <tbody>
            {appraisal.kpis.map((kpi) => (
              <tr key={kpi._id} className="text-gray-600 hover:bg-gray-100">
                <td className="p-3 border">{kpi.title}</td>
                <td className="p-3 border">{kpi.status}</td>
                <td className="p-3 border">{kpi.targetDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appraisal;

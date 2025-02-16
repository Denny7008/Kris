
// import React, { useState, useEffect } from 'react';
// import { Banknote, User, Search, CheckCircle } from 'lucide-react';
// import axios from 'axios';

// const PayrollDashboard = () => {
//   const [userList, setUserList] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [salary, setSalary] = useState('');
//   const [showModal, setShowModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);

//   // Fetch users from the backend
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/users');
//         console.log(response);
//         const users = response.data?.users || [];
//         // Sort users in ascending order by first name
//         const sortedUsers = users.sort((a, b) => a.firstName.localeCompare(b.firstName));
//         setUserList(sortedUsers);
//       } catch (error) {
//         console.error('Error fetching Users:', error.response?.data || error.message);
//       }
//     };
//     fetchUsers();
//   }, []);

//   // Filter users based on the search term
//   const filteredUsers = userList.filter((user) =>
//     user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle Pay Now button click
//   const handlePayNow = (user) => {
//     setSelectedUser(user);
//     setSalary(user.salary);
//     setShowModal(true);
//   };

//   // Handle payout submission
//   const handleSendPayout = () => {
//     console.log('Sending payout for:', selectedUser.firstName, 'Salary:', salary);
//     setShowModal(false);
//     setShowSuccessModal(true);
//     setTimeout(() => setShowSuccessModal(false), 3000);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Payroll Management</h1>

//       {/* Search Bar */}
//       <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
//         <div className="p-2 bg-gray-200">
//           <Search className="text-gray-600" />
//         </div>
//         <input
//           type="text"
//           placeholder="Search by first or last name"
//           className="flex-1 p-2 focus:outline-none"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       {/* Employee Table */}
//       <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
//         <thead>
//           <tr className="bg-gray-100 text-left">
//             <th className="p-3 select-none"><User className="inline mr-2" />Employee</th>
//             <th className="p-3 select-none">Department/Job Title</th>
//             <th className="p-3 select-none">Bank Details</th>
//             <th className="p-3 select-none">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredUsers.map((user) => (
//             <tr key={user._id} className="border-b hover:bg-gray-50">
//               {/* Profile Image and Name */}
//               <td className="p-3 flex items-center gap-3">
//                 <img
//                   src={user.profileImage || 'https://wallpapercave.com/wp/wp2158286.jpg'}
//                   alt="Profile"
//                   className="h-10 w-10 rounded-full object-cover border border-gray-300"
//                 />
//                 {user.firstName} {user.lastName}
//               </td>

//               <td className="p-3 select-none">
//                 <p><strong>Department:</strong> {user.department}</p>
//                 <p><strong>Job Title:</strong> {user.jobTitle}</p>
//               </td>
//               <td className="p-3">
//                 {user.bankDetails?.length > 0 ? (
//                   user.bankDetails.map((bank, index) => (
//                     <div key={index} className="mb-2">
//                       <p className="select-none"><strong>Bank:</strong> {bank.bankName}</p>
//                       <p className="select-none"><strong>Acc:</strong> {bank.accountNumber}</p>
//                       <p className="select-none"><strong>IFSC:</strong> {bank.ifscCode}</p>
//                       <hr className="my-2" />
//                     </div>
//                   ))
//                 ) : (
//                   <p className="text-gray-500 select-none">No bank details available</p>
//                 )}
//               </td>
//               <td className="p-3">
//                 <button
//                   className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
//                   onClick={() => handlePayNow(user)}
//                 >
//                   <Banknote className="inline mr-2" />Pay Now
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       {filteredUsers.length === 0 && (
//         <p className="text-center text-gray-500 mt-4">No users found.</p>
//       )}

//       {/* Payment Modal */}
//       {showModal && selectedUser && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-[700px]">
//             <div className="flex">
//               {/* Left Side: Profile Image */}
//               <div className="w-1/3 p-4">
//                 <img
//                   src={selectedUser.profileImage || 'https://wallpapercave.com/wp/wp2158286.jpg'}
//                   alt="User Profile"
//                   className="w-full h-auto rounded"
//                 />
//               </div>

//               {/* Right Side: User Details */}
//               <div className="w-2/3 p-4">
//                 <h2 className="text-xl font-bold mb-4 select-none">{selectedUser.firstName} {selectedUser.lastName}</h2>
//                 <p className="select-none"><strong>Email:</strong> {selectedUser.email}</p>
//                 <p className="select-none"><strong>Phone:</strong> {selectedUser.phone}</p>
//                 <p className="select-none"><strong>Account No:</strong> {selectedUser.bankDetails[0]?.accountNumber}</p>
//                 <p className="select-none"><strong>IFSC:</strong> {selectedUser.bankDetails[0]?.ifscCode}</p>

//                 <div className="mt-2">
//                   <label className="block mb-1 font-semibold select-none">Salary</label>
//                   <input
//                     type="number"
//                     value={salary}
//                     onChange={(e) => setSalary(e.target.value)}
//                     className="border border-gray-300 p-2 w-full rounded"
//                   />
//                 </div>
//                 <button
//                   onClick={handleSendPayout}
//                   className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full"
//                 >
//                   Send Payout
//                 </button>
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="mt-2 text-gray-500 text-sm w-full px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Success Modal */}
//       {showSuccessModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
//             <CheckCircle className="text-green-600 w-16 h-16 mb-4" />
//             <h3 className="text-xl font-bold mb-2 select-none">Payout Successful!</h3>
//             <p className="text-gray-700 select-none">The payout has been processed successfully.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PayrollDashboard;





import React, { useState, useEffect } from 'react';
import { Banknote, User, Search, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { Buffer } from "buffer";


const PayrollDashboard = () => {
  const [userList, setUserList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [salary, setSalary] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        const users = response.data?.users || [];
    
        const processedUsers = await Promise.all(users.map(async (user) => {
          let profileImage = "https://wallpapercave.com/wp/wp2158286.jpg"; // Default profile image
    
          if (user.profilePic?.data?.data) {
            try {
              const uint8Array = new Uint8Array(user.profilePic.data.data);
              const blob = new Blob([uint8Array], { type: user.profilePic.contentType || "image/jpeg" });
              profileImage = URL.createObjectURL(blob);
            } catch (err) {
              console.error("Error processing profile image:", err);
            }
          }
    
          return { ...user, profileImage };
        }));
    
        // Sort users by first name
        const sortedUsers = processedUsers.sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
    
        setUserList(sortedUsers);
      } catch (error) {
        console.error("Error fetching Users:", error.response?.data || error.message);
      }
    };
    
    
    fetchUsers();
  },[]);
  

  // Filter users based on the search term
  const filteredUsers = userList.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle Pay Now button click
  const handlePayNow = (user) => {
    setSelectedUser(user);
    setSalary(user.salary);
    setShowModal(true);
  };

  // Handle payout submission
  const handleSendPayout = () => {
    console.log('Sending payout for:', selectedUser.firstName, 'Salary:', salary);
    setShowModal(false);
    setShowSuccessModal(true);
    setTimeout(() => setShowSuccessModal(false), 3000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Payroll Management</h1>

      {/* Search Bar */}
      <div className="mb-4 flex items-center border border-gray-300 rounded-lg overflow-hidden">
        <div className="p-2 bg-gray-200">
          <Search className="text-gray-600" />
        </div>
        <input
          type="text"
          placeholder="Search by first or last name"
          className="flex-1 p-2 focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Employee Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 select-none"><User className="inline mr-2" />Employee</th>
            <th className="p-3 select-none">Department/Job Title</th>
            <th className="p-3 select-none">Bank Details</th>
            <th className="p-3 select-none">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id} className="border-b hover:bg-gray-50">
              {/* Profile Image and Name */}
              <td className="p-3 flex items-center gap-3">
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="h-10 w-10 rounded-full object-cover border border-gray-300"
                />
                {user.firstName} {user.lastName}
              </td>

              <td className="p-3 select-none">
                <p><strong>Department:</strong> {user.department}</p>
                <p><strong>Job Title:</strong> {user.jobTitle}</p>
              </td>
              <td className="p-3">
                {user.bankDetails?.length > 0 ? (
                  user.bankDetails.map((bank, index) => (
                    <div key={index} className="mb-2">
                      <p className="select-none"><strong>Bank:</strong> {bank.bankName}</p>
                      <p className="select-none"><strong>Acc:</strong> {bank.accountNumber}</p>
                      <p className="select-none"><strong>IFSC:</strong> {bank.ifscCode}</p>
                      <hr className="my-2" />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 select-none">No bank details available</p>
                )}
              </td>
              <td className="p-3">
                <button
                  className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  onClick={() => handlePayNow(user)}
                >
                  <Banknote className="inline mr-2" />Pay Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {filteredUsers.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No users found.</p>
      )}

      {/* Payment Modal */}
      {showModal && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[700px]">
            <div className="flex">
              {/* Left Side: Profile Image */}
              <div className="w-1/3 p-4">
                <img
                  src={selectedUser.profileImage}
                  alt="User Profile"
                  className="w-full h-auto rounded"
                />
              </div>

              {/* Right Side: User Details */}
              <div className="w-2/3 p-4">
                <h2 className="text-xl font-bold mb-4 select-none">{selectedUser.firstName} {selectedUser.lastName}</h2>
                <p className="select-none"><strong>Email:</strong> {selectedUser.email}</p>
                <p className="select-none"><strong>Phone:</strong> {selectedUser.phone}</p>
                <p className="select-none"><strong>Account No:</strong> {selectedUser.bankDetails[0]?.accountNumber}</p>
                <p className="select-none"><strong>IFSC:</strong> {selectedUser.bankDetails[0]?.ifscCode}</p>

                <div className="mt-2">
                  <label className="block mb-1 font-semibold select-none">Salary</label>
                  <input
                    type="number"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="border border-gray-300 p-2 w-full rounded"
                  />
                </div>
                <button
                  onClick={handleSendPayout}
                  className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md w-full"
                >
                  Send Payout
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-2 text-gray-500 text-sm w-full px-4 py-2 rounded-md hover:bg-red-500 hover:text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayrollDashboard;

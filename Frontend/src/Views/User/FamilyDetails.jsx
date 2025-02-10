

// import React, { useState } from "react";

// const FamilyDetails = () => {
//   const [family, setFamily] = useState([
//     {
//       id: 1,
//       name: "Mr. Johnnie Walker Deep",
//       relationship: "Brother",
//       phone: "090 300 345 9888",
//       address: "123 Adany Street Victoria Island, Lagos",
//     },
//     {
//       id: 2,
//       name: "Mr. Johnnie Walker Deep",
//       relationship: "Brother",
//       phone: "090 300 345 9888",
//       address: "123 Adany Street Victoria Island, Lagos",
//     },
//   ]);

//   const [showForm, setShowForm] = useState(false);
//   const [currentMember, setCurrentMember] = useState(null);

//   const handleAddClick = () => {
//     setCurrentMember({
//       id: family.length + 1,
//       name: "",
//       relationship: "",
//       phone: "",
//       address: "",
//     });
//     setShowForm(true);
//   };

//   const handleUpdateClick = (member) => {
//     setCurrentMember(member);
//     setShowForm(true);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setCurrentMember((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     if (currentMember.id > family.length) {
//       // Adding new member
//       setFamily([...family, currentMember]);
//     } else {
//       // Updating existing member
//       setFamily(
//         family.map((member) =>
//           member.id === currentMember.id ? currentMember : member
//         )
//       );
//     }
//     setShowForm(false);
//     setCurrentMember(null);
//   };

//   return (
//     <div className="flex-1 rounded-lg bg-[#E3EDF9] p-6">
//       <div className="max-w-2xl bg-white rounded-lg p-6 space-y-6 shadow-lg">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           Family Details
//         </h2>

//         {!showForm ? (
//           <>
//             <div className="space-y-4">
//               {family.map((member) => (
//                 <div
//                   key={member.id}
//                   className="bg-[#F6F9FC] p-4 rounded-lg shadow flex justify-between items-center"
//                 >
//                   <div>
//                     <h3 className="font-medium">{member.name}</h3>
//                     <p className="text-sm text-gray-600">
//                       <strong>Relationship:</strong> {member.relationship}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       <strong>Phone No:</strong> {member.phone}
//                     </p>
//                     <p className="text-sm text-gray-600">
//                       <strong>Address:</strong> {member.address}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => handleUpdateClick(member)}
//                     className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
//                   >
//                     Update
//                   </button>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 flex gap-4">
//               <button
//                 onClick={handleAddClick}
//                 className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
//               >
//                 Add Family Member
//               </button>
//             </div>
//           </>
//         ) : (
//           // Form for adding or updating family members
//           <div className="bg-[#F6F9FC] p-6 rounded-lg shadow">
//             <h3 className="text-lg font-medium mb-4">
//               {currentMember?.id > family.length
//                 ? "Add Family Member"
//                 : "Update Family Member"}
//             </h3>
//             <div className="space-y-3">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={currentMember.name}
//                   onChange={handleInputChange}
//                   placeholder="Enter full name"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Relationship
//                 </label>
//                 <input
//                   type="text"
//                   name="relationship"
//                   value={currentMember.relationship}
//                   onChange={handleInputChange}
//                   placeholder="Enter relationship"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Phone Number
//                 </label>
//                 <input
//                   type="text"
//                   name="phone"
//                   value={currentMember.phone}
//                   onChange={handleInputChange}
//                   placeholder="Enter phone number"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700">
//                   Address
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   value={currentMember.address}
//                   onChange={handleInputChange}
//                   placeholder="Enter address"
//                   className="w-full p-2 border border-gray-300 rounded"
//                 />
//               </div>
//             </div>
//             <div className="mt-4 flex gap-4">
//               <button
//                 onClick={handleSave}
//                 className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600"
//               >
//                 Save
//               </button>
//               <button
//                 onClick={() => setShowForm(false)}
//                 className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500"
//               >
//                 Cancel
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FamilyDetails;




import React, { useState, useEffect } from "react";
import axios from "axios";

const FamilyDetails = () => {
  const [family, setFamily] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [currentMember, setCurrentMember] = useState(null);

  useEffect(() => {
    fetchFamilyDetails();
  }, []);

  const fetchFamilyDetails = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/get-user-data", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFamily(response.data.familyDetails || []);
    } catch (error) {
      console.error("Error fetching family details:", error);
    }
  };

  const handleAddClick = () => {
    setCurrentMember({ name: "", relationship: "", phone: "", address: "" });
    setShowForm(true);
  };

  const handleUpdateClick = (member) => {
    setCurrentMember(member);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentMember((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem("authToken");

      if (currentMember._id) {
        // Update Family Member
        const updatedFamily = family.map((member) =>
          member._id === currentMember._id ? currentMember : member
        );
        await axios.put(`http://localhost:5000/users/update/${currentMember._id}`, { familyDetails: updatedFamily }, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        // Add New Family Member
        const response = await axios.post(`http://localhost:5000/users/add/${currentMember._id}`, currentMember, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFamily([...family, response.data.user.familyDetails.at(-1)]);
      }
      setShowForm(false);
      setCurrentMember(null);
    } catch (error) {
      console.error("Error saving family member:", error);
    }
  };

  return (
    <div className="flex-1 rounded-lg bg-[#E3EDF9] p-6">
      <div className="max-w-2xl bg-white rounded-lg p-6 space-y-6 shadow-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Family Details</h2>

        {!showForm ? (
          <>
            <div className="space-y-4">
              {family.map((member) => (
                <div
                  key={member._id}
                  className="bg-[#F6F9FC] p-4 rounded-lg shadow flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-600">
                      <strong>Relationship:</strong> {member.relationship}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Phone No:</strong> {member.phone}
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Address:</strong> {member.address}
                    </p>
                  </div>
                  <button
                    onClick={() => handleUpdateClick(member)}
                    className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                  >
                    Update
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <button
                onClick={handleAddClick}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
              >
                Add Family Member
              </button>
            </div>
          </>
        ) : (
          <div className="bg-[#F6F9FC] p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">
              {currentMember?._id ? "Update Family Member" : "Add Family Member"}
            </h3>
            <div className="space-y-3">
              {['name', 'relationship', 'phone', 'address'].map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <input
                    type="text"
                    name={field}
                    value={currentMember[field]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${field}`}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-600"
              >
                Save
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FamilyDetails;


// import React, { useState } from "react";
// import { PencilLine } from "lucide-react";

// const ContactDetails = () => {
//   const menuItems = [
//     "Personal Details",
//     "Contact Details",
//     "Next of kin Details",
//     "Education/Qualifications",
//     "Guarantor Details",
//     "Family Details",
//     "Job Details",
//     "Financial Details",
//   ];

//   const [activeTab, setActiveTab] = useState("Contact Details");

//   return (
//     <div className="flex gap-6">
//       {/* Main Content */}
//       <div className="flex-1 rounded-lg p-8 relative">
//         <button className="absolute right-8 top-8 flex items-center text-gray-600 hover:text-gray-900">
//           <PencilLine className="w-5 h-5" />
//           <span className="ml-1">Edit</span>
//         </button>

//         <div className="max-w-3xl mx-auto space-y-6">
//           {/* Phone Numbers */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number 1
//               </label>
//               <input
//                 type="tel"
//                 className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//                 placeholder="Phone Number 1"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number 2
//               </label>
//               <input
//                 type="tel"
//                 className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//                 placeholder="Phone Number 2"
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Email Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               E-mail Address
//             </label>
//             <input
//               type="email"
//               className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//               value="johndoe@gmail.com"
//               readOnly
//             />
//           </div>

//           {/* Location */}
//           <div className="grid grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 State of residence
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//                 placeholder="State"
//                 readOnly
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 City
//               </label>
//               <input
//                 type="text"
//                 className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//                 placeholder="City"
//                 readOnly
//               />
//             </div>
//           </div>

//           {/* Residential Address */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Residential Address
//             </label>
//             <input
//               type="text"
//               className="w-full p-3 bg-[#F1F4FA] rounded-lg"
//               value="18 Junction site Lekki"
//               readOnly
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactDetails;


import React, { useState, useEffect } from "react";
import { PencilLine } from "lucide-react";
import axios from "axios";

const ContactDetails = ({ userId }) => {
  const [userData, setUserData] = useState({
    phone: "",
    email: "",
    state: "",
    city: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/get-allusers`);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    console.log(fetchUserData);
    fetchUserData();
  }, [userId]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.post(`http://localhost:5000/users/update-contact`, userData);
      setIsEditing(false);
      console.log("User updated", userData);
    } catch (error) {
      console.log("Error updating contact");
      console.error("Error updating user details", error);
    }
  };

  return (
    <div className="flex gap-6">
      <div className="flex-1 rounded-lg p-8 relative">
        <button
          className="absolute right-8 top-8 flex items-center text-gray-600 hover:text-gray-900"
          onClick={() => setIsEditing(!isEditing)}
        >
          <PencilLine className="w-5 h-5" />
          <span className="ml-1">{isEditing ? "Cancel" : "Edit"}</span>
        </button>

        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 bg-[#F1F4FA] rounded-lg"
              value={userData.phone}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Address</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 bg-[#F1F4FA] rounded-lg"
              value={userData.email}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State of residence</label>
              <input
                type="text"
                name="state"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                value={userData.state}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                value={userData.city}
                onChange={handleChange}
                readOnly={!isEditing}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address</label>
            <input
              type="text"
              name="address"
              className="w-full p-3 bg-[#F1F4FA] rounded-lg"
              value={userData.address}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          {isEditing && (
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;


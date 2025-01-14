// import React, { useState } from "react";
// import AdminSideNavbar from "../../../Components/AdminSideNavbar";
// import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";
// import { PencilLine } from 'lucide-react';

// const EmployeeProfile = () => {
//   const menuItems = [
//     'Personal Details',
//     'Contact Details',
//     'Next of kin Details',
//     'Education/Qualifications',
//     'Guarantor Details',
//     'Family Details',
//     'Job Details',
//     'Financial Details'
//   ];

//   // State to manage selected menu item
//   const [selectedMenu, setSelectedMenu] = useState('Personal Details');

//   // Function to render content dynamically
//   const renderContent = () => {
//     switch (selectedMenu) {
//       case 'Personal Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Personal Details</h2>
//             <p>Employee Name: John Doe Francis</p>
//             <p>Department: Design & Marketing</p>
//             <p>Job Title: UI/UX Designer</p>
//             <p>Job Category: Full-time</p>
//           </div>
//         );
//       case 'Contact Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Contact Details</h2>
//             <p>Email: john.doe@example.com</p>
//             <p>Phone: +1234567890</p>
//           </div>
//         );
//       case 'Next of kin Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Next of Kin Details</h2>
//             <p>Name: Jane Doe</p>
//             <p>Relationship: Sister</p>
//           </div>
//         );
//       case 'Education/Qualifications':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Education Qualifications</h2>
//             <p>Degree: Bachelor of Design</p>
//             <p>University: XYZ University</p>
//           </div>
//         );
//       case 'Guarantor Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Guarantor Details</h2>
//             <p>Guarantor Name: Michael Smith</p>
//             <p>Contact: +9876543210</p>
//           </div>
//         );
//       case 'Family Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Family Details</h2>
//             <p>Spouse: Sarah Doe</p>
//             <p>Children: 2</p>
//           </div>
//         );
//       case 'Job Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Job Details</h2>
//             <p>Position: Senior UI/UX Designer</p>
//             <p>Experience: 5 years</p>
//           </div>
//         );
//       case 'Financial Details':
//         return (
//           <div>
//             <h2 className="text-xl font-semibold">Financial Details</h2>
//             <p>Salary: $85,000 per year</p>
//             <p>Bonuses: $5,000</p>
//           </div>
//         );
//       default:
//         return <div>Select a menu item to view details.</div>;
//     }
//   };

//   return (
//     <div className="flex bg-[#E3EDF9]">
//       <div className="flex-col">

//         <div className="my-4 mx-4 w-[80vw] h-screen rounded-lg">
//           <div className="mb-3">
//             <h1 className="text-xl font-semibold">
//               Employee Mgmt / Employee Profile / Jhon Doe / {selectedMenu}
//             </h1>
//           </div>

//           <div className="px-4 pt-4 flex gap-6">
//             {/* Left Menu */}
//             <div className="w-64 space-y-2">
//               {menuItems.map((item, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSelectedMenu(item)} // Update selected menu
//                   className={`w-full text-left p-4 rounded-lg ${
//                     selectedMenu === item
//                       ? 'bg-[#FFC107] text-black'
//                       : 'bg-white hover:bg-gray-50'
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>

//             {/* Main Content */}
//             <div className="flex-1 bg-white rounded-lg p-8 relative">
//               <button className="absolute right-8 top-8">
//                 <PencilLine className="w-5 h-5" />
//                 <span className="ml-1">Edit</span>
//               </button>

//               {/* Render Dynamic Content */}
//               {renderContent()}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeProfile;

import React, { useState } from "react";
// import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import PersonalDetails from "./PersonalDetails";
import NextOfKinDetails from "./KinPage";
import EducationQualifications from "./AcademicRecords";
import GuarantorDetails from "./ViewGuarantorDetails";
import ViewFamilyDetails from "./ViewFamilyDetails";
import ViewJobDetails from "./ViewJobDetails";
import FinancialDetails from "./FinancialDetails";
// import FinancialDetails from "./FinancialDetails";

const EmployeeProfile = () => {
  const [selectedMenu, setSelectedMenu] = useState("Personal Details");

  // Menu items
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  // Component map
  const contentComponents = {
    "Personal Details": <PersonalDetails />,
    "Contact Details": <ContactDetails />,
    "Next of kin Details": <NextOfKinDetails />,
    "Education Qualifications": <EducationQualifications />,
    "Guarantor Details": <GuarantorDetails />,
    "Family Details": <ViewFamilyDetails />,
    "Job Details": <ViewJobDetails />,
    "Financial Details": <FinancialDetails />,
  };

  return (
    <div className="flex-col h-screen">
      {/* Current Route */}
        <h1 className="text-xl font-semibold">
          Employee Mgmt / Employee Profile / {selectedMenu}
        </h1>

      
      <div className="flex mt-4">
        {/* Left Side Menu */}
      <div className="w-64 space-y-2">
        {menuItems.map((item) => (
          <div
            key={item}
            className={`w-full text-left p-4 rounded-lg ${
              item === selectedMenu ? 'bg-[#FFC107] text-black' : 'bg-white hover:bg-gray-50'
            }`}
            onClick={() => setSelectedMenu(item)}
          >
            {item}
          </div>
        ))}
      </div> 

      {/* Right Side Content */}
      <div className="w-4/5 px-6">
        {/* Dynamically render the selected component */}
        <div className="bg-white p-4 rounded shadow">
          {contentComponents[selectedMenu] || <div>Select a menu item to view details.</div>}
        </div>
      </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;

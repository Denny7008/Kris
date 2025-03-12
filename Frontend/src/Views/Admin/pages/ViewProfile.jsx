// import React, { useState } from "react";
// // import PersonalDetails from "./PersonalDetails";
// import ContactDetails from "./ContactDetails";
// import PersonalDetails from "./PersonalDetails";
// import NextOfKinDetails from "./KinPage";
// import EducationQualifications from "./AcademicRecords";
// import GuarantorDetails from "./ViewGuarantorDetails";
// import ViewFamilyDetails from "./ViewFamilyDetails";
// import ViewJobDetails from "./ViewJobDetails";
// import FinancialDetails from "./FinancialDetails";
// import ViewDocuments from "./../../User/ViewDocs";
// import { Route, Router, Routes } from "react-router-dom";
// import JobDetailsRoute from "./JobDetailsRoute";
// // import FinancialDetails from "./FinancialDetails";

// const EmployeeProfile = () => {
//   const [selectedMenu, setSelectedMenu] = useState("Personal Details");

//   // Menu items
//   const menuItems = [
//     "Personal Details",
//     "Contact Details",
//     "Next of kin Details",
//     "Education Qualifications",
//     "Guarantor Details",
//     "Family Details",
//     "Job Details",
//     "Financial Details",
//   ];
  

//   // Component map
//   const contentComponents = {
//     "Personal Details": <PersonalDetails />,
//     "Contact Details": <ContactDetails />,
//     "Next of kin Details": <NextOfKinDetails />,
//     "Education Qualifications": <EducationQualifications />,
//     "Guarantor Details": <GuarantorDetails />,
//     "Family Details": <ViewFamilyDetails />,
//     "Job Details": <ViewJobDetails />,
//     "Financial Details": <FinancialDetails />,
//   };

//   return (
//     <div className="flex-col">
//       {/* Current Route */}
//         <h1 className="text-xl font-semibold">
//           Employee Mgmt / Employee Profile / {selectedMenu}
//         </h1>

      
//       <div className="flex mt-4">
//         {/* Left Side Menu */}
//       <div className="w-64 space-y-2">
//         {menuItems.map((item) => (
//           <div
//             key={item}
//             className={`w-full text-left p-4 rounded-lg ${
//               item === selectedMenu ? 'bg-[#FFC107] text-black' : 'bg-white hover:bg-gray-50'
//             }`}
//             onClick={() => setSelectedMenu(item)}
//           >
//             {item}
//           </div>
//         ))}
//       </div> 

//       {/* Right Side Content */}
//       <div className="w-4/5 px-6">
//         {/* Dynamically render the selected component */}
//         <div className="bg-white p-4 rounded shadow">
//           {contentComponents[selectedMenu] || <div>Select a menu item to view details.</div>}
//         </div>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default EmployeeProfile;




import React from "react";
import PersonalDetails from "./PersonalDetails";
import ContactDetails from "./ContactDetails";
import NextOfKinDetails from "./KinPage";
import EducationQualifications from "./AcademicRecords";
import GuarantorDetails from "./ViewGuarantorDetails";
import ViewFamilyDetails from "./ViewFamilyDetails";
import ViewJobDetails from "./ViewJobDetails";
import FinancialDetails from "./FinancialDetails";
import { Link, useNavigate } from "react-router-dom";


const ViewProfile = ({ employee }) => {
  const [selectedMenu, setSelectedMenu] = React.useState("Personal Details");
  const navigate = useNavigate();

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

  const contentComponents = {
    "Personal Details": <PersonalDetails employee={employee} />,
    "Contact Details": <ContactDetails employee={employee} />,
    "Next of kin Details": <NextOfKinDetails employee={employee} />,
    "Education Qualifications": <EducationQualifications employee={employee} />,
    "Guarantor Details": <GuarantorDetails employee={employee} />,
    "Family Details": <ViewFamilyDetails employee={employee} />,
    "Job Details": <ViewJobDetails employee={employee} />,
    "Financial Details": <FinancialDetails employee={employee} />,
  };

  return (
    <div className="flex-col">
      <div className="flex justify-between">
      <h1 className="text-xl font-semibold">
        Employee Mgmt / Employee Profile / {selectedMenu}
      </h1>
      <div>
         <Link to="/admin/dashboard/"  className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back</Link>
      </div>
      </div>

      <div className="flex mt-4">
        {/* Left Side Menu */}
        <div className="w-64 space-y-2">
          {menuItems.map((item) => (
            <div
              key={item}
              className={`w-full text-left p-4 rounded-lg ${
                item === selectedMenu ? "bg-[#FFC107] text-black" : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => setSelectedMenu(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="w-4/5 px-6">
          <div className="bg-white p-4 rounded shadow">
            {contentComponents[selectedMenu] || <div>Select a menu item to view details.</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

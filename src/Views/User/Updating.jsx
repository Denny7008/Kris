import React, { useState } from "react";
import Navbar from "./Usernavbar";
import Ctc from "./Ctc";
import NextDetails from "./NextDetails";
import EducationQualifications from "./Educational";
import GuarantorDetails from "./GurantorDetails";
import JobDetails from "./JobDetails";
import FamilyDetails from "./FamilyDetails";
import FinancialDocs from "./FinancialDocs";
import Personaldetails from "./Personaldetails";

const Updateprofile = () => {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of Kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("Personal Details");

  // Define content for each tab
  const renderContent = () => {
    switch (activeTab) {
      case "Personal Details":
        return <Personaldetails />; // Replace with the actual component or content
      case "Contact Details":
        return <Ctc />;
      case "Next of Kin Details":
        return <NextDetails />;
      case "Education Qualifications":
        return <EducationQualifications />;
      case "Guarantor Details":
        return <GuarantorDetails />;
      case "Family Details":
        return <FamilyDetails />;
      case "Financial Details":
        return <FinancialDocs />;
      case "Job Details":
        return <JobDetails />;
      default:
        return <div>Select a valid tab from the sidebar</div>;
    }
  };

  return (
    <div className="bg-[#E3EDF9]">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / {activeTab}
        </a>
      </div>

      <div className="flex gap-4 h-screen mt-4 justify-center rounded-lg bg-[#E3EDF9]">
        <div className="w-3/4 max-w-4xl h-[80vh] rounded-lg flex">
          {/* Sidebar */}
          <div className="w-1/3 h-full border-r bg-gray-100 p-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left p-4 rounded-lg ${
                    item === activeTab
                      ? "bg-[#FFC107] text-black"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="ml-10 bg-[#E3EDF9] flex-1 p-6 pl-8 rounded-lg">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;

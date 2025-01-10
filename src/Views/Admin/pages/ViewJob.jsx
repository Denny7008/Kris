import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const ViewJob = () => {
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

  const [activeTab, setActiveTab] = useState("Job Details");

  // Sample documents data
  const documents = [
    { name: "Signed Offer Letter.pdf", icon: "PDF" },
    { name: "NYSC Certificate.pdf", icon: "PDF" },
    { name: "Guarantor's Form.pdf", icon: "PDF" },
    { name: "Degree Certificate.pdf", icon: "PDF" },
    { name: "John Doe CV.pdf", icon: "PDF" },
    { name: "Birth Certificate.pdf", icon: "PDF" },
  ];

  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] h-screen rounded-lg">
          <div className="mb-3">
            <h1 className="text-xl font-semibold">
              Employee Mgmt / Employee Profile / John Doe
            </h1>
          </div>

          <div className="px-4 pt-3 flex gap-6">
            {/* Left Menu */}
            <div className="w-64 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left p-4 rounded-lg ${
                    item === activeTab
                      ? "bg-[#FFC107] text-black"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg p-8">
              <h2 className="text-xl font-medium mb-6">
                Job Details / View Documents
              </h2>

              {/* Documents Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {documents.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-[#F0F8FF] border rounded-lg p-4 text-center shadow-md hover:shadow-lg"
                  >
                    <div className="text-4xl mb-2 text-gray-700">
                      <span>{doc.icon}</span>
                    </div>
                    <div className="text-gray-800 font-medium">{doc.name}</div>
                  </div>
                ))}
              </div>

              {/* Download All Button */}
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
                Download ALL (Zip)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;

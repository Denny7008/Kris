import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const ViewFamilyDetails = () => {
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

  const [activeTab, setActiveTab] = useState("Family Details");

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
              <div className="max-w-3xl">
                <h2 className="text-xl font-medium mb-6">View Family Details</h2>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Full Name */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="bg-[#F1F4FA] p-4 rounded-lg">
                        Mr Johnny Francis
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Phone No
                      </label>
                      <div className="bg-[#F1F4FA] p-4 rounded-lg">
                        090 500 500 6000
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {/* Relationship */}
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Relationship
                      </label>
                      <div className="bg-[#F1F4FA] p-4 rounded-lg">Brother</div>
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      333 Adeniyi Street Victoria Island, Lagos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewFamilyDetails;

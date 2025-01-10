import React, { useState } from "react";
import Navbar from "./Usernavbar";

const JobDetails = () => {
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

  return (
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Job Details
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-7xl rounded-lg flex">
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
          <div className="flex-1 pl-8 rounded-lg bg-[#E3EDF9]">
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 space-y-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                View Job Details
              </h2>
              <div className="space-y-6">
                <div className="flex justify-center">
                  <h3 className="font-medium">Job Role</h3>
                  <p className="text-lg font-semibold text-gray-700">
                    UI UX Designer
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="mx-auto">
                    <h3 className="font-medium">Department</h3>
                    <p className="text-gray-700">Design & Marketing</p>
                  </div>
                  <div className="mx-auto"> 
                    <h3 className="font-medium">Line Manager</h3>
                    <p className="text-gray-700">Mr. Domino's Pizza</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-lg">Job Description</h3>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-2">
                    <li>
                      Creating user-centered designs by understanding business
                      requirements and user feedback.
                    </li>
                    <li>
                      Creating user flows, wireframes, prototypes, and mockups.
                    </li>
                    <li>
                      Translating requirements into style guides, design
                      systems, design patterns, and attractive user interfaces.
                    </li>
                    <li>
                      Designing UI elements such as input controls, navigational
                      components, and informational components.
                    </li>
                    <li>
                      Creating original graphic designs (e.g., images, sketches,
                      and tables).
                    </li>
                    <li>
                      Identifying and troubleshooting UX problems (e.g.,
                      responsiveness).
                    </li>
                    <li>
                      Collaborating effectively with product, engineering, and
                      management teams.
                    </li>
                    <li>
                      Incorporating customer feedback, usage metrics, and
                      usability findings into design to enhance user experience.
                    </li>
                  </ul>
                </div>
                <div className="flex space-x-4 mt-6">
                  <button
                    className="bg-[#007BFF] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#0056b3] focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    Upload Documents
                  </button>
                  <button
                    className="bg-white border border-[#007BFF] text-[#007BFF] px-6 py-3 rounded-lg shadow-md hover:bg-[#f0f8ff] focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
                  >
                    View Documents
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

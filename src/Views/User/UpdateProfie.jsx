import React, { useState } from "react";
import Navbar from "./Usernavbar";

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

  const [activeTab, setActiveTab] = useState("Job Details");

  return (
    <div className="bg-[#E3EDF9]">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Job Details
        </a>
      </div>

      <div className="flex gap-4 h-screen mt-4 justify-center rounded-lg bg-[#E3EDF9]">
        <div className="w-3/4 max-w-4xl h-[80vh] rounded-lg   flex">
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
          <div className="ml-8 bg-white flex-1 p-6 pl-8 rounded-lg">
          <div className="mt-6 flex justify-end">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600">
                  Edit
                </button>
              </div>
            <div className="max-w-md mx-auto bg-white  rounded-lg p-6">
              {/* Employee Profile Image */}
              <div className="flex justify-center mb-4">
                <div className="w-24 h-24 rounded-full bg-yellow-300 flex items-center justify-center text-3xl font-bold text-white">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="rounded-full"
                  />
                </div>
              </div>
              

              {/* Employee Details */}
              <div className="mt-10 text-center space-y-4">
                <div className="text-lg font-bold">John Doe Francis</div>
                <div className="text-gray-600">Design & Marketing</div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="mt-10">
                    <div className="text-sm text-gray-500">Job Title</div>
                    <div className="text-lg font-semibold">UI / UX Designer</div>
                  </div>
                  <div className="mt-10">
                    <div className="text-sm text-gray-500">Job Category</div>
                    <div className="text-lg font-semibold">Full time</div>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updateprofile;
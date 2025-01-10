import React, { useState } from "react";
import Navbar from "./Usernavbar";

const NextDetails = () => {
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

  const [activeTab, setActiveTab] = useState("Next of Kin Details");

  return (
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Next of Kin Details
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-7xl rounded-lg flex">
          {/* Sidebar */}
          <div className="w-1/3 h-[80vh] border-r bg-gray-100 p-4">
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
          <div className="flex-1 rounded-lg bg-[#E3EDF9]">
            <div className="w-[40vw] px-10 mx-10 bg-white rounded-lg p-6 space-y-8 shadow-lg">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  {/* Next of Kin Name */}
                  <div>
                    <label className="py-4 block text-sm font-medium text-gray-700">
                      Next of Kin Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe Samson"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Job/Occupation */}
                  <div>
                    <label className="py-4  block text-sm font-medium text-gray-700">
                      Job / Occupation
                    </label>
                    <input
                      type="text"
                      placeholder="IT Manager"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Phone Number */}
                  <div>
                    <label className="py-4 block text-sm font-medium text-gray-700">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="08120000000"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Relationship */}
                  <div>
                    <label className="py-4 block text-sm font-medium text-gray-700">
                      Relationship
                    </label>
                    <select
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option>Relative</option>
                      <option>Friend</option>
                      <option>Colleague</option>
                    </select>
                  </div>
                  {/* Residential Address */}
                  <div className="col-span-2">
                    <label className=" py-4 block text-sm font-medium text-gray-700">
                      Residential Address
                    </label>
                    <textarea
                      placeholder="18 Junction Site Lekki"
                      className="px-2 py-6 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      rows={3}
                    ></textarea>
                  </div>
                </div>
                {/* Update Button */}
                <div className="mt-6 flex ">
                  <button
                    type="submit"
                    className="bg-[#28A745] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextDetails;

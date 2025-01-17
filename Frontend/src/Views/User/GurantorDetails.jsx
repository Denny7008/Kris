import React, { useState } from "react";
import Navbar from "./Usernavbar";

const GuarantorDetails = () => {
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

  const [activeTab, setActiveTab] = useState("Guarantor Details");

  return (
    <div className="flex-1  rounded-lg bg-[#E3EDF9]">
            <div className="max-w-2xl  bg-white rounded-lg p-6 space-y-2 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Guarantor Details
              </h2>
              <div className="space-y-4">
                <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">Mr. Johnnie Walker Deep</h3>
                  <p className="text-sm text-gray-600">
                    Head of Design Team, Microsoft Inc.
                  </p>
                  <p className="text-sm text-gray-600">090 500 500 6000</p>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">Miss Walkie Talkie</h3>
                  <p className="text-sm text-gray-600">
                    Human Resources Manager, Apple Inc.
                  </p>
                  <p className="text-sm text-gray-600">090 400 400 4848</p>
                </div>
              </div>
              <div className="mt-6 flex">
                <button
                  type="submit"
                  className="bg-[#28A745] text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
  );
};

export default GuarantorDetails;

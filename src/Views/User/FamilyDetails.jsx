import React, { useState } from "react";
import Navbar from "./Usernavbar";

const FamilyDetails = () => {

  return (
    <div className="flex-1 pl-8 rounded-lg bg-[#E3EDF9]">
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 space-y-6 shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Family Details
              </h2>
              <div className="space-y-4">
                <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">Mr. Johnnie Walker Deep</h3>
                  <p className="text-sm text-gray-600">
                    Relationship: Brother
                  </p>
                  <p className="text-sm text-gray-600">Phone No: 090 300 345 9888</p>
                  <p className="text-sm text-gray-600">
                    Address: 123 Adany Street Victoria Island, Lagos
                  </p>
                </div>
                <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">Mr. Johnnie Walker Deep</h3>
                  <p className="text-sm text-gray-600">
                    Relationship: Brother
                  </p>
                  <p className="text-sm text-gray-600">Phone No: 090 300 345 9888</p>
                  <p className="text-sm text-gray-600">
                    Address: 123 Adany Street Victoria Island, Lagos
                  </p>
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

export default FamilyDetails;

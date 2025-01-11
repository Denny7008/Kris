import React, { useState } from "react";
import Navbar from "./Usernavbar";

const NextDetails = () => {

  return (
    <div className=" flex-1 rounded-lg bg-[#E3EDF9]">
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
  );
};

export default NextDetails;

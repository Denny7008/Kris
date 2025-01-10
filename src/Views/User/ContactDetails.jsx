import React, { useState } from "react";
import Navbar from "./Usernavbar";

const ContactDetails = () => {
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

      <div className="flex gap-4 h-screen mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-4xl h-[80vh] rounded-lg  flex">
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
            <div className="max-w-lg mx-auto bg-white rounded-lg p-6 space-y-6 shadow-lg">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  {/* Phone Number 1 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number 1
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number 1"
                      className="px-2 py-4  mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Phone Number 2 */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Phone Number 2
                    </label>
                    <input
                      type="text"
                      placeholder="Phone Number 2"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* E-mail Address */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      E-mail Address
                    </label>
                    <input
                      type="email"
                      placeholder="johndoe@gmail.com"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* State of Residence */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      State of Residence
                    </label>
                    <input
                      type="text"
                      placeholder="State of Residence"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="City"
                      className=" px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  {/* Residential Address */}
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Residential Address
                    </label>
                    <textarea
                      placeholder="18 Junction Site Lekki"
                      className="px-2 py-4 mt-2 block w-full rounded-md border-gray-300 bg-[#F6F9FC] shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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

export default ContactDetails;

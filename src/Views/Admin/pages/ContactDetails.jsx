import React, { useState } from 'react';
import { PencilLine } from 'lucide-react';
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const ContactDetails = () => {

    const menuItems = [
        'Personal Details',
        'Contact Details',
        'Next of kin Details',
        'Education/Qualifications',
        'Guarantor Details',
        'Family Details',
        'Job Details',
        'Financial Details'
      ];

      const [activeTab, setActiveTab] = useState('Contact Details');


  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] h-screen rounded-lg">
          <div className="mb-3">
            <h1 className="text-xl font-semibold">
              Employee Mgmt / Employee Profile / Jhon Doe
            </h1>
          </div>


          <div className="px-4 pt-4 flex gap-6">
      {/* Left Menu */}
      <div className="w-64 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`w-full text-left p-4 rounded-lg ${
              item === activeTab ? 'bg-[#FFC107] text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg p-8 relative">
        <button className="absolute right-8 top-8 flex items-center text-gray-600 hover:text-gray-900">
          <PencilLine className="w-5 h-5" />
          <span className="ml-1">Edit</span>
        </button>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Phone Numbers */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number 1</label>
              <input
                type="tel"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="Phone Number 1"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number 2</label>
              <input
                type="tel"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="Phone Number 2"
                readOnly
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-mail Address</label>
            <input
              type="email"
              className="w-full p-3 bg-[#F1F4FA] rounded-lg"
              value="johndoe@gmail.com"
              readOnly
            />
          </div>

          {/* Location */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State of residence</label>
              <input
                type="text"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="State"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="City"
                readOnly
              />
            </div>
          </div>

          {/* Residential Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address</label>
            <input
              type="text"
              className="w-full p-3 bg-[#F1F4FA] rounded-lg"
              value="18 Junction site Lekki"
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;

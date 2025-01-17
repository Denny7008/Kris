import React, { useState } from "react";
import { PencilLine } from "lucide-react";

const ContactDetails = () => {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of kin Details",
    "Education/Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("Contact Details");

  return (
    <div className="flex gap-6">
      {/* Main Content */}
      <div className="flex-1 rounded-lg p-8 relative">
        <button className="absolute right-8 top-8 flex items-center text-gray-600 hover:text-gray-900">
          <PencilLine className="w-5 h-5" />
          <span className="ml-1">Edit</span>
        </button>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Phone Numbers */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number 1
              </label>
              <input
                type="tel"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="Phone Number 1"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number 2
              </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              E-mail Address
            </label>
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State of residence
              </label>
              <input
                type="text"
                className="w-full p-3 bg-[#F1F4FA] rounded-lg"
                placeholder="State"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Residential Address
            </label>
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
  );
};

export default ContactDetails;

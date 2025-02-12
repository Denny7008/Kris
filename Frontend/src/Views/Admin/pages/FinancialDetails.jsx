import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const FinancialDetails = () => {
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

  const [activeTab, setActiveTab] = useState("Financial Details");

  return (
            <div className="flex-1 bg-white rounded-lg p-8">
              <div className="max-w-3xl">
                <h2 className="text-xl font-medium mb-6">Financial Details</h2>

                <div className="space-y-6">
                  {/* Bank Name */}
                  <div className="mb-4">
                    <label className="block font-medium text-gray-700 mb-1">
                      Bank Name
                    </label>
                    <input
                      type="text"
                      value="Access Bank"
                      className="w-full p-3 border rounded-lg bg-gray-100"
                      readOnly
                    />
                  </div>

                  {/* Account Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Account No
                      </label>
                      <input
                        type="text"
                        value="001101100"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Account Name
                      </label>
                      <input
                        type="text"
                        value="John Doe Smith"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Pension Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Registered with
                      </label>
                      <input
                        type="text"
                        value="Stanbic IBTC"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        readOnly
                      />
                    </div>
                    <div>
                      <label className="block font-medium text-gray-700 mb-1">
                        Pension Number
                      </label>
                      <input
                        type="text"
                        value="10111010101210101011"
                        className="w-full p-3 border rounded-lg bg-gray-100"
                        readOnly
                      />
                    </div>
                  </div>

                  {/* Update Button */}
                  <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600">
                    Update Account Details
                  </button>
                </div>
              </div>
            </div>
  )
};

export default FinancialDetails;

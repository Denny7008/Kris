import React, { useState } from "react";

const NextDetails = () => {
  // State to manage input values
  const [formValues, setFormValues] = useState({
    kinName: "John Doe Samson",
    occupation: "IT Manager",
    phone: "08120000000",
    relationship: "Relative",
    address: "18 Junction Site Lekki",
  });

  // State to toggle input fields' editable state
  const [isEditable, setIsEditable] = useState(false);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Function to toggle edit mode
  const handleUpdateClick = () => {
    setIsEditable((prev) => !prev); // Toggle editable state
  };

  return (
    <div className="flex-1 rounded-lg bg-[#E3EDF9]">
      <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
        <form>
          <div className="grid grid-cols-2 gap-6">
            {/* Next of Kin Name */}
            <div>
              <label className="py-4 block text-sm font-medium text-gray-700">
                Next of Kin Name
              </label>
              <input
                type="text"
                name="kinName"
                placeholder="John Doe Samson"
                value={formValues.kinName}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* Job/Occupation */}
            <div>
              <label className="py-4 block text-sm font-medium text-gray-700">
                Job / Occupation
              </label>
              <input
                type="text"
                name="occupation"
                placeholder="IT Manager"
                value={formValues.occupation}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* Phone Number */}
            <div>
              <label className="py-4 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                placeholder="08120000000"
                value={formValues.phone}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* Relationship */}
            <div>
              <label className="py-4 block text-sm font-medium text-gray-700">
                Relationship
              </label>
              <select
                name="relationship"
                value={formValues.relationship}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              >
                <option value="Relative">Relative</option>
                <option value="Friend">Friend</option>
                <option value="Colleague">Colleague</option>
              </select>
            </div>
            {/* Residential Address */}
            <div className="col-span-2">
              <label className="py-4 block text-sm font-medium text-gray-700">
                Residential Address
              </label>
              <textarea
                name="address"
                placeholder="18 Junction Site Lekki"
                value={formValues.address}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-6 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                rows={3}
              ></textarea>
            </div>
          </div>
          {/* Update Button */}
          <div className="mt-6 flex">
            <button
              type="button"
              onClick={handleUpdateClick}
              className={`${
                isEditable ? "bg-blue-500" : "bg-[#28A745]"
              } text-white px-8 py-3 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600`}
            >
              {isEditable ? "Save" : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NextDetails;

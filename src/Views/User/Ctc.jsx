import React, { useState } from "react";

const Ctc = () => {
  // State to manage input values
  const [formValues, setFormValues] = useState({
    phone1: "7008176804",
    phone2: "8249152292",
    email: "rajgandhadinesh@gmail.com",
    state: "Odisha",
    city: "Rourkela",
    address: "At-Bijlatola,po-jhartrang",
  });

  // State to toggle input fields' disabled state
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
    <div>
      <div className="max-w-full w-full px-10 mx-auto bg-white rounded-lg p-6 space-y-8 shadow-lg">
        <form>
          <div className="grid grid-cols-2 gap-6">
            {/* Phone Number 1 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number 1
              </label>
              <input
                type="text"
                name="phone1"
                placeholder="Phone Number 1"
                value={formValues.phone1}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* Phone Number 2 */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number 2
              </label>
              <input
                type="text"
                name="phone2"
                placeholder="Phone Number 2"
                value={formValues.phone2}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* E-mail Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                E-mail Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@gmail.com"
                value={formValues.email}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* State of Residence */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State of Residence
              </label>
              <input
                type="text"
                name="state"
                placeholder="State of Residence"
                value={formValues.state}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formValues.city}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              />
            </div>
            {/* Residential Address */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Residential Address
              </label>
              <textarea
                name="address"
                placeholder="18 Junction Site Lekki"
                value={formValues.address}
                disabled={!isEditable}
                onChange={handleChange}
                className={`px-2 py-4 mt-2 block w-full rounded-md border-gray-300 ${
                  isEditable ? "bg-white" : "bg-[#F6F9FC]"
                } shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                rows={3}
              ></textarea>
            </div>
          </div>
          {/* Update Button */}
          <div className="mt-6 flex ">
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

export default Ctc;

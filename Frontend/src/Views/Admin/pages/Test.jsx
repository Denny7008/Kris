import React, { useState } from "react";

const Test = () => {
  // State to track selected menu
  const [selectedMenu, setSelectedMenu] = useState("Personal Details");

  // Dynamic content based on the selected menu
  const renderContent = () => {
    switch (selectedMenu) {
      case "Personal Details":
        return (
          <div>
            <h1>Personal Details</h1>
            <p>Employee Name: John Doe Francis</p>
            <p>Department: Design & Marketing</p>
            <p>Job Title: UI/UX Designer</p>
            <p>Job Category: Full-time</p>
          </div>
        );
      case "Contact Details":
        return (
          <div>
            <h1>Contact Details</h1>
            <p>Email: john.doe@example.com</p>
            <p>Phone: +1234567890</p>
          </div>
        );
      case "Next of Kin Details":
        return (
          <div>
            <h1>Next of Kin Details</h1>
            <p>Name: Jane Doe</p>
            <p>Relationship: Sister</p>
          </div>
        );
      case "Education Qualifications":
        return (
          <div>
            <h1>Education Qualifications</h1>
            <p>Degree: Bachelor of Design</p>
            <p>University: XYZ University</p>
          </div>
        );
      default:
        return <div>Select a menu item to display its details.</div>;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 h-full p-4 fixed">
        <ul className="menu-list">
          {[
            "Personal Details",
            "Contact Details",
            "Next of Kin Details",
            "Education Qualifications",
          ].map((item) => (
            <li
              key={item}
              className={`cursor-pointer p-2 my-1 ${
                selectedMenu === item ? "font-bold bg-yellow-200" : ""
              }`}
              onClick={() => setSelectedMenu(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="ml-1/4 p-8 w-full">
        {/* Route Header */}
        <div className="mb-4">
          <h2 className="text-gray-500 font-semibold">
            Employee Mgmt / Employee Profile / {selectedMenu}
          </h2>
        </div>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Test;

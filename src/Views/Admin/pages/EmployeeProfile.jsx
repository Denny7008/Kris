import React from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";
import { PencilLine } from 'lucide-react';

const EmployeeProfile = () => {


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
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full text-left p-4 rounded-lg ${
              index === 0 ? 'bg-[#FFC107] text-black' : 'bg-white hover:bg-gray-50'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-white rounded-lg p-8 relative">
        <button className="absolute right-8 top-8">
          <PencilLine className="w-5 h-5" />
          <span className="ml-1">Edit</span>
        </button>

        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#FFC107] mb-4 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces" 
              alt="Employee"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold">John Doe Francis</h2>
        </div>

        <div className="space-y-6">
          <div className="text-center">
            <p className="text-gray-600 mb-1">Department</p>
            <p className="text-xl font-semibold">Design & Marketing</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-gray-600 mb-1">Job Title</p>
              <p className="text-xl font-semibold">UI / UX Designer</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Job Category</p>
              <p className="text-xl font-semibold">Full time</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;

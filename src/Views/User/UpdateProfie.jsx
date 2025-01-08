// Import necessary libraries
import React from 'react';
import { PencilIcon } from '@heroicons/react/solid';
import Navbar from './Usernavbar';

const ProfileCard = () => {
  return (
    <div className='bg-[#E3EDF9]'>
      <Navbar/>
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Update profile
        </a>
      </div>
      <div className="flex h-screen mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-4xl h-[75vh] rounded-lg bg-white shadow-md">
          <div className="flex">
            {/* Sidebar */}
            <div className="w-1/3 h-[75vh] border-r bg-gray-100 p-4">
              <ul className="space-y-4">
                <li className="bg-gray-200 font-bold text-yellow-500 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Personal Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Contact Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Next of kin Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Education Qualifications
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Guarantor Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Family Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Job Details
                </li>
                <li className="bg-gray-200 flex items-center justify-center border border-gray-300 rounded-lg p-3">
                  Financial Details
                </li>
              </ul>
            </div>

            {/* Main Content */}
            <div className="w-2/3 p-6 pl-8">
              <div className="mt-8 relative">
                {/* Profile Picture */}
                <div className="flex justify-center">
                  <div className="h-24 w-24 rounded-full bg-yellow-500">
                    {/* Placeholder for Profile Picture */}
                  </div>
                </div>

                {/* Edit Icon */}
                <button className="absolute right-0 top-0">
                  <PencilIcon className="h-5 w-5 text-gray-500 hover:text-gray-700" />
                </button>
              </div>

              {/* Details Section */}
              <div className="mt-16 text-center">
                <p className="text-gray-500 text-sm">Employee Name</p>
                <h1 className="text-2xl font-bold">John Doe Francis</h1>
                <p className="mt-8 text-gray-500 text-sm">Department</p>
                <h2 className="text-xl font-medium">Design & Marketing</h2>

                <div className="mt-12 flex justify-around">
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Job Title</p>
                    <h3 className="text-lg font-medium">UI / UX Designer</h3>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm">Job Category</p>
                    <h3 className="text-lg font-medium">Full time</h3>
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

export default ProfileCard;

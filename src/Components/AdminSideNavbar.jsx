import React from 'react';
import logo from "../assets/kris logo 2.svg"; // Path to your logo image
import dp from "../assets/dp 1.png"
import { Link } from 'react-router-dom';

const AdminSideNavbar = () => {
  return (
    <div className="flex flex-col w-64 h-auto bg-blue-900 text-white shadow-md">
        <img className="w-[193px] h-[52px] top-[7px] left-[67px] gap-0 opacity-100" src={logo} alt="" />
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20">
        <div className="rounded-full bg-yellow-400 w-20 h-20 flex items-center justify-center">
          <img className="w-20 h-20" src={dp} alt="" />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-semibold">KRIS Admin</h2>
          <p className="text-sm">Admin</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col mt-6 pl-2">
        <a href="#" className="flex items-center p-2 mb-2 text-yellow-400 bg-blue-800 rounded-lg">
          <span className="material-icons">dashboard</span>
          <span className="ml-2">Dashboard</span>
        </a>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">mail</span>
          <span className="ml-2">Messages</span>
          <span className="ml-auto text-red-500">13</span>
        </a>
        <h3 className="mt-4 mb-2 font-semibold">Recruitment</h3>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">work</span>
          <span className="ml-2">Jobs</span>
        </a>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">group</span>
          <span className="ml-2">Candidates</span>
        </a>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">description</span>
          <span className="ml-2">Resumes</span>
        </a>
        <h3 className="mt-4 mb-2 font-semibold">Organization</h3>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">people</span>
          <span className="ml-2">Employee Management</span>
        </a>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">book</span>
          <Link to="LeaveManagement" className="ml-2">Leave Management</Link>
        </a>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">assessment</span>
          <span className="ml-2">Performance Management</span>
        </a>
        <h3 className="mt-4 mb-2 font-semibold">KRIS Pay</h3>
        <a href="#" className="flex items-center p-2 mb-2 hover:bg-blue-800 rounded-lg">
          <span className="material-icons">attach_money</span>
          <span className="ml-2">Payroll Management</span>
        </a>
      </div>

      {/* Logout Button */}
      <div className="mt-auto mb-4 pl-4 pr-4">
        <button className="flex items-center justify-center w-full h-12 bg-red-500 rounded-lg">
          <span className="material-icons">logout</span>
          <span className="ml-2">Log Out</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSideNavbar;

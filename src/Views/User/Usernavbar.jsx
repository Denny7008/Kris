import React from "react";
import logo from "../../assets/kris logo 3.png";
const Navbar = () => {
  return (
    <nav className="bg-green-400 shadow p-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="text-blue-600 text-2xl font-bold flex items-center">
          {logo}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="hover:text-blue-500">Dashboard</a>
        <a href="#" className="hover:text-blue-500">Requests</a>
        <a href="#" className="hover:text-blue-500">Payroll</a>
        <a href="#" className="hover:text-blue-500">Company</a>
        <a href="#" className="hover:text-blue-500">Extras</a>
      </div>

      {/* Notification and Profile Icons */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <span className="material-icons text-blue-500">notifications</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </div>
        <div className="relative">
          <span className="material-icons text-green-500">mail</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
        </div>
        <span className="material-icons text-yellow-500">account_circle</span>
      </div>
    </nav>
  );
};

export default Navbar;

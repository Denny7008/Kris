import React from "react";
import logo from "../../assets/kris logo 3.png";
import axios from "axios";
import { toast } from "react-toastify";
const Navbar = () => {


  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/user/logout");
      localStorage.removeItem("token");
        window.location.href = "/"; 
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };
  


  return (
    <nav className="bg-white shadow h-20 px-10 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <div className="w-32">
          <img src={logo} alt="logo" />
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-gray-700 text-lg items-center">
        <a href="#" className="hover:text-blue-500">Dashboard</a>
        <a href="#" className="hover:text-blue-500">Requests</a>
        <a href="#" className="hover:text-blue-500">Payroll</a>
        <a href="#" className="hover:text-blue-500">Company</a>
        <a href="#" className="hover:text-blue-500">Extras</a>
        <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
  Logout
</button>

      </div>

      {/* Notification and Profile Icons */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <span className="material-icons text-blue-500 text-3xl">notifications</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
        </div>
        <div className="relative">
          <span className="material-icons text-green-500 text-3xl">mail</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
        </div>
        <div className="relative">
        <span className="material-icons text-yellow-500 text-3xl">account_circle</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

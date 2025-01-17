import React from "react";
import meeting from "../../assets/meeting.png"; // Path to your background image
import logo from "../../assets/kris logo 2.svg"; // Path to your logo image
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${meeting})` }} // Set the background image here
    >
      {/* Bluish Overlay */}
      <div className="absolute inset-0 bg-blue-950 opacity-90 z-0"></div>

      {/* Semi-transparent overlay box on top of the blue tint */}
      <div className="bg-blue-950 bg-opacity-90 p-10 rounded-lg shadow-lg max-w-md w-full relative z-10">
        <div className="text-center mb-8">
          {/* Logo */}
          <img
            src={logo}
            alt="Kris Logo"
            className="mx-auto mb-6 w-24" // Adjust the width to make it similar to the design
          />
          {/* Title and Description */}
          <h2 className="text-3xl font-bold text-white mb-2">Login</h2>
          <p className="text-gray-300">Login to your account.</p>
        </div>

        {/* Form Section */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-semibold mb-2"
            >
              E-mail Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white text-sm font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me and Reset Password */}
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center text-white">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              Reset Password?
            </a>
          </div>

          {/* Submit Button */}
          <Link
            to="AdminDashboard"
            type="submit"
            className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Sign In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
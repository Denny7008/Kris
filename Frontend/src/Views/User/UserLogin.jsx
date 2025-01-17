import React from "react";
import handshake from "../../assets/handshake.png";
import logo from "../../assets/kris logo 3.svg"
import { Link } from "react-router-dom";
const UserLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        {/* Left side - Login form */}
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4"><img src={logo} alt="" /></h2>
          <p className="mb-8 text-gray-600">Login to your account.</p>
          <form>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                E-mail Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <a
                href="#"
                className="text-blue-500 hover:underline text-sm font-semibold"
              >
                Reset Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-gray-600 text-center">
            Don’t have an account yet?{" "}
            <Link to='/user/register' className="text-blue-500 font-bold hover:underline">
              Join KRIS today.
            </Link>
          </p>
        </div>
        {/* Right side - Image & Info */}
        <div className="w-1/2 relative bg-blue-900 text-white p-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-70">
            <img className="h-full" src={handshake} alt="" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold">
              Manage all <span className="text-yellow-400">HR Operations</span>{" "}
              from the comfort of your home.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;

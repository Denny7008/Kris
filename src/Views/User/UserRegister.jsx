import React from "react";
import stock from "../../assets/stock.png"
import logo from "../../assets/kris logo 2.svg"
const UserRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-5xl w-full">
        {/* Left side - Info section with background */}
        <div
          className="w-1/2 relative p-8 flex items-center justify-center"
          style={{
            backgroundImage: `url(${stock})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-blue-950 opacity-85"></div>
          <div className="relative z-10 text-white text-center">
            <img src={logo} alt="Kris Logo" className="mb-6" />
            <h2 className="text-3xl font-bold mb-4">HR Management Platform</h2>
            <p className="mb-6">
              Manage all employees, payrolls, and other human resource
              operations.
            </p>
            <div className="flex space-x-4 justify-center">
              <button className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-300">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-white font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-900 transition duration-300">
                Our Features
              </button>
            </div>
          </div>
        </div>

        {/* Right side - Registration form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Welcome to KRIS
          </h2>
          <p className="mb-8 text-gray-600">Register your account</p>
          <form>
            <div className="grid grid-cols-2 gap-6">
              <div className="mb-6">
                <label
                  htmlFor="first-name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="First Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="last-name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
                  placeholder="Email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
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
                  placeholder="Password"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirm-password"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">
                  Yes, I want to receive KRIS newsletters
                </span>
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">
                  I agree to all the{" "}
                  <a href="#" className="text-blue-500 hover:underline">
                    Terms, Privacy Policy
                  </a>
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Create Account
            </button>

            <p className="mt-6 text-gray-600 text-center">
              Already have an account?{" "}
              <a href="#" className="text-blue-500 font-bold hover:underline">
                Log In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;

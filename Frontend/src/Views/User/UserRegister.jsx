
import React, { useState } from "react";
import stock from "../../assets/stock.png";
import logo from "../../assets/kris logo 2.svg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    receiveNewsletters: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          receiveNewsletters: formData.receiveNewsletters,
          agreeTerms: formData.agreeTerms,
        }),
      });
  
      let data;
      try {
        // Attempt to parse the response as JSON
        data = await response.json();
      } catch (err) {
        // Handle empty or invalid JSON
        data = null;
      }
  
      if (response.ok) {
        toast.success(data?.message || "Account created successfully!");
        // Optionally reset the form or redirect the user
      } else {
        toast.error(data?.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error during registration:", error);
    }
  };
  

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
          <form onSubmit={handleSubmit}>
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
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
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
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="receiveNewsletters"
                  checked={formData.receiveNewsletters}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2 text-gray-600">
                  Yes, I want to receive KRIS newsletters
                </span>
              </label>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="form-checkbox"
                />
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

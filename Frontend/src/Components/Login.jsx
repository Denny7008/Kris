import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import handshake from "../assets/handshake.png";
import logo from "../assets/kris logo 3.svg";


const Login = ({ userType }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // ✅ Pehle `email` bhejke check karo ki yeh Admin hai ya User
      const checkResponse = await axios.post("http://localhost:5000/check-role", { email });
  
      const { role } = checkResponse.data; // role "admin" ya "user" milega
      console.log(role); //
  
      if (!role) {
        setError("Email not found in the system.");
        return;
      }
  
      // ✅ Jo role mila, uske hisaab se API hit karo
      const endpoint =
        role === "admin"
          ? "http://localhost:5000/admin/login"
          : "http://localhost:5000/user/login";
  
      const loginResponse = await axios.post(endpoint, { email, password });
  
      console.log("Login successful:", loginResponse.data);
  
      localStorage.setItem("token", loginResponse.data.token);
      localStorage.setItem("role", role);
  
      // ✅ Redirect based on role
      navigate(role === "admin" ? "/admin/dashboard" : "/user/dashboard", { replace: true });
  
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid credentials.");
    }
  };
  
  
  
  
  
  
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex max-w-4xl w-full">
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-bold text-blue-800 mb-4">
            <img src={logo} alt="KRIS Logo" />
          </h2>
          <p className="mb-8 text-gray-600">Login to your account.</p>
          <form onSubmit={handleLogin}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">E-mail Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
            </div>
            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <Link to={`/${userType}/forgot-password`} className="text-blue-500 hover:underline text-sm font-semibold">
                Forgot Password?
              </Link>
            </div>
            <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              Sign In
            </button>
          </form>
          <p className="mt-6 text-gray-600 text-center">
            Don’t have an account yet? <Link to={`/${userType}/register`} className="text-blue-500 font-bold hover:underline">Join KRIS today.</Link>
          </p>
        </div>
        <div className="w-1/2 relative bg-blue-900 text-white p-8 flex items-center justify-center">
          <div className="absolute inset-0 bg-opacity-70">
            <img className="h-full" src={handshake} alt="Handshake" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold">Manage all <span className="text-yellow-400">HR Operations</span> from the comfort of your home.</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;





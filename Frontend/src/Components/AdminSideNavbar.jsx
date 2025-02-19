import React, { useState, useEffect, useRef } from "react";
import logo from "../assets/kris logo 2.svg"; // Path to your logo image
import dp from "../assets/dp 1.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { UserPen } from "lucide-react";

const AdminSideNavbar = () => {

  const [profilePic, setProfilePic] = useState("https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg");
  const imageInputRef = useRef(null);
  

  const [admin, setAdmin] = useState(null); // State to store admin data
  const [adminId, setAdminId] = useState(null); // State to store admin ID

  
  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/admin");
        console.log("API Response:", response.data.admins[0]._id);

        if (response.data.admins && response.data.admins.length > 0) {
          const firstAdmin = response.data.admins[0];
          setAdmin(firstAdmin); // Store admin details
          setAdminId(firstAdmin._id); // Set the first admin in the state
        }
        fetchProfileImage();
      } catch (error) {
        console.error("Error fetching admin data:", error);
      }
    };
    fetchAdminData();
  }, []);




  const handleImageClick = () => {
    imageInputRef.current?.click();
  };


  // Handle image selection
  const handleImageChange = async (e) => {
    console.log("ADMIN ID before upload:", adminId);
    
    if (!adminId) {
      alert("Admin ID is missing. Cannot upload image.");
      return;
    }

    const file = e.target.files[0];
    if (file) {
      await uploadToBackend(file, adminId);
    }
  };


  // const uploadToBackend = async (file, adminId) => {
  //   const formData = new FormData();
  //   formData.append("image", file);
  //   formData.append("adminId", adminId);

  //   try {
  //     const response = await axios.post(
  //      `http://localhost:5000/admin/upload-profile/${adminId}`,
  //       formData,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );

  //     setProfilePic(response.data.imageUrl);
  //     alert("Image uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //     alert("Failed to upload image.");
  //   }
  // };
  // console.log(uploadToBackend);


  const uploadToBackend = async (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
  
    reader.onload = async () => {
      try {
        const base64String = reader.result.split(",")[1]; // Remove the "data:image/png;base64," part
  
        const response = await axios.post(
          `http://localhost:5000/admin/upload-profile/${adminId}`,
          { profilePic: base64String },
          { headers: { "Content-Type": "application/json" } }
        );
  
        console.log("Upload success:", response.data);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  };
  
  



  // const fetchProfileImage = async () => {
  //   if (!adminId) return;

  //   try {
  //     const response = await axios.get(`http://localhost:5000/admin/profile-image/${adminId}`);
  //     setProfilePic(response.data.imageUrl); // Set the Base64 image
  //   } catch (error) {
  //     // console.error("Error fetching profile image:", error.response?.data || error.message);
  //     console.log("Error fetching profile image:", error);
  //   }
  // };


  const fetchProfileImage = async () => {
    if (!adminId) return;
  
    try {
      const response = await axios.get(
        `http://localhost:5000/admin/profile-image/${adminId}`
      );
  
      if (response.data.imageUrl) {
        setProfilePic(`data:${response.data.contentType};base64,${response.data.imageUrl}`);
      }
    } catch (error) {
      console.log("Error fetching profile image:", error);
    }
  };
  

  

  return (
    <div className="flex flex-col w-64 h-auto bg-blue-900 text-white shadow-md">
      <img
        className="w-[193px] h-[52px] top-[7px] left-[67px] gap-0 opacity-100"
        src={logo}
        alt="Logo"
      />
      {/* Logo Section */}
      <div className="flex items-center justify-center h-20">
        <div className="flex justify-center relative">
          <div className="rounded-full bg-yellow-400 w-20 h-20 flex items-center justify-center overflow-hidden">
            <img className="w-20 h-20" src={profilePic} alt="Profile" />
            <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
          </div>
          <div className="absolute translate-x-9 translate-y-2 bg-slate-800 rounded-full p-1">
            <UserPen
              onClick={handleImageClick}
              className="cursor-pointer"
              size={15}
            />
          </div>
        </div>
        <div className="ml-4">
          {/* <h2 className="text-xl font-semibold">{admin.firstName} {admin.lastName}</h2> */}
          {admin ? (
            <>
              <h2 className="text-xl font-semibold">
                {admin.firstName} {admin.lastName}
              </h2>
              <p className="text-sm">Admin</p>
            </>
          ) : (
            <p className="text-sm">Loading...</p>
          )}
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col mt-6 pl-3">
        <NavLink
          to="/admin/login/AdminDashboard/JobPanels"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">dashboard</span>
          <span className="ml-2">Dashboard</span>
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">mail</span>
          <span className="ml-2">Messages</span>
          <span className="ml-auto text-red-500">13</span>
        </NavLink>
        <h3 className="mt-4 mb-2 font-semibold">Recruitment</h3>
        <NavLink
          to="/admin/login/AdminDashboard/jobportal"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">work</span>
          <span className="ml-2">Jobs</span>
        </NavLink>
        <NavLink
          to="/admin/login/AdminDashboard/candidates"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">group</span>
          <span className="ml-2">Candidates</span>
        </NavLink>
        <NavLink
          to="/admin/login/AdminDashboard/Test"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">description</span>
          <span className="ml-2">Resumes</span>
        </NavLink>
        <h3 className="mt-4 mb-2 font-semibold">Organization</h3>
        <NavLink
          to="/admin/login/AdminDashboard/EmployeeManagement"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">people</span>
          <span className="ml-2">Employee Management</span>
        </NavLink>
        <NavLink
          to="/admin/login/AdminDashboard/LeaveManagement"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">book</span>
          <span className="ml-2">Leave Management</span>
        </NavLink>
        <NavLink
          to="/admin/login/AdminDashboard/PerformanceManagement"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">assessment</span>
          <span className="ml-2">Performance Management</span>
        </NavLink>
        <h3 className="mt-4 mb-2 font-semibold">KRIS Pay</h3>
        <NavLink
          to="/admin/login/AdminDashboard/payroll"
          className={({ isActive }) =>
            `flex items-center p-2 mb-2 rounded-lg ${
              isActive ? "bg-yellow-400 text-black" : "hover:bg-blue-800"
            }`
          }
        >
          <span className="material-icons">attach_money</span>
          <span className="ml-2">Payroll Management</span>
        </NavLink>
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
};

export default AdminSideNavbar;

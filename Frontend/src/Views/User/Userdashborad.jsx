import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";


const Userdashborad =  () => {

  const [userName, setUserName] = useState(""); // State to store user name
  const [jobTitle, setJobTitle] = useState(""); // State to store user name
  const [error, setError] = useState(null); // Error state

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!token) {
        setError("No authentication token found. Please log in.");
        return;
      }

      try {
        // Fetch user data using the token
        const userResponse = await axios.get(
          "http://localhost:5000/get-user-data",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(userResponse);

        const fetchedUserName = userResponse.data.name;
        console.log(fetchedUserName);

        if (!fetchedUserName) {
          console.error("Error: User name is missing.");
          return;
        }
        setUserName(fetchedUserName); 

        const fetchedJobTitle = userResponse.data.jobTitle;
        console.log(fetchedJobTitle);
        
        if (!fetchedJobTitle) {
          console.error("Error: Job Title is missing.");
          return;
        }
        setJobTitle(fetchedJobTitle);

        
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [token]);
  



  
      



  return (
    <div className="bg-[#E3EDF9] min-h-screen p-6">
        {/* Header Section */}
        <div className="bg-blue-500 text-white rounded-lg p-6 mb-6 shadow-lg flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{userName || "User"}</h1>
            <p className="text-lg">{jobTitle || "JobTitle"}</p>
          </div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500">
            Edit Profile
          </button>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-wrap justify-center gap-8 mb-6">
          <Link to="/userlogin/dashboard/leaveapply">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              Apply for Leave
            </button>
          </Link>
          <Link to="/apply-for-leave">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              KPI Goals
            </button>
          </Link>
          <Link to="/apply-for-leave">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              Take Appraisal
            </button>
          </Link>
          <Link to="/update-profile">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              View Payslip
            </button>
          </Link>
          <Link to="/userlogin/dashboard/updatingjsx">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              Update Profile
            </button>
          </Link>
          <Link to="/updatingjsx">
            <button className="bg-white text-lg text-blue-600 p-4 rounded-lg shadow hover:bg-blue-100">
              Events
            </button>
          </Link>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Leave Days */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Available Leave Days</h2>
            <ul className="space-y-2">
              {[
                { type: "Annual Leave", value: "10 of 40 days" },
                { type: "Sick Leave", value: "0 of 10 days" },
                { type: "Compassionate Leave", value: "8 of 15 days" },
              ].map((leave) => (
                <li key={leave.type}>
                  <p className="text-gray-700">{leave.type}</p>
                  <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full"
                      style={{
                        width: `${
                          (parseInt(leave.value.split(" ")[0]) /
                            parseInt(leave.value.split(" ")[2])) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{leave.value}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* To-Dos */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">To-dos</h2>
            <ul className="space-y-2">
              {[
                "Complete Onboarding Document Upload",
                "Follow up on clients on documents",
                "Design alternatives for LMS",
                "Create case study for next IT project",
                "Follow up on clients on documents",
              ].map((todo, index) => (
                <li
                  key={index}
                  className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg"
                >
                  {todo}
                </li>
              ))}
            </ul>
          </div>

          {/* Announcements */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Announcement(s)</h2>
            <ul className="space-y-2">
              {[
                "Welcome Jill: We have a new staff joining us.",
                "Send drafts for Project Manager.",
                "Marriage Alert.",
                "Office Space Update.",
              ].map((announcement, index) => (
                <li key={index} className="text-gray-700">
                  {announcement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Birthdays */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">Birthdays</h2>
            <ul className="space-y-4">
              {[
                "Jillian's Day - April 25th",
                "Jillian's Day - April 25th",
                "Jillian's Day - April 25th",
              ].map((birthday, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{birthday}</span>
                  <button className="bg-yellow-400 text-black px-4 py-1 rounded hover:bg-yellow-500">
                    Send Wishes
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Performance Appraisal */}
          <div className="bg-white rounded-lg p-6 shadow">
            <h2 className="text-xl font-semibold mb-4">
              Performance Appraisal
            </h2>
            <div className="w-full h-40 bg-blue-100 rounded-lg flex items-center justify-center">
              <p className="text-blue-600">[Bar Chart Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Userdashborad;

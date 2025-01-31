// import React from "react";
// import logo from "../../assets/kris logo 3.png";
// import axios from "axios";
// import { toast } from "react-toastify";
// const Navbar = () => {


//   const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/user/logout");
//       localStorage.removeItem("token");
//         window.location.href = "/"; 
//     } catch (error) {
//       console.error("Error logging out:", error);
//       toast.error("Failed to log out. Please try again.");
//     }
//   };
  

  


//   return (
//     <nav className="bg-white shadow h-20 px-10 flex justify-between items-center">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="w-32">
//           <img src={logo} alt="logo" />
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex space-x-8 text-gray-700 text-lg items-center">
//         <a href="#" className="hover:text-blue-500">Dashboard</a>
//         <a href="#" className="hover:text-blue-500">Requests</a>
//         <a href="#" className="hover:text-blue-500">Payroll</a>
//         <a href="#" className="hover:text-blue-500">Company</a>
//         <a href="#" className="hover:text-blue-500">Extras</a>
//         <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded">
//   Logout
// </button>

//       </div>

//       {/* Notification and Profile Icons */}
//       <div className="flex items-center space-x-6">
//         <div className="relative">
//           <span className="material-icons text-blue-500 text-3xl">notifications</span>
//           <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">2</span>
//         </div>
//         <div className="relative">
//           <span className="material-icons text-green-500 text-3xl">mail</span>
//           <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
//         </div>
//         <div className="relative">
//         <span className="material-icons text-yellow-500 text-3xl">account_circle</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";
// import logo from "../../assets/kris logo 3.png";

// const Navbar = () => {
//   const [notifications, setNotifications] = useState([]);
//   const [isDropdownOpen, setDropdownOpen] = useState(false);

//   const userId = "6798f00feadde8d9e96ea6f7"; // Replace with dynamic user ID (use context or props)

//   // Fetch unread notifications
//   useEffect(() => {
//     const fetchNotifications = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/notifications/${userId}`);
//         setNotifications(response.data);
//       } catch (error) {
//         console.error("Error fetching notifications:", error);
//       }
//     };

//     fetchNotifications();
//   }, []);

//     const handleLogout = async () => {
//     try {
//       await axios.post("http://localhost:5000/user/logout");
//       localStorage.removeItem("token");
//         window.location.href = "/"; 
//     } catch (error) {
//       console.error("Error logging out:", error);
//       toast.error("Failed to log out. Please try again.");
//     }
//   };

//   // Mark notifications as read
//   const markAsRead = async () => {
//     try {
//       await axios.put(`http://localhost:5000/api/notifications/read/${userId}`);
//       setNotifications([]); // Clear notifications after marking as read
//     } catch (error) {
//       toast.error("Failed to mark notifications as read");
//     }
//   };

//   return (
//     <nav className="bg-white shadow h-20 px-10 flex justify-between items-center">
//       {/* Logo Section */}
//       <div className="flex items-center">
//         <div className="w-32">
//           <img src={logo} alt="logo" />
//         </div>
//       </div>

//       {/* Navigation Links */}
//       <div className="flex space-x-8 text-gray-700 text-lg items-center">
//         <a href="#" className="hover:text-blue-500">Dashboard</a>
//         <a href="#" className="hover:text-blue-500">Requests</a>
//         <a href="#" className="hover:text-blue-500">Payroll</a>
//         <a href="#" className="hover:text-blue-500">Company</a>
//         <a href="#" className="hover:text-blue-500">Extras</a>
//         <button onClick={() => handleLogout()} className="bg-red-500 text-white px-4 py-2 rounded">
//           Logout
//         </button>
//       </div>

//       {/* Notification and Profile Icons */}
//       <div className="flex items-center space-x-6">
//         {/* Notification Icon */}
//         <div className="relative">
//           <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
//             <span className="material-icons text-blue-500 text-3xl">notifications</span>
//             {notifications.length > 0 && (
//               <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                 {notifications.length}
//               </span>
//             )}
//           </button>

//           {/* Dropdown Notification List */}
//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-2 w-60 bg-white shadow-md rounded-lg p-2 z-50">
//               {notifications.length > 0 ? (
//                 <>
//                   <ul>
//                     {notifications.map((notif) => (
//                       <li key={notif._id} className="text-sm p-2 border-b last:border-none">
//                         {notif.message}
//                       </li>
//                     ))}
//                   </ul>
//                   <button onClick={markAsRead} className="w-full text-center text-blue-600 mt-2">
//                     Mark all as read
//                   </button>
//                 </>
//               ) : (
//                 <p className="text-sm text-gray-500 p-2">No new notifications</p>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Mail Icon */}
//         <div className="relative">
//           <span className="material-icons text-green-500 text-3xl">mail</span>
//           <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
//         </div>

//         {/* Profile Icon */}
//         <div className="relative">
//           <span className="material-icons text-yellow-500 text-3xl">account_circle</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import logo from "../../assets/kris logo 3.png";

const Navbar = () => {
  const [notifications, setNotifications] = useState([]);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUserId(userData.id); // Ensure this matches your API response structure
    }
  }, []);

  // Fetch unread notifications when userId is available
  useEffect(() => {
    if (!userId) return;

    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/notifications/${userId}`);
        setNotifications(response.data);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [userId]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:5000/user/logout");
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out:", error);
      toast.error("Failed to log out. Please try again.");
    }
  };

  // Mark notifications as read
  const markAsRead = async () => {
    try {
      await axios.put(`http://localhost:5000/api/notifications/read/${userId}`);
      setNotifications([]); // Clear notifications after marking as read
    } catch (error) {
      toast.error("Failed to mark notifications as read");
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
        {/* Notification Icon */}
        <div className="relative">
          <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <span className="material-icons text-blue-500 text-3xl">notifications</span>
            {notifications.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                {notifications.length}
              </span>
            )}
          </button>

          {/* Dropdown Notification List */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white shadow-md rounded-lg p-2 z-50">
              {notifications.length > 0 ? (
                <>
                  <ul>
                    {notifications.map((notif) => (
                      <li key={notif._id} className="text-sm p-2 border-b last:border-none">
                        {notif.message}
                      </li>
                    ))}
                  </ul>
                  <button onClick={markAsRead} className="w-full text-center text-blue-600 mt-2">
                    Mark all as read
                  </button>
                </>
              ) : (
                <p className="text-sm text-gray-500 p-2">No new notifications</p>
              )}
            </div>
          )}
        </div>

        {/* Mail Icon */}
        <div className="relative">
          <span className="material-icons text-green-500 text-3xl">mail</span>
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">4</span>
        </div>

        {/* Profile Icon */}
        <div className="relative">
          <span className="material-icons text-yellow-500 text-3xl">account_circle</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

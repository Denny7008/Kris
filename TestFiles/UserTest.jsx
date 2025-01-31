import { useEffect, useState } from "react";
import { Bell } from "lucide-react"; // Install 'lucide-react' for icons
import axios from "axios";
import { Link } from "react-router-dom";

const TestNav = ({ userId }) => {
  const [notificationCount, setNotificationCount] = useState(0);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/notifications/${userId}`);
        setNotificationCount(response.data.length);
      } catch (error) {
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [userId]);

  return (
    <div className="flex justify-between items-center p-4 bg-blue-900 text-white">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <Link to="/notifications" className="relative">
        <Bell size={24} />
        {notificationCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            {notificationCount}
          </span>
        )}
      </Link>
    </div>
  );
};

export default TestNav;

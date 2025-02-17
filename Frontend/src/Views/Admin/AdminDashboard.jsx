import React from "react";
import rec1 from "../../assets/Rectangle 34.png";
import rec2 from "../../assets/Rectangle 36.png";
import rec3 from "../../assets/Rectangle 38.png";
import jhon from "../../assets/Ellipse 8.png";
import gina from "../../assets/Ellipse 13.png";
import loe from "../../assets/Ellipse 14.png";
import AdminSideNavbar from "../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../Components/AdminUpperNavbar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />

      <div className="flex-col flex-1">
        <AdminUpperNavbar/>

        {/* MainContent  */}
        <div className="p-2">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;


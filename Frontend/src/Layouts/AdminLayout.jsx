import React from "react";
import { Outlet } from "react-router-dom";
import AdminSideNavbar from "../Components/AdminSideNavbar";
import AdminUpperNavbar from "../Components/AdminUpperNavbar";


const AdminLayout = () => {


  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col flex-1">
        <AdminUpperNavbar />
        {/* MainContent  */}
        <div className="p-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
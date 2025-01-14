import React from "react";
import rec1 from "../../assets/Rectangle 34.png";
import rec2 from "../../assets/Rectangle 36.png";
import rec3 from "../../assets/Rectangle 38.png";
import jhon from "../../assets/Ellipse 8.png";
import gina from "../../assets/Ellipse 13.png";
import loe from "../../assets/Ellipse 14.png";
import AdminSideNavbar from "../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../Components/AdminUpperNavbar";
import JobPanels from "./pages/JobPanels";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const jobs = [
    {
      title: "Sales Executive",
      company: "Access Bank",
      logo: rec1,
      time: "20mins ago",
    },
    {
      title: "User Experience Designer",
      company: "Paystack",
      logo: rec2,
      time: "10mins ago",
    },
    {
      title: "Product Manager",
      company: "T-Pay",
      logo: rec3,
      time: "5mins ago",
    },
  ];

  const employees = [
    { name: "John Doe", role: "Product Manager", avatar: jhon },
    { name: "Ginna Loe", role: "Sales Executive", avatar: gina },
    { name: "John Dore", role: "UI/UX Designer", avatar: loe },
  ];

  const candidates = [
    {
      name: "John Doe",
      appliedFor: "Product Manager",
      atsScore: 80,
      time: "5mins ago",
      logo: jhon,
    },
    {
      name: "Ginna Loe",
      appliedFor: "Sales Executive",
      atsScore: 30,
      time: "10mins ago",
      logo: gina,
    },
    {
      name: "James Foe",
      appliedFor: "Product Manager",
      atsScore: 80,
      time: "5mins ago",
      logo: loe,
    },
  ];

  const payrolls = [
    { name: "John Doe", salary: "₦600,000", status: "Paid", logo: jhon },
    { name: "Ginna Loe", salary: "₦150,000", status: "Processing", logo: gina },
    { name: "James Foe", salary: "₦150,000", status: "Processing", logo: loe },
  ];
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

import "./App.css";
import UserLogin from "./Views/User/UserLogin";
import { Routes, Route } from "react-router-dom";
import UserRegister from "./Views/User/UserRegister";
import Adminlogin from "./Views/Admin/Adminlogin";
import AdminSideNavbar from "./Components/AdminSideNavbar";
import AdminDashboard from "./Views/Admin/AdminDashboard";
import LeaveManagement from "./Views/Admin/pages/LeaveManagement";
import AdminUpperNavbar from "./Components/AdminUpperNavbar";
import Leaverecall from "./Views/Admin/pages/Leaverecall";
import LeaveHistory from "./Views/Admin/pages/Leavehistory";
import Leavesetings from "./Views/Admin/pages/Leavesetings";
import ApplyforLeave from "./Views/User/ApplyforLeave";

import Usernavbar from "./Views/User/Usernavbar";
import AnnualLeave from "./Views/User/AnnualLeave";
import Sickleave from "./Views/User/Sickleave";
import UpdateProfie from "./Views/User/UpdateProfie";

function App() {
  return (
    <>
      <Routes>
        
        <Route path="/admin/login" element={<Adminlogin />} />
        <Route path="/navbar" element={<AdminSideNavbar />} />
        <Route
          path="/admin/login/AdminDashboard"
          element={<AdminDashboard />}
        />
        <Route path="/admin/login/AdminDashboard/LeaveManagement" element={<LeaveManagement />}>
          <Route path="settings" element={<Leavesetings />} />
          <Route path="recall" element={<Leaverecall />} />
          <Route path="history" element={<LeaveHistory />} />
          {/* <Route path="relief" element={<ReliefOfficers />} /> */}
        </Route>

        <Route path="/upper" element={<AdminUpperNavbar />} />
        <Route path="/recall" element={<Leaverecall />} />
        <Route path="/leavehistory" element={<LeaveHistory />} />

        {/* user routes */}
        <Route path="/" element={<UserLogin />} />
        <Route path="/userdash" element={<Usernavbar/>} />
        <Route path="/user/register" element={<UserRegister />} />
        <Route path="/leaveapply" element={<ApplyforLeave/>}/>
        <Route path="/annualleave" element={<AnnualLeave/>}/>
        <Route path="/sickleave" element={<Sickleave/>}/>
        <Route path="/update" element={<UpdateProfie/>}/>






      </Routes>
    </>
  );
}

export default App;

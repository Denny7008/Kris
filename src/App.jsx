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

import EmployeeManagement from "./Views/Admin/pages/EmployeeManagement";
import EmployeeProfile from "./Views/Admin/pages/EmployeeProfile";
import ContactDetails from "./Views/Admin/pages/ContactDetails";
import KinPage from "./Views/Admin/pages/KinPage";
import Equalification from "./Views/Admin/pages/Equalification";
import AcademicRecords from "./Views/Admin/pages/AcademicRecords";
import ProfessionalDetails from "./Views/Admin/pages/ProfessionalDetails";
import AcaDetails from "./Views/Admin/pages/AcaDetails";
import Gurantor from "./Views/Admin/pages/Gurantor";
import ViewGurantor from "./Views/Admin/pages/ViewGurantor";
import FamilyDetails1 from "./Views/Admin/pages/FamilyDetails";
import ViewFamilyDetails from "./Views/Admin/pages/ViewFamilyDetails";
import JobDetails1 from "./Views/Admin/pages/JobDetails";
import ViewJob from "./Views/Admin/pages/ViewJob";
import FinancialDetails from "./Views/Admin/pages/FinancialDetails";
import PerformanceManagement from "./Views/Admin/pages/PerformanceManagement";
import TargetSetup from "./Views/Admin/pages/TargetSetup";
import ManageTargets from "./Views/Admin/pages/ManageTargets";



import UpdateProfie from "./Views/User/UpdateProfie";
import Contact from "./Views/User/ContactDetails";
import NextDetails from "./Views/User/NextDetails";
import EducationQualifications from "./Views/User/Educational";
import GuarantorDetails from "./Views/User/GurantorDetails";
import FamilyDetails from "./Views/User/FamilyDetails";
import JobDetails from "./Views/User/JobDetails";
import UploadDocuments from "./Views/User/UploadDocs";
import ViewDocuments from "./Views/User/ViewDocs";
import FinancialDocs from "./Views/User/FinancialDocs";
import UpdateAcademicDetailsForm from "./Views/User/UpdateEdu";

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
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/next" element={<NextDetails/>}/>
        <Route path="/education" element={<EducationQualifications/>}/>
        <Route path="/grt" element={<GuarantorDetails/>}/>
        <Route path="/family" element={<FamilyDetails/>}/>
        <Route path="/job" element={<JobDetails/>}/>
        <Route path="/docs" element={<UploadDocuments/>}/>
        <Route path="/viewdocs" element={<ViewDocuments/>}/>
        <Route path="/findocs" element={<FinancialDocs/>}/>
        <Route path="/upedu" element={<UpdateAcademicDetailsForm/>}/>





  


        {/* Admin routes */}
        <Route path="/emanagement" element={<EmployeeManagement/>}/>
        <Route path="/eprofile" element={<EmployeeProfile/>}/>
        <Route path="/contact-details" element={<ContactDetails/>}/>
        <Route path="/kinpage" element={<KinPage/>}/>
        <Route path="/equalification" element={<Equalification/>}/>
        <Route path="/records" element={<AcademicRecords/>}/>
        <Route path="/profes" element={<ProfessionalDetails/>}/>
        <Route path="/adetails" element={<AcaDetails/>}/>
        <Route path="/gurantor" element={<Gurantor/>}/>
        <Route path="/viewgurant" element={<ViewGurantor/>}/>
        <Route path="/familydetails" element={<FamilyDetails1/>}/>
        <Route path="/viewfam" element={<ViewFamilyDetails/>}/>
        <Route path="/jobdetails" element={<JobDetails1/>}/>
        <Route path="/viewjob" element={<ViewJob/>}/>
        <Route path="/financialdetails" element={<FinancialDetails/>}/>
        <Route path="/performance" element={<PerformanceManagement/>}/>
        <Route path="/targetsetup" element={<TargetSetup/>}/>
        <Route path="/managetargets" element={<ManageTargets/>}/>






      </Routes>
    </>
  );
}

export default App;

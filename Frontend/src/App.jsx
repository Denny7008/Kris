import "./App.css";
import UserLogin from "./Views/User/UserLogin";
import { Routes, Route, Navigate } from "react-router-dom";
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
import ViewJob from "./Views/Admin/pages/ViewJobDetails";
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

import Upddating from "./Views/User/Updating";
import Test from "./Views/Admin/pages/Test";
import JobPanels from "./Views/Admin/pages/JobPanels";
import PersonalDetails from "./Views/Admin/pages/PersonalDetails";
import NextOfKinDetails from "./Views/Admin/pages/KinPage";
import ViewGuarantorDetails from "./Views/Admin/pages/ViewGuarantorDetails";
import ViewJobDetails from "./Views/Admin/pages/ViewJobDetails";

import Dashboard from "./Views/User/Dashboard";
import Userdashborad from "./Views/User/Userdashborad";
import Navbar from "./Views/User/Usernavbar";
import Testexp from "./Views/User/Testexp";
import NotFound from "./Components/NotFound";
import LeaveDashboard from "./Views/User/ApplyforLeave";
import EditProfile from "./Views/Admin/pages/EditProfile";
import { ToastContainer } from 'react-toastify';  // Correct named imports
import 'react-toastify/dist/ReactToastify.css';
import LeaveRecallForm from "./Views/Admin/pages/LeaveRecallForm";
import LeaveInitiateNotification from "./Views/User/LeaveInitiateNotification";
import Navbarr from "../../TestFiles/UserTest";
import TestNav from "../../TestFiles/UserTest";
import PayrollDashboard from "./Views/Admin/pages/PayrollDashboard";
import ForgotPassword from "./Views/User/ForgotPassword";
import ResetPassword from "./Views/User/ResetPassword";
import Practical from "../../TestFiles/Practical";
import AdminJobManagement from "./Views/Admin/pages/AdminJobManagement";
import Candidates from "./Views/Admin/pages/Candidates";
import JobApplicationForm from "./Views/Admin/pages/JobApplicationForm";
import JobDetailPage from "./Views/Admin/pages/JobDetailPage";

function App() {
  return (
    <>
    <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/admin/login" element={<Adminlogin />} />
        <Route path="/navbar" element={<AdminSideNavbar />} />
        <Route
          path="/admin/login/AdminDashboard"
          element={<AdminDashboard />}
        />
        <Route
          path="/admin/login/AdminDashboard/LeaveManagement"
          element={<LeaveManagement />}
        >
          <Route path="settings" element={<Leavesetings />} />
          <Route path="recall" element={<Leaverecall />} />
          <Route path="history" element={<LeaveHistory />} />
          {/* <Route path="relief" element={<ReliefOfficers />} /> */}
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/admin/login/AdminDashboard" element={<AdminDashboard />}>
          {/* Default Route */}
          <Route index element={<Navigate to="JobPanels" replace />} />

          {/* Nested Subroutes */}
          <Route path="JobPanels" element={<JobPanels />} />
          <Route path="Test" element={<Test />} />
          <Route path="edit" element={<EditProfile />} />
          {/* <Route path="/admin/login/AdminDashboard/EmployeeManagement/edit" element={<EditProfile />} /> */}
          <Route path="LeaveManagement" element={<LeaveManagement />} />
          <Route path="EmployeeManagement" element={<EmployeeManagement />} />
          <Route path="ContactDetails" element={<ContactDetails />} />
          <Route path="PersonalDetails" element={<PersonalDetails />} />
          <Route path="KinDetails" element={<NextOfKinDetails />} />
          <Route path="GuarantorDetails" element={<GuarantorDetails />} />
          <Route path="GuarantorDetails" element={<ViewGuarantorDetails />} />
          <Route path="ViewFamily" element={<ViewFamilyDetails />} />

          <Route path="FinancialDetails" element={<FinancialDetails />} />
          <Route path="ManageTargets" element={<ManageTargets />} />
          <Route path="PerformanceManagement" element={<PerformanceManagement />} />
          <Route path="payroll" element={<PayrollDashboard />}/>
          <Route path="jobportal" element={<AdminJobManagement/>}/>
          <Route path="candidates" element={<Candidates />} />
        </Route>

        <Route path="JobDetails" index element={<ViewJobDetails />} replace />
        <Route path="*" element={<NotFound />} />

        {/* user dashboard routes */}

        <Route path="/upper" element={<AdminUpperNavbar />} />
        <Route path="/recall" element={<Leaverecall />} />
        <Route path="/leavehistory" element={<LeaveHistory />} />

        {/* user routes */}
        <Route path="/" element={<UserLogin />} />
        
        <Route path="/userdash" element={<Usernavbar />} />
        <Route path="/user/register" element={<UserRegister />} />

        <Route path="/leaveapply" element={<ApplyforLeave />} />
        <Route path="/annualleave" element={<AnnualLeave />} />
        <Route path="/sickleave" element={<Sickleave />} />
        <Route path="/update" element={<UpdateProfie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/next" element={<NextDetails />} />
        <Route path="/education" element={<EducationQualifications />} />
        <Route path="/grt" element={<GuarantorDetails />} />
        <Route path="/family" element={<FamilyDetails />} />

        <Route path="/docs" element={<UploadDocuments />} />
        <Route path="/view-documents" element={<ViewDocuments />} />
        <Route path="/findocs" element={<FinancialDocs />} />
        <Route path="/upedu" element={<UpdateAcademicDetailsForm />} />
        <Route path="/updatingjsx" element={<Upddating />} />

        {/* Admin routes */}
        <Route path="/emanagement" element={<EmployeeManagement />} />

        <Route path="/equalification" element={<Equalification />} />
        <Route path="/records" element={<AcademicRecords />} />
        <Route path="/profes" element={<ProfessionalDetails />} />
        <Route path="/adetails" element={<AcaDetails />} />
        <Route path="/gurantor" element={<Gurantor />} />

        <Route path="/familydetails" element={<FamilyDetails1 />} />

        <Route path="/jobdetails" element={<JobDetails1 />} />
        <Route path="/viewjob" element={<ViewJob />} />

        <Route path="/targetsetup" element={<TargetSetup />} />

        

        {/* <Route path="/annualleave" element={<AnnualLeave />} /> */}
        <Route path="/sickleave" element={<Sickleave />} />
        <Route path="/update" element={<UpdateProfie />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/next" element={<NextDetails />} />
        <Route path="/education" element={<EducationQualifications />} />
        <Route path="/grt" element={<GuarantorDetails />} />
        <Route path="/family" element={<FamilyDetails />} />
        <Route path="/job" element={<JobDetails />} />
        <Route path="/docs" element={<UploadDocuments />} />
        <Route path="/viewdocs" element={<ViewDocuments />} />
        <Route path="/findocs" element={<FinancialDocs />} />
        <Route path="/upedu" element={<UpdateAcademicDetailsForm />} />
        <Route path="/updatingjsx" element={<Upddating />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/leaveapply" element={<ApplyforLeave />} />
        <Route path="/usernavbar" element={<Navbar />} />
        <Route path="/testt" element={<Testexp />} />

       

        <Route path="/userlogin/dashboard" element={<Dashboard />}>
        
        <Route index element={<Navigate to="userpanel" replace/>}/>
         {/* sub route */}
          <Route path="userpanel" element={<Userdashborad />} />
          <Route path="leaveapply" element={<ApplyforLeave />}/>
          
          <Route path="updatingjsx" element={<Upddating />} />
        </Route>


        
        {/* <Route path="/userlogin/dashboard/leaveapply" element={<ApplyforLeave />}> */}
        {/* <Route path="/userlogin/dashboard/leaveapply" element={<LeaveDashboard />}>
        <Route path=":leaveType" element={<LeaveTypeComponent />} />

         </Route> */}

         <Route path="/userlogin/dashboard/leaveapply" element={<LeaveDashboard />}>
          {/* Nested Routes */}
          <Route path="annualleave" element={<AnnualLeave />} />

        </Route>

         {/* <Route path="/leavedashboard" element={<LeaveDashboard />}>
          <Route path=":leaveType" element={<LeaveTypeComponent />} />
        </Route> */}




         <Route path ="/annualleave" element={<AnnualLeave/>}/>

      
        <Route path="/dashboard" element={<Dashboard />} />
  
       
        <Route path="/leaverecallform" element={<LeaveRecallForm/>} />



      



        <Route path="/user/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/user/reset-password/:resetPasswordToken" element={<ResetPassword/>}/>
        
        
        <Route path="/practical" element={<Practical/>}/>
        





        {/* Admin routes */}
        <Route path="/emanagement" element={<EmployeeManagement />} />
        <Route path="/eprofile" element={<EmployeeProfile />} />
        <Route path="/contact-details" element={<ContactDetails />} />
        <Route path="/kinpage" element={<KinPage />} />
        <Route path="/equalification" element={<Equalification />} />
        <Route path="/records" element={<AcademicRecords />} />
        <Route path="/profes" element={<ProfessionalDetails />} />
        <Route path="/adetails" element={<AcaDetails />} />
        <Route path="/gurantor" element={<Gurantor />} />
        <Route path="/viewgurant" element={<ViewGurantor />} />
        <Route path="/familydetails" element={<FamilyDetails1 />} />
        <Route path="/viewfam" element={<ViewFamilyDetails />} />
        <Route path="/jobdetails" element={<JobDetails1 />} />
        <Route path="/viewjob" element={<ViewJob />} />
        <Route path="/financialdetails" element={<FinancialDetails />} />
        <Route path="/performance" element={<PerformanceManagement />} />
        <Route path="/targetsetup" element={<TargetSetup />} />
        <Route path="/managetargets" element={<ManageTargets />} />
        <Route path="/payroll" element={<PayrollDashboard />}/>








        <Route path="/admin/login/AdminDashboard/EmployeeManagement" element={<EmployeeManagement />} />
        {/* <Route path="/admin/login/AdminDashboard/EmployeeManagement/edit/:id" element={<EditProfile />} /> */}


        <Route path="/noti" element={<LeaveInitiateNotification/>}/>
        <Route path="/testnav" element={<TestNav/>}/>
        





        <Route path="/jobportal" element={<AdminJobManagement/>}/>
        <Route path="/job/:jobId" element={<JobDetailPage />} />
        <Route path="/apply/:jobId" element={<JobApplicationForm />} />
         
      </Routes>
    </>
  );
}

export default App;

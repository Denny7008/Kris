import React, { useState } from "react";
import Navbar from "./Usernavbar";
import UpdateAcademicDetailsForm from "../User/UpdateEdu";

const EducationQualifications = () => {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of Kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("Education Qualifications");
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  return (
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Education Qualifications
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-7xl rounded-lg flex">
          {/* Sidebar */}
          <div className="w-1/3 h-[80vh] border-r bg-gray-100 p-4">
            <ul className="space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left p-4 rounded-lg ${
                    item === activeTab
                      ? "bg-[#FFC107] text-black"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </ul>
          </div>

          {/* Main Content */}
          <div className="flex-1 pl-8 rounded-lg bg-[#E3EDF9]">
            {showUpdateForm ? (
              <UpdateAcademicDetailsForm />
            ) : (
              <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 space-y-6 shadow-lg">
                {/* Academic Records Section */}
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Academic Records
                    </h2>
                    <button
                      onClick={() => setShowUpdateForm(true)}
                      className="bg-[#28A745] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                      Update
                    </button>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                      <h3 className="font-medium">Leicester University</h3>
                      <p className="text-sm text-gray-600">
                        B.Sc in Computer Science, May 2014 - May 2018
                      </p>
                    </div>
                    <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                      <h3 className="font-medium">English College</h3>
                      <p className="text-sm text-gray-600">
                        W.A.S.S.C.E, February 2006 - June 2012
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professional Qualifications Section */}
                <div>
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Professional Qualifications
                    </h2>
                    <button
                      type="submit"
                      className="bg-[#28A745] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                    >
                      Update
                    </button>
                  </div>
                  <div className="space-y-4 mt-4">
                    <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                      <h3 className="font-medium">CCNA Certification</h3>
                      <p className="text-sm text-gray-600">
                        at New Horizons, May 2019 - September 2021
                      </p>
                    </div>
                    <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                      <h3 className="font-medium">Google UI / UX Certification</h3>
                      <p className="text-sm text-gray-600">
                        at Google Inc., September 2021 - September 2022
                      </p>
                    </div>
                    <div className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                      <h3 className="font-medium">Web Developer</h3>
                      <p className="text-sm text-gray-600">
                        at Google Inc., May 2019 - September 2021
                      </p>
                      <ul className="list-disc list-inside text-sm text-gray-600">
                        <li>
                          Collaborated with teammates to deliver valuable features
                          meeting business and customer needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationQualifications;

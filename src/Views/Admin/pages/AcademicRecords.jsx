import React, { useState } from "react";
import AdminSideNavbar from "../../../Components/AdminSideNavbar";
import AdminUpperNavbar from "../../../Components/AdminUpperNavbar";

const AcademicRecords = () => {
  const menuItems = [
    "Personal Details",
    "Contact Details",
    "Next of kin Details",
    "Education Qualifications",
    "Guarantor Details",
    "Family Details",
    "Job Details",
    "Financial Details",
  ];

  const [activeTab, setActiveTab] = useState("Education Qualifications");

  return (
    <div className="flex bg-[#E3EDF9]">
      <AdminSideNavbar />
      <div className="flex-col">
        <AdminUpperNavbar />

        <div className="my-4 mx-4 w-[80vw] h-screen rounded-lg">
          <div className="mb-3">
            <h1 className="text-xl font-semibold">
              Employee Mgmt / Employee Profile / Jhon Doe
            </h1>
          </div>

          <div className="px-4 pt-4 flex gap-6">
            {/* Left Menu */}
            <div className="w-64 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`w-full text-left p-4 rounded-lg ${
                    item === activeTab
                      ? "bg-[#FFC107] text-black"
                      : "bg-white hover:bg-gray-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-lg p-8">
              <div className="max-w-3xl space-y-8">
                {/* Academic Records Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">Academic Records</h2>
                  <div className="space-y-3">
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      <h3 className="font-medium">Leicester University</h3>
                      <p className="text-gray-600 text-sm">
                        B.Sc in Computer Science, May 2014 - May 2018
                      </p>
                    </div>
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      <h3 className="font-medium">English College</h3>
                      <p className="text-gray-600 text-sm">
                        W.A.S.S.C.E, February 2006 - June 2012
                      </p>
                    </div>
                  </div>
                </section>

                {/* Professional Qualifications Section */}
                <section>
                  <h2 className="text-xl font-medium mb-4">
                    Professional Qualifications
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      <h3 className="font-medium">CCNA Certification</h3>
                      <p className="text-gray-600 text-sm">
                        at New Horizons , May 2019 - September 2021
                      </p>
                    </div>
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      <h3 className="font-medium">
                        Google UI / UX Certification
                      </h3>
                      <p className="text-gray-600 text-sm">
                        at Google Inc , September 2021 - September 2022
                      </p>
                    </div>
                    <div className="bg-[#F1F4FA] p-4 rounded-lg">
                      <h3 className="font-medium">Web Developer</h3>
                      <p className="text-gray-600 text-sm">
                        at Google Inc, May 2019 - September 2021
                      </p>
                      <ul className="mt-2 text-sm text-gray-600">
                        <li>
                          • Collaborated with teammates to deliver valuable
                          features meeting business and customer needs.
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicRecords;

import React, { useState } from "react";
import Navbar from "./Usernavbar";
import UpdateAcademicDetailsForm from "../User/UpdateEdu";

const EducationQualifications = () => {

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  return (
    <div className=" flex-1 pl-8 rounded-lg bg-[#E3EDF9]">
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
  );
};

export default EducationQualifications;

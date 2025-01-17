import React, { useState } from "react";
import UpdateAcademicDetailsForm from "../User/UpdateEdu";
import UpdateProfessionalDetailsForm from "../User/UpdateProfessionalDetailsForm ";

const EducationQualifications = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showProfessionalUpdateForm, setShowProfessionalUpdateForm] = useState(false);

  // State to store academic qualifications
  const [academicDetails, setAcademicDetails] = useState([
    {
      institution: "Leicester University",
      course: "B.Sc in Computer Science",
      department: "Computer Science",
      location: "Leicester, UK",
      startDate: "2014-05",
      endDate: "2018-05",
      description: "Focused on software development and algorithms.",
    },
    {
      institution: "English College",
      course: "W.A.S.S.C.E",
      department: "High School",
      location: "London, UK",
      startDate: "2006-02",
      endDate: "2012-06",
      description: "General education with a focus on mathematics and science.",
    },
  ]);

  const [professionalDetails, setProfessionalDetails] = useState([
    {
      title: "CCNA Certification",
      institution: "New Horizons",
      location: "",
      startDate: "2019-05",
      endDate: "2021-09",
      description: "",
    },
  ]);

  // Function to handle form submission and update the state
  const handleUpdateAcademicDetails = (newDetails) => {
    setAcademicDetails((prevDetails) => [...prevDetails, newDetails]);
    setShowUpdateForm(false); // Hide the form after submission
  };

  const handleUpdateProfessionalDetails = (newDetails) => {
    setProfessionalDetails((prevDetails) => [...prevDetails, newDetails]);
    setShowProfessionalUpdateForm(false);
  };

  return (
    <div className="flex-1 rounded-lg bg-[#E3EDF9]">
      {showUpdateForm || showProfessionalUpdateForm ? (
        showUpdateForm ? (
          <UpdateAcademicDetailsForm
            onSubmit={(newDetails) =>
              handleUpdateAcademicDetails(newDetails)
            }
          />
        ) : (
          <UpdateProfessionalDetailsForm
            onSubmit={handleUpdateProfessionalDetails}
          />
        )
      ) : (
        <div className="max-w-2xl bg-white rounded-lg p-6 space-y-6 shadow-lg">
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
              {academicDetails.map((detail, index) => (
                <div key={index} className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">{detail.institution}</h3>
                  <p className="text-sm text-gray-600">
                    {detail.course}, {detail.startDate} - {detail.endDate}
                  </p>
                  <p className="text-sm text-gray-600">
                    Department: {detail.department}
                  </p>
                  <p className="text-sm text-gray-600">
                    Location: {detail.location}
                  </p>
                  <p className="text-sm text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            {/* professional qualification */}
            <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Professional Qualifications
              </h2>
              <button
                onClick={() => setShowProfessionalUpdateForm(true)}
                className="bg-[#28A745] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Update
              </button>
            </div>
            <div className="space-y-4 mt-4">
              {professionalDetails.map((detail, index) => (
                <div key={index} className="bg-[#F6F9FC] p-4 rounded-lg shadow">
                  <h3 className="font-medium">{detail.title}</h3>
                  <p className="text-sm text-gray-600">
                    at {detail.institution}, {detail.startDate} -{" "}
                    {detail.endDate}
                  </p>
                  <p className="text-sm text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationQualifications;

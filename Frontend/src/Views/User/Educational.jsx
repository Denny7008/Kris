
import React, { useState, useEffect } from "react";
import UpdateProfessionalDetailsForm from "./UpdateProfessionalDetailsForm ";
import UpdateAcademicDetailsForm from "./UpdateEdu";
import { NotebookPen } from 'lucide-react';
import axios from "axios";



const EducationQualifications = () => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [showProfessionalUpdateForm, setShowProfessionalUpdateForm] = useState(false);
  const [editingAcademicIndex, setEditingAcademicIndex] = useState(null);
  const [editingProfessionalIndex, setEditingProfessionalIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);
  const [message, setMessage] = useState("");

  const [academicDetails, setAcademicDetails] = useState([
    {
      institute: "",
      course: "",
      department: "",
      location: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);


  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:5000/get-user-data", {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response);
      setAcademicDetails(response.data.educationDetails.academicRecords);
    } catch (error) {
      console.error("Error fetching Academic details:", error);
    }
  };



  const [professionalDetails, setProfessionalDetails] = useState([
    {
      title: "CCNA Certification",
      institute: "New Horizons",
      location: "",
      startDate: "2019-05",
      endDate: "2021-09",
      description: "",
    },
  ]);

  const handleUpdateAcademicDetails = (newDetails) => {
    if (editingAcademicIndex !== null) {
      setAcademicDetails((prevDetails) => {
        const updatedDetails = [...prevDetails];
        updatedDetails[editingAcademicIndex] = newDetails;
        return updatedDetails;
      });
    } else {
      setAcademicDetails((prevDetails) => [...prevDetails, newDetails]);
    }
    setShowUpdateForm(false);
    setEditingAcademicIndex(null);
  };

  const handleUpdateProfessionalDetails = (newDetails) => {
    if (editingProfessionalIndex !== null) {
      setProfessionalDetails((prevDetails) => {
        const updatedDetails = [...prevDetails];
        updatedDetails[editingProfessionalIndex] = newDetails;
        return updatedDetails;
      });
    } else {
      setProfessionalDetails((prevDetails) => [...prevDetails, newDetails]);
    }
    setShowProfessionalUpdateForm(false);
    setEditingProfessionalIndex(null);
  };







  const handleAddClick = () => {
    setMessage("");
    setCurrentDetail({ institute: "", course: "", department: "", location: "", startDate: "", endDate: "", description: "" });
    setShowForm(true);
  };

  const handleUpdateClick = (detail) => {
    setCurrentDetail({ ...detail });
    setShowForm(true);
  };

  return (
    <div className="flex-1 rounded-lg bg-[#E3EDF9]">
      {showUpdateForm || showProfessionalUpdateForm ? (
        showUpdateForm ? (
          <UpdateAcademicDetailsForm onSubmit={handleUpdateAcademicDetails} />
        ) : (
          <UpdateProfessionalDetailsForm onSubmit={handleUpdateProfessionalDetails} />
        )
      ) : (
        <div className="max-w-2xl bg-white rounded-lg p-6 space-y-6 shadow-lg">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Academic Records</h2>
              {message && <p className="text-red-500 text-sm">{message}</p>}
              <button
                // onClick={() => {
                //   setShowUpdateForm(true);
                //   setEditingAcademicIndex(null);
                // }}
                // className="bg-[#28A745] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                onClick={handleAddClick} className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            <div className="space-y-4 mt-4 max-h-60 overflow-y-auto scrollbar-thin scrollbar-track-gray-200">
              {academicDetails.map((detail, index) => (
                <div key={index} className="bg-[#F6F9FC] p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{detail.institute}</h3>
                    <p className="text-sm text-gray-600">{detail.course}, {detail.startDate} - {detail.endDate}</p>
                    <p className="text-sm text-gray-600">Department: {detail.department}</p>
                    <p className="text-sm text-gray-600">Location: {detail.location}</p>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                  <NotebookPen onClick={() => {
                      setEditingAcademicIndex(index);
                      setShowUpdateForm(true);
                    }} className="text-blue-600 cursor-pointer mr-8" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">Professional Qualifications</h2>
              <button
                onClick={() => {
                  setShowProfessionalUpdateForm(true);
                  setEditingProfessionalIndex(null);
                }}
                className="bg-[#28A745] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#218838] focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Add
              </button>
            </div>
            <div className="space-y-4 mt-4 max-h-60 overflow-y-auto">
              {professionalDetails.map((detail, index) => (
                <div key={index} className="bg-[#F6F9FC] p-4 rounded-lg shadow flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{detail.title}</h3>
                    <p className="text-sm text-gray-600">at {detail.institute}, {detail.startDate} - {detail.endDate}</p>
                    <p className="text-sm text-gray-600">{detail.description}</p>
                  </div>
                  <NotebookPen className="text-blue-600 cursor-pointer mr-8"  onClick={() => {
                      setEditingProfessionalIndex(index);
                      setShowProfessionalUpdateForm(true);
                    }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationQualifications;






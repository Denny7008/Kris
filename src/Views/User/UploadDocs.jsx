import React, { useState } from "react";
import Navbar from "./Usernavbar";

const UploadDocuments = () => {
  const [files, setFiles] = useState({
    offerLetter: null,
    nyscCertificate: null,
    guarantorForm: null,
    degreeCertificate: null,
    birthCertificate: null,
  });

  const handleFileChange = (event, documentType) => {
    const file = event.target.files[0];
    setFiles({ ...files, [documentType]: file });
  };

  const handleUpload = () => {
    // Perform upload logic here
    console.log("Files to be uploaded:", files);
  };

  return (
    <div className="bg-[#E3EDF9] min-h-screen">
      <Navbar />
      <div className="bg-white mt-6 ml-8 mr-8 flex space-x-8 text-gray-700 text-lg">
        <a href="#" className="p-4 ml-6 text-2xl hover:text-blue-500">
          Dashboard / Upload Documents
        </a>
      </div>

      <div className="flex gap-4 mt-4 justify-center bg-[#E3EDF9]">
        <div className="w-3/4 max-w-5xl rounded-lg bg-white p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Job Details / Upload Documents
          </h2>
          <div className="space-y-6">
            {[
              { label: "Offer Letter", key: "offerLetter" },
              { label: "NYSC Certificate", key: "nyscCertificate" },
              { label: "Guarantor's Form", key: "guarantorForm" },
              { label: "Degree Certificate", key: "degreeCertificate" },
              { label: "Birth Certificate", key: "birthCertificate" },
            ].map(({ label, key }) => (
              <div key={key} className="flex items-center justify-between">
                <label className="text-lg font-medium text-gray-700">
                  Upload {label}
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={(e) => handleFileChange(e, key)}
                    className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => console.log(`${label} uploaded`)}
                    className="bg-[#FFC107] text-black px-4 py-2 rounded-lg hover:bg-[#e6a700]"
                  >
                    Upload
                  </button>
                </div>
              </div>
            ))}

            <button
              onClick={handleUpload}
              className="bg-[#007BFF] text-white px-6 py-3 mt-6 rounded-lg shadow-md hover:bg-[#0056b3] focus:ring-2 focus:ring-offset-2 focus:ring-blue-600"
            >
              Upload All Documents
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;




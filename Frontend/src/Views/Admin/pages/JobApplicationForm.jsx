import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobApplicationForm = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/job/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  return (
    <div className="p-4">
      {job ? (
        <div className="bg-white p-6 shadow rounded">
          <h1 className="text-2xl font-bold">{job.title}</h1>
          <p className="text-gray-700">Company: {job.company}</p>
          <p className="text-gray-700">Location: {job.location}</p>
          <p className="text-gray-700">Type: {job.type}</p>
          <p className="text-gray-700">Expires: {job.expirationDate}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </div>
      ) : (
        <p>Loading job details...</p>
      )}
    </div>
  );
};

export default JobApplicationForm;

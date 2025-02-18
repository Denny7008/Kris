<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const JobApplicationForm = () => {
  const { jobLink } = useParams(); // Get jobLink from URL
  console.log(jobLink);
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch job details using jobLink
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/apply-job/${encodeURIComponent(jobLink)}`);
        setJob(response.data);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setMessage('Error fetching job details.');
>>>>>>> d1b01c2f6a171a3b0c96281955ebdf107cd563da
      }
    };

    fetchJobDetails();
<<<<<<< HEAD
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
=======
  }, [jobLink]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      resume: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSubmit = new FormData();
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('phone', formData.phone);
    formDataToSubmit.append('resume', formData.resume);

    try {
      const response = await axios.post(`/apply/${job._id}`, formDataToSubmit, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error submitting application');
      console.error(error);
    }
  };

  if (!job) return <div>Loading job details...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold">Apply for {job.title} at {job.company}</h1>
      <p>{job.location}</p>
      <p>Job type: {job.type}</p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Resume (PDF)</label>
          <input
            type="file"
            name="resume"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full p-2 border border-gray-300 rounded mt-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Application
        </button>
      </form>

      {message && <div className="mt-4 text-sm text-gray-600">{message}</div>}
>>>>>>> d1b01c2f6a171a3b0c96281955ebdf107cd563da
    </div>
  );
};

export default JobApplicationForm;

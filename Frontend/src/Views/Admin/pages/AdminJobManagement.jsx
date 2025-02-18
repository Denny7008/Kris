import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";

const AdminJobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    type: "Full-Time",
    location: "",
    expirationDate: "",
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:5000/getall");
      setJobs(response.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleAddJob = async () => {
    try {
      await axios.post("http://localhost:5000/addjob", newJob);
      fetchJobs();
      setShowModal(false); // Close modal after adding job
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleDeleteJob = async (jobId) => {
    try {
      console.log("Deleting job with ID:", jobId); // Log jobId to verify it's passed correctly
  
      if (!jobId) {
        console.error("Job ID is undefined");
        return;
      }
  
      const response = await axios.delete(`http://localhost:5000/delete/job/${jobId}`);
      console.log("Job deleted:", response);
      fetchJobs();  // Refresh the job list after deletion
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };
  
  

  const handleChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="p-4 space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="bg-white shadow rounded p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Job Postings</h2>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              <Plus className="mr-2" />
              Add Job
            </button>
          </div>

          {/* Job Table */}
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Job Title</th>
                <th className="p-2 border">Company</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Location</th>
                <th className="p-2 border">Posted</th>
                <th className="p-2 border">Expires</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
            {jobs.map((job) => (
                 <tr key={job._id} className="hover:bg-gray-50">  
                   <td className="p-2 border">{job.title}</td>
                   <td className="p-2 border">KRIS</td>
                   <td className="p-2 border">{job.type}</td>
                   <td className="p-2 border">{job.location}</td>
                   <td className="p-2 border">{job.postedDate}</td>
                   <td className="p-2 border">{job.expirationDate}</td>
                   <td className="p-2 border">
                     <button
                       onClick={() => handleDeleteJob(job._id)}  
                       className="text-red-500 hover:text-red-700"
                     >
                       Delete
                     </button>
                   </td>
                 </tr>
                ))}

            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Modal for adding a job */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add New Job</h3>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Job Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newJob.title}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter job title"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  value="KRIS"
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter company name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  name="type"
                  value={newJob.type}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                >
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={newJob.location}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                  placeholder="Enter location"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Expiration Date
                </label>
                <input
                  type="date"
                  name="expirationDate"
                  value={newJob.expirationDate}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddJob}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Add Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminJobManagement;

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const JobDetailPage = () => {
//   const { jobId } = useParams(); // Fetch the jobId from URL parameters

//   // Dummy job data array
//   const jobs = [
//     {
//       id: "7f20e6a2-aeb3-4266-9e83-7015bf590d82",
//       title: "Product Designer",
//       company: "Myntra",
//       type: "Full-Time",
//       location: "Bangalore",
//       description:
//         "We are looking for a creative and detail-oriented Product Designer to join our design team at Myntra. You will be responsible for designing user-friendly and innovative products that meet customer needs.",
//       postedDate: "2025-02-18",
//       expirationDate: "2025-02-21",
//       jobLink: "http://localhost:5173/job/7f20e6a2-aeb3-4266-9e83-7015bf590d82",
//     },
//     {
//       id: "3b9e2c9e-839b-4a56-8a51-c32778d9c67d",
//       title: "Software Engineer",
//       company: "Google",
//       type: "Full-Time",
//       location: "Mountain View, CA",
//       description:
//         "As a Software Engineer at Google, you will work on cutting-edge technologies to create scalable, high-performance systems. You will collaborate with cross-functional teams to solve complex problems.",
//       postedDate: "2025-02-10",
//       expirationDate: "2025-03-01",
//       jobLink: "http://localhost:5173/job/3b9e2c9e-839b-4a56-8a51-c32778d9c67d",
//     },
//     {
//       id: "dcee8b4f-82ea-45a4-a8ff-f3d2b9ef4356",
//       title: "Marketing Manager",
//       company: "Nike",
//       type: "Full-Time",
//       location: "New York, NY",
//       description:
//         "Nike is looking for a dynamic and results-oriented Marketing Manager to lead brand campaigns, product launches, and marketing initiatives. You will drive the growth and engagement of our consumer base.",
//       postedDate: "2025-01-15",
//       expirationDate: "2025-02-28",
//       jobLink: "http://localhost:5173/job/dcee8b4f-82ea-45a4-a8ff-f3d2b9ef4356",
//     },
//     {
//       id: "8b56c8a3-c3ab-4024-a7f9-82f1d4cbbd0a",
//       title: "Data Scientist",
//       company: "Amazon",
//       type: "Full-Time",
//       location: "Seattle, WA",
//       description:
//         "Amazon is seeking a Data Scientist to help us analyze large-scale data sets and provide insights that guide business decisions. You will work with a diverse team of engineers and product managers.",
//       postedDate: "2025-02-01",
//       expirationDate: "2025-03-15",
//       jobLink: "http://localhost:5173/job/8b56c8a3-c3ab-4024-a7f9-82f1d4cbbd0a",
//     },
//   ];

//   // Find the job that matches the jobId in the URL params
//   const job = jobs.find((job) => job.id === jobId);

//   // Form state for "Apply Now"
//   const [applicant, setApplicant] = useState({
//     name: "",
//     email: "",
//     resume: null,
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setApplicant((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleResumeChange = (e) => {
//     setApplicant((prev) => ({
//       ...prev,
//       resume: e.target.files[0],
//     }));
//   };

//   const handleApplySubmit = (e) => {
//     e.preventDefault();
//     console.log("Applicant Data:", applicant);
//     // Here you would usually send the data to an API endpoint
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {job ? (
//         <>
//           <div className="mb-8">
//             <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
//             <p className="text-xl text-gray-600">{job.company}</p>
//             <p className="text-lg text-gray-600">
//               <strong>Location:</strong> {job.location}
//             </p>
//             <p className="text-lg text-gray-600">
//               <strong>Job Type:</strong> {job.type}
//             </p>
//             <p className="mt-4 text-gray-800">{job.description}</p>
//             <div className="mt-4">
//               <p className="text-lg text-gray-600">
//                 <strong>Posted on:</strong> {job.postedDate}
//               </p>
//               <p className="text-lg text-gray-600">
//                 <strong>Expires on:</strong> {job.expirationDate}
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 bg-white shadow-lg rounded-lg p-6">
//             <h2 className="text-2xl font-bold mb-4">Apply Now</h2>
//             <form onSubmit={handleApplySubmit}>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={applicant.name}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   placeholder="Enter your full name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={applicant.email}
//                   onChange={handleInputChange}
//                   required
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                   placeholder="Enter your email address"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">Resume (PDF)</label>
//                 <input
//                   type="file"
//                   name="resume"
//                   onChange={handleResumeChange}
//                   required
//                   accept="application/pdf"
//                   className="w-full p-3 border border-gray-300 rounded-md"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
//               >
//                 Submit Application
//               </button>
//             </form>
//           </div>
//         </>
//       ) : (
//         <p className="text-xl text-red-500">Job not found.</p>
//       )}
//     </div>
//   );
// };

// export default JobDetailPage;









import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const JobDetailPage = () => {
  const { jobId } = useParams(); // Get jobId from the URL params
  const [jobDetails, setJobDetails] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/job/${jobId}`);
        setJobDetails(response.data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">{jobDetails.title}</h2>
      <p className="text-sm text-gray-600">Company: {jobDetails.company}</p>
      <p className="text-sm text-gray-600">Type: {jobDetails.type}</p>
      <p className="text-sm text-gray-600">Location: {jobDetails.location}</p>
      <p className="text-sm text-gray-600">Posted: {jobDetails.postedDate}</p>
      <p className="text-sm text-gray-600">Expires: {jobDetails.expirationDate}</p>
      <p className="mt-4">{jobDetails.description}</p>
      <a
        href={jobDetails.jobLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Apply Here
      </a>
    </div>
  );
};

export default JobDetailPage;


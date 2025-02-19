import React, { useEffect, useState } from "react";
import axios from "axios";

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const response = await axios.get("http://localhost:5000/candidates");
        setCandidates(response.data);
        console.log(response.data);
      } catch (err) {
        setError("Failed to fetch candidates. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    loadCandidates();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Candidates</h2>
      {loading ? (
        <p>Loading candidates...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-2 px-4 border">Name</th>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Phone</th>
                <th className="py-2 px-4 border">Resume</th>
                <th className="py-2 px-4 border">Role</th>
                <th className="py-2 px-4 border">Location</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((candidate) => (
                <tr key={candidate._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border">{candidate.name}</td>
                  <td className="py-2 px-4 border">{candidate.email}</td>
                  <td className="py-2 px-4 border">{candidate.phone}</td>
                  <td className="py-2 px-4 border">
                    <a
                      href={candidate.resumeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      View Resume
                    </a>
                  </td>
                  <td className="py-2 px-4 border">{candidate.jobTitle}</td>
                  <td className="py-2 px-4 border">{candidate.jobLocation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Candidates;


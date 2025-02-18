import React, { useEffect, useState } from 'react';
// import { fetchCandidates } from '../services/api';

const Candidates = () => {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const loadCandidates = async () => {
      const data = await fetchCandidates();
      setCandidates(data);
    };
    loadCandidates();
  }, []);

  return (
    <div>
      <h2>Candidates</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Resume</th>
            <th>Applied Date</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate._id}>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.phone}</td>
              <td><a href={candidate.resumeLink} target="_blank" rel="noopener noreferrer">View Resume</a></td>
              <td>{new Date(candidate.appliedDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Candidates;

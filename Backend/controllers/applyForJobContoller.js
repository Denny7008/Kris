import Candidate from '../models/CandidateShema.js';
import Job from '../models/JobSchema.js';
import mongoose from 'mongoose';

export const applyForJob = async (req, res) => {
  const { jobId } = req.params;
  const { name, email, phone, resumeLink } = req.body;

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const newCandidate = new Candidate({
      jobId,
      name,
      email,
      phone,
      resumeLink,
    });

    await newCandidate.save();
    res.status(201).json({ message: 'Application submitted successfully', candidate: newCandidate });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


import Job from '../models/JobSchema.js';


export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// export const addJob = async (req, res) => {
//   const { title, company, type, location, postedDate, expirationDate } = req.body;
//   const newJob = new Job({ title, company, type, location, postedDate, expirationDate });

//   try {
//     const savedJob = await newJob.save();
//     res.status(201).json(savedJob);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };



export const addJob = async (req, res) => {
  const { title, company, type, location, postedDate, expirationDate } = req.body;

  const jobLink = `${process.env.FRONTEND_URL}/apply-job/${uuidv4()}`;  // Generate unique link
  console.log(jobLink);

  const newJob = new Job({ title, company, type, location, postedDate, expirationDate, jobLink });

  try {
    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteJob = async (req, res) => {
    try {
      const jobId = req.params.id;
      console.log("Deleting job with ID in backend:", jobId);

      // Validate job ID format
      if (!mongoose.Types.ObjectId.isValid(jobId)) {
        return res.status(400).json({ message: 'Invalid Job ID format' });
      }

      const deletedJob = await Job.findByIdAndDelete(req.params.id);
      if (!deletedJob) {
        return res.status(404).json({ message: 'Job not found' });
      }

      res.json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('Error in deleteJob:', error);  // Log error for debugging
      res.status(500).json({ message: 'Error deleting record', error });
    }
};

  
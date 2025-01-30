import LeaveApplication from '../models/LeaveApplication.js';

// function to get all leave applications
export const getAllLeaveApplications = async (req, res) => {
  try {
    const applications = await LeaveApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error in getAllLeaveApplications controller:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// function to create leave application
// export const createLeaveApplication = async (req, res) => {
//   const {  userId,duration, startDate, endDate, resumptionDate, type, reason } = req.body;

//   const name = req.body.name || req.user?.fullName; 
//   if (!name) {
//     return res.status(400).json({ message: 'Name is required' });
//   }
  
//   try {
//     const newApplication = new LeaveApplication({
//       userId,
//       name,
//       duration,
//       startDate,
//       endDate,
//       resumptionDate,
//       type,
//       reason,
//     });

//     await newApplication.save();
//     res.status(201).json({
//       message: "Leave application submitted successfully.",
//       application: newApplication,
//     });
//   } catch (error) {
//     console.error("Error in createLeaveApplication controller:", error);
//     res.status(500).json({ message: "Server error. Please try again later." });
//   }
// };

export const createLeaveApplication = async (req, res) => {
  try {
    const userIdFromRequest = req.user._id;  // This assumes `req.user` is populated by an auth middleware

    const leaveApplication = new LeaveApplication({
      userId: userIdFromRequest,
      name: req.body.name,  // You could get these from `req.body` as well
      duration: req.body.duration,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      resumptionDate: req.body.resumptionDate,
      type: req.body.type,
      reason: req.body.reason,
    });

    await leaveApplication.save();
    res.status(201).json({ message: 'Leave application created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating leave application', error });
  }
};





// function to update any leave applications
export const updateLeaveApplicationStatus = async (req, res) => {
  const { status } = req.body;

  try {
    const application = await LeaveApplication.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!application) {
      console.log("Leave application not found in the database.");
      return res.status(404).json({ message: "Leave application not found." });
    }

    res.status(200).json({
      message: "Leave application status updated successfully.",
      application,
    });
  } catch (error) {
    console.error("Error in updateLeaveApplicationStatus controller:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// function to get leavefunction of a particular applicant

export const getLeaveHistory = async (req, res) => {
  try {
    const userId = req.user._id; // Extract user ID from authenticated request

    const leaveHistory = await LeaveApplication.find({ userId });

    if (!leaveHistory || leaveHistory.length === 0) {
      return res.status(404).json({ message: "No leave history found for this user." });
    }

    res.status(200).json(leaveHistory);
  } catch (error) {
    console.error("Error fetching leave history:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

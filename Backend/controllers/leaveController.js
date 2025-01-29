import LeaveApplication from '../models/LeaveApplication.js';


export const getAllLeaveApplications = async (req, res) => {
  try {
    const applications = await LeaveApplication.find();
    res.status(200).json(applications);
  } catch (error) {
    console.error("Error in getAllLeaveApplications controller:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

export const createLeaveApplication = async (req, res) => {
  const { name, duration, startDate, endDate, resumptionDate, type, reason } = req.body;

  try {
    const newApplication = new LeaveApplication({
      name,
      duration,
      startDate,
      endDate,
      resumptionDate,
      type,
      reason,
    });

    await newApplication.save();
    res.status(201).json({
      message: "Leave application submitted successfully.",
      application: newApplication,
    });
  } catch (error) {
    console.error("Error in createLeaveApplication controller:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

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

import KPI from "../models/KPI.js";
import User from "../models/User.js";

// Create a new KPI
export const createKPI = async (req, res) => {
  const { userName, title, description, kpiWeight, startDate, endDate, status } = req.body;

  try {
    // Find user by name
    const user = await User.findOne({ name: userName });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create a new KPI
    const newKPI = new KPI({
      user: user._id, // Use the user's ID
      title,
      description,
      kpiWeight,
      startDate,
      endDate,
      status: status || "Pending",
    });

    await newKPI.save();
    res.status(201).json({ message: "KPI created successfully", kpi: newKPI });
  } catch (error) {
    res.status(500).json({ message: "Failed to create KPI", error: error.message });
  }
};


// Get all KPIs for a specific user
export const getKPIsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const kpis = await KPI.find({ user: userId });
    res.status(200).json(kpis);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch KPIs", error: error.message });
  }
};

// Update a KPI
export const updateKPI = async (req, res) => {
  const { kpiId } = req.params;
  const updates = req.body;

  try {
    const updatedKPI = await KPI.findByIdAndUpdate(kpiId, updates, { new: true });
    if (!updatedKPI) {
      return res.status(404).json({ message: "KPI not found" });
    }

    res.status(200).json({ message: "KPI updated successfully", kpi: updatedKPI });
  } catch (error) {
    res.status(500).json({ message: "Failed to update KPI", error: error.message });
  }
};

// Delete a KPI
export const deleteKPI = async (req, res) => {
  const { kpiId } = req.params;

  try {
    const deletedKPI = await KPI.findByIdAndDelete(kpiId);
    if (!deletedKPI) {
      return res.status(404).json({ message: "KPI not found" });
    }

    res.status(200).json({ message: "KPI deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete KPI", error: error.message });
  }
};

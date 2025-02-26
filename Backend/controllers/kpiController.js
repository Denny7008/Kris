import mongoose from "mongoose";
import KPI from "../models/KPI.js";
import User from "../models/User.js";


// CREATE KPI
export const createKPI = async (req, res) => {
  console.log("Request Body:", req.body); // Log the entire request body

  const { userName, title, description, kpiWeight, startDate, endDate, status } = req.body;


  try {
    if (!userName) {
      return res.status(400).json({ message: "userName is required" });
    }
  

    // Split userName into firstName and lastName
    const [firstName, ...lastNameParts] = userName.split(" ");
    const lastName = lastNameParts.join(" ");

    console.log("Searching for user:", { firstName, lastName });

    // Find user by firstName and lastName
    const user = await User.findOne({ firstName, lastName });
    if (!user) {
      console.log("No user found for:", userName);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User found:", user);

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
    console.log("KPI saved:", newKPI);
  } catch (error) {
    console.error("Error creating KPI:", error.message);
    res.status(500).json({ message: "Failed to create KPI", error: error.message });
  }
};



// Get all KPIs for a specific user
export const getAllKPIs = async (req, res) => {
  try {
    const targets = await KPI.find().populate("user", "firstName lastName"); // Fetch both fields

    console.log("Fetched KPIs:", targets); // Debugging line

    res.status(200).json(targets);
  } catch (error) {
    console.error("Error fetching KPIs:", error);
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

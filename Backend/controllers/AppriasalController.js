import KPI from "../models/KPI.js";
import Appraisal from "../models/AppraisalSchema.js";

export const calculateAppraisal = async (req, res) => {
  try {
    const { userId } = req.params;

    // Fetch all KPIs assigned to the user
    const kpis = await KPI.find({ user: userId });

    if (kpis.length === 0) {
      return res.status(404).json({ message: "No KPIs found for this user." });
    }

    let totalWeightedScore = 0;
    let totalWeight = 0;

    kpis.forEach(kpi => {
      let completionScore = 0;

      if (kpi.status === "Completed") {
        completionScore = 100; // Full score
      } else if (kpi.status === "In Progress") {
        completionScore = 50; // Partial completion
      } else {
        completionScore = 0; // Not started
      }

      const weightedScore = (completionScore * kpi.kpiWeight) / 100;
      totalWeightedScore += weightedScore;
      totalWeight += kpi.kpiWeight;
    });

    const finalScore = totalWeight > 0 ? (totalWeightedScore / totalWeight) * 100 : 0;

    // Store appraisal in the database
    const appraisal = new Appraisal({
      user: userId,
      kpis: kpis.map(kpi => kpi._id),
      finalScore: finalScore.toFixed(2),
      feedback: "Great performance!", // Default feedback
    });

    await appraisal.save();

    res.json({ message: "Appraisal calculated successfully", finalScore });

  } catch (error) {
    console.error("Error calculating appraisal:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

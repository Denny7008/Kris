import mongoose from "mongoose";

const AppraisalSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to the employee being appraised
      required: true,
    },
    kpis: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "KPI", // Reference to assigned KPIs
      },
    ],
    finalScore: { 
      type: Number, 
      required: true, 
      default: 0, 
    }, // Calculated appraisal score

    feedback: { 
      type: String, 
      default: "No feedback provided." 
    }, // Manager/HR feedback

    status: { 
      type: String, 
      enum: ["Pending", "Reviewed", "Finalized"], 
      default: "Pending",
    }, // Status of appraisal review
  },
  { timestamps: true }
);

export default mongoose.model("Appraisal", AppraisalSchema);

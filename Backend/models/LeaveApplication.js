import mongoose from 'mongoose';
// const mongoose = require('mongoose');

const leaveApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  duration: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  resumptionDate:{type: Date, required: true},
  type: { type: String, required: true },
  reason: { type: String, required: true },
});

const LeaveApplication = mongoose.model('LeaveApplication', leaveApplicationSchema);



export default mongoose.model("LeaveApplication", leaveApplicationSchema);

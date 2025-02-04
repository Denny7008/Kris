import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email address",
    ],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    match: [
      /^[0-9]{10,15}$/,
      "Please enter a valid phone number with 10-15 digits",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Define roles
    default: "user",        // Default role is 'user'
  },
  jobTitle:{
    type:String,
  },
  gender:{
    type: String,
    enum: ["Male", "Female"],
    default: "Male"     
  },
  department:{
    type: String,
  },
  startDate: {
    type: String,
    match: /^\d{4}-\d{2}-\d{2}$/, // Ensure the date is in YYYY-MM-DD format
  },
  category:{
    type: String,
    enum: ["Full-time", "Remote"],
    default: "Full-time" // Define job categories
  },
  profilePic: {
    type: String,
    default: "https://via.placeholder.com/100", // Default profile image
  },

}, { timestamps: true });


// Method to compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
export default mongoose.model("User", UserSchema);

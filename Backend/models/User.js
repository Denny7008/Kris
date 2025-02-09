import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema(
  {
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
      required: [true, "Primary phone number is required"],
      match: [
        /^[0-9]{10,15}$/,
        "Please enter a valid phone number with 10-15 digits",
      ],
    },
    phone2: {
      type: String,
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
      enum: ["user", "admin"],
      default: "user",
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
      enum: ["Male", "Female"],
      default: "Male",
    },
    department: {
      type: String,
    },
    startDate: {
      type: String,
      match: /^\d{4}-\d{2}-\d{2}$/,
    },
    category: {
      type: String,
      enum: ["Full-time", "Remote"],
      default: "Full-time",
    },
    profilePic: {
      data: Buffer,
      contentType: String,
    },
    // Adding contact details fields
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    address: {
      type: String,
    },
    nextDetails: {
      kinName: { type: String, required: true },
      occupation: { type: String, required: true },
      phone: { type: String, required: true },
      relationship: { type: String, required: true },
      address: { type: String, required: true },
    },
    guarantorDetails: {
      name: { type: String, required: true },
      position: { type: String, required: true },
      phone: {
        type: String,
        required: [true, "Primary phone number is required"],
        match: [
          /^[0-9]{10,15}$/,
          "Please enter a valid phone number with 10-15 digits",
        ],
      },
    },
  },

  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  this.userName = `${this.firstName} ${this.lastName}`;
  next();
});

// Method to compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
export default mongoose.model("User", UserSchema);

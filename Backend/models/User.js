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
  confirmPassword: {
    type: String,
    required: [true, "Confirm password is required"],
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords must match",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin"], // Define roles
    default: "user",        // Default role is 'user'
  },
}, { timestamps: true });

// Password Hashing Before Saving User
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  // Ensure confirmPassword is not stored in the database
  this.confirmPassword = undefined;
  next();
});

// Method to compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Export the User model
export default mongoose.model("User", UserSchema);

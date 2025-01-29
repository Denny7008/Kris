import User from "../models/User.js"; // Assuming you have a User model
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator"; // For validation middleware

// REGISTER THE USER CONTROLLER
export const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    password,
    confirmPassword,
    receiveNewsletters,
    agreeTerms,
  } = req.body;

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }
  console.log("Password:", password);
  console.log("Confirm Password:", confirmPassword);

  // Validate user input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds); // Hash password
    console.log("Generated hashed password:", hashedPassword);

    // Create new user (excluding confirmPassword)
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
      receiveNewsletters,
      agreeTerms,
    });

    // Save user to database
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id }, // Payload
      process.env.JWT_SECRET, // Secret key
      { expiresIn: "1h" } // Expiration time
    );

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        receiveNewsletters: newUser.receiveNewsletters,
      },
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
};





// USER LOGIN CONTROLLLER
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const normalizedEmail = email.toLowerCase();
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    // console.log("Stored hashed password:", user.password);

    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Password valid:", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



// USER LOGOUT CONTROLLER 
export const logoutUser = async (req, res) => {
  try {
    // If using JWT, you can implement token blacklisting (optional)
    res.clearCookie("token"); // If using cookies for authentication
    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ error: "Server error during logout" });
  }
};






// UPDATE USER PROFILE
export const editProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("Received userId:", userId);
    const updateData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      console.log("User not found in the database.");
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error in editProfile controller:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};





//GET USER BY ID
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error." });
  }
};


// GET USER PROFILE
export const userProfile = async (req, res) => {
  try {
    const userId = req.session.userId; // Assuming session-based auth
    if (!userId) return res.status(401).json({ message: "Not authenticated" });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ fullName: user.fullName, email: user.email });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};









// GET EMPLOYEE ALL DATA
export const getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find(); // You can use `.find({})` for additional filtering if needed

    // Check if any users exist
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    // Respond with the user data
    res.status(200).json({
      message: "Users retrieved successfully.",
      users, // Send the list of users
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
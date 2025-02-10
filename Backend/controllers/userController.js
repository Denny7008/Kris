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



// [ BULK REGISTER-USER-API]
export const bulkRegisterUsers = async (req, res) => {
  const users = req.body;

  // Validate each user object in the array
  const errors = [];
  for (const user of users) {
    const { firstName, lastName, email, phone, password, confirmPassword, receiveNewsletters, agreeTerms } = user;

    // Check if passwords match for each user
    if (password !== confirmPassword) {
      errors.push({ email, message: "Passwords do not match" });
      continue; // Skip this user if passwords don't match
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      errors.push({ email, message: "User already exists" });
      continue; // Skip this user if they already exist
    }
  }

  // If there are any errors, respond with the error messages
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Process each user and create them
    const createdUsers = [];
    for (const user of users) {
      const { firstName, lastName, email, phone, password, receiveNewsletters, agreeTerms } = user;

      // Hash the password for each user
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

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

      // Save user to the database
      await newUser.save();

      // Add the new user to the createdUsers array
      createdUsers.push({
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        receiveNewsletters: newUser.receiveNewsletters,
      });
    }

    // Generate JWT tokens for the created users
    const tokens = createdUsers.map(user => 
      jwt.sign(
        { userId: user.id }, // Payload
        process.env.JWT_SECRET, // Secret key
        { expiresIn: "1h" } // Expiration time
      )
    );

    res.status(201).json({
      message: "Users registered successfully",
      users: createdUsers,
      tokens,
    });
  } catch (error) {
    console.error("Error during bulk registration:", error);
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


// updation for profile pic

export const edittProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from JWT token
    console.log("Received userId from token:", userId);

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


// UPDATING USER CONTACT DETAILS
export const updateContactDetails = async (req, res) => {
  try {
    const { phone, phone2, email, state, city, address } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.phone = phone || user.phone;
    user.phone2 = phone2 || user.phone2;
    user.email = email || user.email;
    user.state = state || user.state;
    user.city = city || user.city;
    user.address = address || user.address;

    await user.save();

    res.json({ message: "Contact details updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};



// UPDATE GUARANTOR DETAILS
export const updateGuarantor = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { guarantorDetails } = req.body; // Extract nextDetails from request

    if (!guarantorDetails) {
      return res.status(400).json({ message: "guarantorDetails object is required" });
    }

    // Update the user record
    const updatedUser = await User.findByIdAndUpdate(
      user,
      { guarantorDetails },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Next of guarantorDetails updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating guarantorDetails:", error);
    res.status(500).json({ message: "Server error" });
  }
}; 

//UPDATE KIN DETAILS
export const updateNextOfKin = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { nextDetails } = req.body; // Extract nextDetails from request

    if (!nextDetails) {
      return res.status(400).json({ message: "nextDetails object is required" });
    }

    // Update the user record
    const updatedUser = await User.findByIdAndUpdate(
      user,
      { nextDetails },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "Next of Kin updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating next-of-kin:", error);
    res.status(500).json({ message: "Server error" });
  }
};


// UPDATE FAMILY DETAILS
export const updateFamilyDetails = async (req, res) => {
  try {
    const { _id, name, relationship, phone, address } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Find the specific family member by ID and update only that entry
    const index = user.familyDetails.findIndex(
      (member) => member._id.toString() === _id
    );
    if (index === -1) return res.status(404).json({ message: "Family member not found" });

    // Update only the specific family member (not replacing the whole array)
    user.familyDetails[index] = { _id, name, relationship, phone, address };

    await user.save(); // Save changes

    res.json({
      message: "Family details updated successfully",
      familyDetails: user.familyDetails, // Return updated array
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};



// export const updateFamilyDetails = async (req, res) => {
//   try {
//     const { _id, name, relationship, phone, address } = req.body;
//     const user = await User.findById(req.user.id);

//     if (!user) return res.status(404).json({ message: "User not found" });

//     const index = user.familyDetails.findIndex((member) => member._id.toString() === _id);
//     if (index === -1) return res.status(404).json({ message: "Family member not found" });

//     user.familyDetails[index] = { ...user.familyDetails[index], name, relationship, phone, address };

//     await user.save();

//     // Send updated data to frontend
//     res.json({
//       message: "Family details updated successfully",
//       familyDetails: user.familyDetails, // Send latest array
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };






export const addFamilyMember = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { name, relationship, phone, address } = req.body;

    if (!name || !relationship || !phone || !address) {
      return res.status(400).json({ message: "All fields (name, relationship, phone, address) are required" });
    }

    // Create new family member object
    const newFamilyMember = { name, relationship, phone, address };

    // Push new family member to the existing array
    user.familyDetails.push(newFamilyMember);

    // Save the updated user document
    await user.save();

    res.status(200).json({
      message: "Family member added successfully",
      user,
    });
  } catch (error) {
    console.error("Error adding family member:", error);
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



// GET ALL EMPLOYEE WITHOUT PROFILE PICTURE
export const getAllUsersWithoutProfilePic = async (req, res) => {
  try {
    // Fetch all users excluding the profilePic field
    const users = await User.find().select('-profilePic'); // Exclude profilePic field

    // Check if any users exist
    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    // Respond with the user data without the profilePic
    res.status(200).json({
      message: "Users retrieved successfully without profile pics.",
      users, // Send the list of users without profile pics
    });
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};



// NUMBER OF USERS(EMPLOYEESS)

export const noOfEmployees = async (req, res) => {
  try {
    // Query the database for all users with role 'user' (employees)
    const employeeCount = await User.countDocuments({ role: "user" });

    res.json({ employeesCount: employeeCount });
  } catch (error) {
    console.error("Error fetching employee count:", error);
    res.status(500).json({ message: "Server error" });
  }
};


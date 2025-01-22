// Import necessary modules
import Admin from "../models/Admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerAdmin = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password } = req.body;

    // Check if the email is already registered
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin with this email already exists." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,
    });

    await newAdmin.save();

    res.status(201).json({ message: "Admin registered successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// ADMIN LOGIN
// export const loginAdmin = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if the admin exists
//     const admin = await Admin.findOne({ email });
//     if (!admin) {
//       return res.status(404).json({ message: "Admin not found." });
//     }

//     // Compare passwords
//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid credentials." });
//     }

//     // Generate a JWT token
//     const token = jwt.sign(
//       { id: admin._id, email: admin.email, role: admin.role },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" } // Token validity: 1 day
//     );

//     res.status(200).json({
//       message: "Login successful!",
//       token,
//       admin: {
//         id: admin._id,
//         firstName: admin.firstName,
//         lastName: admin.lastName,
//         email: admin.email,
//         phone: admin.phone,
//         role: admin.role,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

export const loginAdmin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Check if the admin exists
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found." });
      }
  
      // Check if the role is admin
      if (admin.role !== "admin") {
        return res.status(403).json({ message: "Access denied. Only admins can log in." });
      }
  
      // Compare passwords
      const isPasswordValid = await bcrypt.compare(password, admin.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: "Invalid credentials." });
      }
  
      // Generate a JWT token
      const token = jwt.sign(
        { id: admin._id, email: admin.email, role: admin.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" } // Token validity: 1 day
      );
  
      res.status(200).json({
        message: "Login successful!",
        token,
        admin: {
          id: admin._id,
          firstName: admin.firstName,
          lastName: admin.lastName,
          email: admin.email,
          phone: admin.phone,
          role: admin.role,
        },
      });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };
  



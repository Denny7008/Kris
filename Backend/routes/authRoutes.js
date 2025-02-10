import express from "express";
import multer from "multer";
import {
  registerUser,
  loginUser,
  editProfile,
  getAllUsers,
  getUser,
  userProfile,
  logoutUser,
  bulkRegisterUsers,
  getAllUsersWithoutProfilePic,
  noOfEmployees,
  updateContactDetails,
  updateNextOfKin,
  updateGuarantor,
  addFamilyMember,
  updateFamilyDetails,
} from "../controllers/userController.js";
import {
  getAllLeaveApplications,
  createLeaveApplication,
  updateLeaveApplicationStatus,
  getLeaveHistory,
  updateLeaveStatus,
  getApprovedLeaveApplications,
} from "../controllers/leaveController.js";
import { body } from "express-validator"; // For input validation
import { loginAdmin, registerAdmin } from "../controllers/adminController.js";
import {
  authenticateToken,
  getUserDataFromToken,
} from "../middleware/authenticateToken.js";
import {
  createNotification,
  getUnreadNotifications,
  markNotificationsAsRead,
} from "../controllers/notificationController.js";

import {
  createMessageNotification,
  getUserMessageNotifications,
  // markMessageAsRead,
  deleteMessageNotification,
  markMessagesAsRead,
} from "../controllers/MessageContoller.js";
import {
  getProfileImage,
  uploadProfileImage,
} from "../controllers/uploadController.js";
import upload from "../middleware/uploadMiddleware.js";
import {
  createKPI,
  deleteKPI,
  getAllKPIs,
  updateKPI,
} from "../controllers/kpiController.js";
import { addFinancialDetails, deleteFinancialDetails, getFinancialDetails, updateFinancialDetails } from "../controllers/financialController.js";

const router = express.Router();

//const storage = multer.memoryStorage();
//const upload = multer({ storage });

// ADMIN ROUTES
router.post(
  "/user/register",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  registerUser
); // Register BULK User
router.post(
  "/user/bulk-register",
  [
    body("email").isEmail().withMessage("Enter a valid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  bulkRegisterUsers
); // Register User

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

// USER ROUTES
router.post("/user/login", loginUser); // User Login
router.post("/user/logout", logoutUser); // User Logout
router.get("/users", getAllUsers); // Get all users
router.get("/users/get-allusers", getAllUsersWithoutProfilePic);
router.get("/users/employee-count", noOfEmployees); // Get number of employees

router.put("/users/:userId", editProfile); // Update user profile by userId
router.get("/users/:id", getUser); // Get the user by id
router.get("/users/user-profile", userProfile); // Get user profile

router.put(
  "/users/update-contact/:id",
  authenticateToken,
  updateContactDetails
); // Update logged-in user's contact details

router.put("/users/update-next-of-kin/:id", authenticateToken, updateNextOfKin);
router.put("/users/update-guarantor/:id", authenticateToken, updateGuarantor);

// Add a new family member

router.post("/users/add/:id", authenticateToken, addFamilyMember);
// Update family details
router.put("/users/update/:id", authenticateToken, updateFamilyDetails);




// Define routes
router.post(
  "/upload-profile/:userId",
  authenticateToken,
  upload.single("file"),
  uploadProfileImage
);
router.get("/profile-image/:userId", getProfileImage);

// LEAVE APPLICATION ROUTES
router.get("/leave-applications", getAllLeaveApplications); // Route to get all leave applications (Admin side)
router.post(
  "/create-leave-application",
  authenticateToken,
  createLeaveApplication
); // Route to create a new leave application (User side)
// router.put('/leave-applications/:id', updateLeaveApplicationStatus);  // Route to approve/decline leave application (Admin side)
router.patch("/leave-applications/:id", updateLeaveStatus); // Route to approve/decline leave application
router.get("/leave-applications/approved", getApprovedLeaveApplications); // Retrive only the approved leave applications

router.get("/get-leave-history", authenticateToken, getLeaveHistory);

router.get("/get-user-data", authenticateToken, async (req, res) => {
  try {
    // You can use the authenticated user from req.user (which is set in the middleware)
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Concatenate firstName and lastName to create the full name
    const userData = {
      name: `${user.firstName} ${user.lastName}`, // Concatenate firstName and lastName
      email: user.email, // You can add any other fields you need here
      jobTitle: user.jobTitle,
      department: user.department,
      category: user.category,
      gender: user.gender,
      phone: user.phone,
      phone2: user.phone2,
      state: user.state,
      city: user.city,
      address: user.address,
      nextDetails: user.nextDetails
        ? {
            kinName: user.nextDetails.kinName || "",
            occupation: user.nextDetails.occupation || "",
            phone: user.nextDetails.phone || "",
            relationship: user.nextDetails.relationship || "",
            address: user.nextDetails.address || "",
          }
        : null,
      guarantorDetails: user.guarantorDetails
        ? {
            name: user.guarantorDetails.name || "",
            position: user.guarantorDetails.position || "",
            phone: user.guarantorDetails.phone || "",
          }
        : null,

      familyDetails: Array.isArray(user.familyDetails)
        ? user.familyDetails.map((familyMember) => ({
            name: familyMember.name || "",
            relationship: familyMember.relationship || "",
            phone: familyMember.phone || "",
            address: familyMember.address || "",
          }))
        : [],
        bankDetails: Array.isArray(user.bankDetails)
        ? user.bankDetails.map((user) => ({
            accountName: user.accountName || "",
            accountNumber: user.accountNumber || "",
            bankName: user.bankName || "",
            accountType: user.accountType || "",
          }))
        : null,
      // Add other fields as necessary
    };

    res.json(userData);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res
      .status(500)
      .json({ message: "Error retrieving user data", error: error.message });
  }
});




// FINANICAL DETAILS
router.get("/", authenticateToken, getFinancialDetails);
router.post("/users/add-bankinfo/:id", authenticateToken, addFinancialDetails);
router.put("/users/add-bankinfo/update/:id", authenticateToken, updateFinancialDetails);
router.delete("/users/add-bankinfo/delete", authenticateToken, deleteFinancialDetails);



// NOTIFICATIONS

router.post("/notifications", createNotification); // Create a notification
router.get("/notifications/:userId", getUnreadNotifications); // Fetch unread notifications for a user
router.put("/notifications/read/:userId", markNotificationsAsRead); // Mark notifications as read

// Message Notification

// 📌 Create a new message notification
router.post("/messages", createMessageNotification);

// 📌 Get all messages for a user
router.get("/messages/:userId", getUserMessageNotifications);

// 📌 Mark a specific message as read
router.put("/messages/read/:messageId", markMessagesAsRead);

// 📌 Delete a specific message notification (fixed route path)
router.delete("/messages/:messageId", deleteMessageNotification);

// KPI ROUTES

router.post("/kpi/create", createKPI); // Route to create a KPI
router.get("/kpi/user", getAllKPIs); // Route to get all KPIs for a user

router.put("/kpi/update/:kpiId", updateKPI); // Route to update a KPI
router.delete("/kpi/delete/:kpiId", deleteKPI); // Route to delete a KPI




export default router;

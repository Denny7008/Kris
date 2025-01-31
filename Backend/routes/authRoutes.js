import express from 'express';
import { registerUser, loginUser, editProfile, getAllUsers, getUser, userProfile, logoutUser } from '../controllers/userController.js';
import { getAllLeaveApplications, createLeaveApplication, updateLeaveApplicationStatus, getLeaveHistory, updateLeaveStatus, getApprovedLeaveApplications} from '../controllers/leaveController.js';
import { body } from 'express-validator'; // For input validation
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';
import { authenticateToken, getUserDataFromToken } from '../middleware/authenticateToken.js';
import { createNotification, getUnreadNotifications, markNotificationsAsRead } from '../controllers/notificationController.js';

const router = express.Router();


// ADMIN ROUTES
router.post('/user/register',[
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
  registerUser); // Register User 
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);


// USER ROUTES
router.post('/user/login', loginUser);      // User Login
router.post('/user/logout', logoutUser);      // User Logout
router.get("/users", getAllUsers);         // Get all users
router.put("/users/:userId", editProfile);   // Update user profile by userId
router.get("/users/:id", getUser);   // Get the user by id
router.get("/users/user-profile", userProfile);   // Get user profile 





// LEAVE APPLICATION ROUTES
router.get('/leave-applications', getAllLeaveApplications);  // Route to get all leave applications (Admin side)
router.post('/create-leave-application',  authenticateToken, createLeaveApplication);  // Route to create a new leave application (User side)
// router.put('/leave-applications/:id', updateLeaveApplicationStatus);  // Route to approve/decline leave application (Admin side)
router.patch("/leave-applications/:id", updateLeaveStatus);   // Route to approve/decline leave application 
router.get("/leave-applications/approved", getApprovedLeaveApplications);  // Retrive only the approved leave applications

router.get("/get-leave-history", authenticateToken, getLeaveHistory); 



router.get('/get-user-data', authenticateToken, async (req, res) => {
  try {
    // You can use the authenticated user from req.user (which is set in the middleware)
    const user = req.user;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Concatenate firstName and lastName to create the full name
    const userData = {
      name: `${user.firstName} ${user.lastName}`, // Concatenate firstName and lastName
      email: user.email, // You can add any other fields you need here
    };

    res.json(userData);
  } catch (error) {
    console.error("Error retrieving user data:", error);
    res.status(500).json({ message: 'Error retrieving user data', error: error.message });
  }
});




// NOTIFICATIONS

router.post("/notifications", createNotification);   // Create a notification
router.get("/notifications/:userId", getUnreadNotifications);    // Fetch unread notifications for a user
router.put("/read/:userId", markNotificationsAsRead);   // Mark notifications as read



export default router;

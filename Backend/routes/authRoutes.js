import express from 'express';
import { registerUser, loginUser, editProfile, getAllUsers, getUser } from '../controllers/userController.js';

import { getAllLeaveApplications, createLeaveApplication, updateLeaveApplicationStatus,} from '../controllers/leaveController.js';

import { body } from 'express-validator'; // For input validation
import { loginAdmin, registerAdmin } from '../controllers/adminController.js';

const router = express.Router();

// Register route
router.post(
  '/user/register',
  [
    body('email').isEmail().withMessage('Enter a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    // Add more validations if needed
  ],
  registerUser
);

// Login route
router.post('/user/login', loginUser);

router.get("/users", getAllUsers);

// ADMIN ROUTES

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

router.put("/users/:userId", editProfile);

// Add this route to your backend
router.get("/users/:id", getUser);





// leave routes 

// Route to get all leave applications (Admin side)
router.get('/leave-applications', getAllLeaveApplications);

// Route to create a new leave application (User side)
router.post('/createleave-applications', createLeaveApplication);

// Route to approve/decline leave application (Admin side)
router.put('/leave-applications/:id', updateLeaveApplicationStatus);






export default router;

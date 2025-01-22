import express from 'express';
import { registerUser, loginUser } from '../controllers/userController.js';
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


// ADMIN ROUTES

router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

export default router;

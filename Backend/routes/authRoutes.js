import express from 'express';
import { signupController } from '../controllers/authController.js';

const router = express.Router();

// Signup route
router.post('/user/register', signupController);

export default router;

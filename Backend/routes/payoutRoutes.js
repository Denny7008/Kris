import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import User from '../models/User.js';

const router = express.Router();
dotenv.config();


const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID;
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;
const RAZORPAY_ACCOUNT_NUMBER = process.env.RAZORPAY_ACCOUNT_NUMBER;

// Payout Route
router.post('/payouts', async (req, res) => {
    const { amount, userId } = req.body;

    if (!amount || !userId) {
        return res.status(400).json({ error: "Amount and user ID are required." });
    }

    try {
        // Fetch user from database to get fundAccountId
        const user = await User.findById(userId);
        if (!user || !user.fundAccountId) {
            return res.status(400).json({ error: "User not found or bank details missing." });
        }

        // Initiate Payout
        const response = await axios.post(
            "https://api.razorpay.com/v1/payouts",
            {
                account_number: RAZORPAY_ACCOUNT_NUMBER, // Your Razorpay Payout Account Number
                fund_account_id: user.fundAccountId,  // Use stored fundAccountId
                amount: amount * 100,  // Convert to paise
                currency: "INR",
                mode: "IMPS",
                purpose: "payout",
                narration: "Salary Payout",
            },
            {
                auth: {
                    username: RAZORPAY_KEY_ID,
                    password: RAZORPAY_KEY_SECRET,
                },
            }
        );

        res.json({ success: true, data: response.data });
        // console.log(response.data);
    } catch (error) {
        console.error("Razorpay Payout Error:", error.response?.data || error.message);
        res.status(500).json({ error: "Failed to process payout.", details: error.response?.data });
    }
});

router.post("/send-payment-email", async (req, res) => {
    const { user, amount } = req.body;
  
    try {
      await sendPaymentSuccessEmail(user, amount);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      res.status(500).json({ success: false, error: error.message });
    }
  });


export default router;
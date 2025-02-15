import mailjet from 'node-mailjet';
import User from '../models/User.js'; // Adjust path as needed
import crypto from 'crypto';

// Configure Mailjet with API keys
const mailjetClient = mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
);

export const ForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    console.log('User found:', user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate token and expiration time
     const resetToken = crypto.randomBytes(32).toString('hex');
    
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

    await user.save();

    const resetLink = `http://localhost:3000/reset-password/${resetToken}`; // Adjust to your frontend URL
    console.log('Sending email to:', user.email);
    console.log('From email:', process.env.MAILJET_FROM_EMAIL);
    
    const request = mailjetClient.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: 'Kris Software Consultancy',
          },
          To: [
            {
              Email: user.email,
              Name: `${user.firstName} ${user.lastName}`
            }
          ],
          Subject: 'Password Reset Request',
          HTMLPart: `
  <div style="background-color:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background-color:#1e3a8a; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0;">Kris Software Consultancy</h1>
      </div>
      <div style="padding:20px;">
        <h2 style="color:#1e3a8a;">Hello ${user.firstName},</h2>
        <p style="font-size:16px; color:#555555;">
          You requested to reset your password. Please click the button below to reset your password. 
          This link will expire in 10 minutes.
        </p>
        <div style="text-align:center; margin:30px 0;">
          <a href="${resetLink}" style="background-color:#1e3a8a; color:#ffffff; padding:12px 24px; text-decoration:none; border-radius:4px; font-size:16px;">
            Reset Password
          </a>
        </div>
        <p style="font-size:14px; color:#888888; text-align:center;">
          If you didn't request a password reset, please ignore this email.
        </p>
      </div>
      <div style="background-color:#f4f4f4; padding:15px; text-align:center; font-size:12px; color:#aaaaaa;">
        © 2025 Kris Software Consultancy. All rights reserved.
      </div>
    </div>
  </div>
`

        }
      ]
    });

    const result = await request;
    res.status(200).json({ message: 'Password reset email sent successfully' });
  } catch (error) {
    console.error('Error sending reset email:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

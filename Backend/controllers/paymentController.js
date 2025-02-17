// import mailjetClient from "../config/mailjetConfig.js"; // Ensure this is configured properly
import dotenv from "dotenv";

dotenv.config();

export const sendPaymentSuccessEmail = async (user, amount) => {
  try {
    const request = mailjetClient.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.MAILJET_FROM_EMAIL,
            Name: "Kris Software Consultancy",
          },
          To: [
            {
              Email: user.email,
              Name: `${user.firstName} ${user.lastName}`,
            },
          ],
          Subject: "Payment Received Successfully",
          HTMLPart: `
  <div style="background-color:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background-color:#1e3a8a; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0;">Kris Software Consultancy</h1>
      </div>
      <div style="padding:20px;">
        <h2 style="color:#1e3a8a;">Hello ${user.firstName},</h2>
        <p style="font-size:16px; color:#555555;">
          Your salary payment of <strong>$${amount}</strong> has been successfully processed.
        </p>
        <p style="font-size:14px; color:#888888; text-align:center;">
          If you have any questions, please contact HR.
        </p>
      </div>
      <div style="background-color:#f4f4f4; padding:15px; text-align:center; font-size:12px; color:#aaaaaa;">
        © 2025 Kris Software Consultancy. All rights reserved.
      </div>
    </div>
  </div>
`,
        },
      ],
    });

    await request;
    console.log("Payment success email sent to:", user.email);
  } catch (error) {
    console.error("Error sending payment success email:", error);
  }
};

// import dotenv from "dotenv";
// import Mailjet from "node-mailjet";


// dotenv.config();
// // Configure Mailjet with API keys
// const mailjetClient = Mailjet.apiConnect(
//     process.env.MAILJET_API_KEY,
//     process.env.MAILJET_API_SECRET
//   );

// export const sendPaymentSuccessEmail = async (user, amount) => {
//   try {
//     const request = mailjetClient.post("send", { version: "v3.1" }).request({
//       Messages: [
//         {
//           From: {
//             Email: process.env.MAILJET_FROM_EMAIL,
//             Name: "Kris Software Consultancy",
//           },
//           To: [
//             {
//               Email: user.email,
//               Name: `${user.firstName} ${user.lastName}`,
//             },
//           ],
//           Subject: "Payment Received Successfully",
//           HTMLPart: `
//   <div style="background-color:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
//     <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden;">
//       <div style="background-color:#1e3a8a; padding:20px; text-align:center;">
//         <h1 style="color:#ffffff; margin:0;">Kris Software Consultancy</h1>
//       </div>
//       <div style="padding:20px;">
//         <h2 style="color:#1e3a8a;">Hello ${user.firstName},</h2>
//         <p style="font-size:16px; color:#555555;">
//           Your salary payment of <strong>₹${amount}</strong> has been successfully processed.
//         </p>
//         <p style="font-size:14px; color:#888888; text-align:center;">
//           If you have any questions, please contact HR.
//         </p>
//       </div>
//       <div style="background-color:#f4f4f4; padding:15px; text-align:center; font-size:12px; color:#aaaaaa;">
//         © 2025 Kris Software Consultancy. All rights reserved.
//       </div>
//     </div>
//   </div>
// `,
//         },
//       ],
//     });

//     await request;
//     console.log("Payment success email sent to:", user.email);
//   } catch (error) {
//     console.error("Error sending payment success email:", error);
//   }
// };


import dotenv from "dotenv";
import Mailjet from "node-mailjet";

dotenv.config();
// Configure Mailjet with API keys
const mailjetClient = Mailjet.apiConnect(
    process.env.MAILJET_API_KEY,
    process.env.MAILJET_API_SECRET
);

export const sendPaymentSuccessEmail = async (user, amount, bankName, accountNumber) => {
  try {
    // const lastFourDigits = accountNumber.slice(-4);
    const lastFourDigits = accountNumber ? accountNumber.slice(-4) : "XXXX";
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
          Subject: "KRIS Software Consultancy: Payment Credited",
          HTMLPart: `
  <div style="background-color:#f4f4f4; padding:20px; font-family:Arial, sans-serif;">
    <div style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:8px; box-shadow:0 4px 8px rgba(0,0,0,0.1); overflow:hidden;">
      <div style="background-color:#1e3a8a; padding:20px; text-align:center;">
        <h1 style="color:#ffffff; margin:0;">Kris Software Consultancy</h1>
      </div>
      <div style="padding:20px;">
        <h2 style="color:#1e3a8a;">Hello ${user.firstName},</h2>
        <p style="font-size:16px; color:#555555;">
          We would like to inform you that an amount of <strong style="color:#3137fd;">₹${amount}</strong> has been successfully credited to your ${bankName} Account XXXX-XXXX-${lastFourDigits} from Kris Software Consultancy.
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

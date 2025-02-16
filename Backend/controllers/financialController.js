// import User from "../models/User.js";

// // Get financial details
// export const getFinancialDetails = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     res.json({ financialDetails: user.bankDetails });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };

// // Add financial details
// export const addFinancialDetails = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     const { accountName, accountNumber, bankName, accountType } = req.body;

//     if (!accountName || !accountNumber || !bankName || !accountType) {
//       return res
//         .status(400)
//         .json({
//           message:
//             "All fields (accountName, accountNumber, bankName, accountType) are required",
//         });
//     }

//     const newBankDetails = {
//       accountName,
//       accountNumber,
//       bankName,
//       accountType,
//     };
//     user.bankDetails.push(newBankDetails);

//     await user.save();

//     res.status(200).json({
//         message: "Bank details added successfully",
//         bankDetails: user.bankDetails,
//         user,
//       });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };




// export const updateFinancialDetails = async (req, res) => {
//   try {
//     const { _id, accountName, accountNumber, bankName, accountType } = req.body;
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     // Find the specific bank detail by ID and update only that entry
//     const index = user.bankDetails.findIndex((detail) => detail._id.toString() === _id);
//     if (index === -1) return res.status(404).json({ message: "Bank detail not found" });

//     user.bankDetails[index] = { _id, accountName, accountNumber, bankName, accountType };
//     await user.save();

//     res.json({
//       message: "Bank details updated successfully",
//       bankDetails: user.bankDetails,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };





// // Delete financial details
// export const deleteFinancialDetails = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.bankDetails = null;
//     await user.save();

//     res.json({ message: "Bank details deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };




import User from "../models/User.js";
import razorpay from "../config/razorpay.js";
import axios from "axios";

// Get financial details
export const getFinancialDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({
      financialDetails: user.bankDetails,
      razorpayContactId: user.razorpayContactId,
      fundAccountId: user.fundAccountId,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// Add financial details
// export const addFinancialDetails = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const { accountName, accountNumber, ifscCode, bankName, accountType } = req.body;

//     if (!accountName || !accountNumber || !ifscCode || !bankName || !accountType) {
//       return res.status(400).json({
//         message: "All fields (accountName, accountNumber, ifscCode, bankName, accountType) are required",
//       });
//     }

//     // Create Razorpay Contact if not exists
//     if (!user.razorpayContactId) {
//       const contact = await razorpay.contacts.create({
//         name: `${user.firstName} ${user.lastName}`,
//         email: user.email,
//         contact: user.phone,
//         type: "customer",
//       });

//       if (!contact || !contact.id) {
//         return res.status(500).json({ message: "Failed to create Razorpay Contact" });
//       }

//       user.razorpayContactId = contact.id;
//     }

//     // Create Fund Account using RazorpayX API
//     const fundAccountResponse = await axios.post(
//       "https://api.razorpay.com/v1/fund_accounts",
//       {
//         contact_id: user.razorpayContactId,
//         account_type: "bank_account",
//         bank_account: {
//           name: accountName,
//           account_number: accountNumber,
//           ifsc: ifscCode,
//         },
//       },
//       {
//         auth: {
//           username: process.env.RAZORPAY_KEY_ID,
//           password: process.env.RAZORPAY_KEY_SECRET,
//         },
//       }
//     );

//     if (!fundAccountResponse || !fundAccountResponse.data || !fundAccountResponse.data.id) {
//       return res.status(500).json({ message: "Failed to create Fund Account" });
//     }

//     user.bankDetails.push({ accountName, accountNumber, ifscCode, bankName, accountType });
//     user.fundAccountId = fundAccountResponse.data.id;

//     await user.save();

//     res.status(200).json({
//       message: "Bank details added successfully",
//       bankDetails: user.bankDetails,
//       fundAccountId: user.fundAccountId,
//     });
//   } catch (error) {
//     console.error("Error:", error.response?.data || error.message);
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };






// create
export const addFinancialDetails = async (req, res) => {
  try {
    const { accountName, accountNumber, ifscCode, bankName, accountType } = req.body;

    if (!accountName || !accountNumber || !ifscCode || !bankName || !accountType) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const razorpayKey = process.env.RAZORPAY_KEY_ID;
    const razorpaySecret = process.env.RAZORPAY_KEY_SECRET;

    // Step 1: Create Contact in Razorpay
    const contactResponse = await axios.post('https://api.razorpay.com/v1/contacts', {
      name: `${req.user.firstName} ${req.user.lastName}`,
      email: req.user.email,
      contact: req.user.phone || '9999999999',
      type: 'customer',
    }, {
      auth: {
        username: razorpayKey,
        password: razorpaySecret
      }
    });

    const contactId = contactResponse.data.id;

    // Step 2: Create Fund Account
    const fundAccountResponse = await axios.post('https://api.razorpay.com/v1/fund_accounts', {
      contact_id: contactId,
      account_type: 'bank_account',
      bank_account: {
        name: accountName,
        account_number: accountNumber,
        ifsc: ifscCode,
      }
    }, {
      auth: {
        username: razorpayKey,
        password: razorpaySecret
      }
    });

    const fundAccountId = fundAccountResponse.data.id;

    // Save details in the database
    const user = await User.findById(req.user._id);
    user.bankDetails.push({ accountName, accountNumber, ifscCode, bankName, accountType });
    user.fundAccountId = fundAccountId;
    await user.save();

    res.status(200).json({ 
      message: 'Bank details added successfully', 
      user: { bankDetails: user.bankDetails, fundAccountId: user.fundAccountId } 
    });
  } catch (error) {
    console.error("Error adding bank details:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};


// Update financial details
export const updateFinancialDetails = async (req, res) => {
  try {
    const { _id, accountName, accountNumber, ifscCode, bankName, accountType } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find the specific bank detail by ID and update only that entry
    const index = user.bankDetails.findIndex((detail) => detail._id.toString() === _id);
    if (index === -1) return res.status(404).json({ message: "Bank detail not found" });

    // Update Bank Details
    user.bankDetails[index] = { _id, accountName, accountNumber, ifscCode, bankName, accountType };

    // Update Fund Account in Razorpay
    const fundAccount = await razorpay.fundAccounts.create({
      contact_id: user.razorpayContactId,
      account_type: "bank_account",
      bank_account: {
        name: accountName,
        account_number: accountNumber,
        ifsc: ifscCode,
      },
    });

    user.fundAccountId = fundAccount.id;

    await user.save();

    res.json({
      message: "Bank details updated successfully",
      bankDetails: user.bankDetails,
      fundAccountId: user.fundAccountId,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Delete financial details
export const deleteFinancialDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.bankDetails = [];
    user.fundAccountId = null;
    await user.save();

    res.json({ message: "Bank details deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

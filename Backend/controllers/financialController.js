import User from "../models/User.js";

// Get financial details
export const getFinancialDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ financialDetails: user.bankDetails });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Add financial details
export const addFinancialDetails = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const { accountName, accountNumber, bankName, accountType } = req.body;

    if (!accountName || !accountNumber || !bankName || !accountType) {
      return res
        .status(400)
        .json({
          message:
            "All fields (accountName, accountNumber, bankName, accountType) are required",
        });
    }

    const newBankDetails = {
      accountName,
      accountNumber,
      bankName,
      accountType,
    };
    user.bankDetails.push(newBankDetails);

    await user.save();

    res.status(200).json({
        message: "Bank details added successfully",
        bankDetails: user.bankDetails,
        user,
      });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};





// Update financial details
// export const updateFinancialDetails = async (req, res) => {
//   try {
//     const { accountName, accountNumber, bankName, accountType } = req.body;
//     const user = await User.findById(req.user.id);
//     if (!user) return res.status(404).json({ message: "User not found" });

//     user.bankDetails = { accountName, accountNumber, bankName, accountType };
//     await user.save();

//     res.json({
//       message: "Bank details updated successfully",
//       bankDetails: user.bankDetails,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Server Error", error: error.message });
//   }
// };


export const updateFinancialDetails = async (req, res) => {
  try {
    const { _id, accountName, accountNumber, bankName, accountType } = req.body;
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find the specific bank detail by ID and update only that entry
    const index = user.bankDetails.findIndex((detail) => detail._id.toString() === _id);
    if (index === -1) return res.status(404).json({ message: "Bank detail not found" });

    user.bankDetails[index] = { _id, accountName, accountNumber, bankName, accountType };
    await user.save();

    res.json({
      message: "Bank details updated successfully",
      bankDetails: user.bankDetails,
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

    user.bankDetails = null;
    await user.save();

    res.json({ message: "Bank details deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

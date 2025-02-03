import mongoose from "mongoose";
import Message from "../models/MessageSchema.js";

// 📌 CREATE a New Message Notification
export const createMessageNotification = async (req, res) => {
    try {
      let { userId, adminId, message } = req.body;
  
      console.log("Received message request:", { userId, adminId, message }); // Debugging
  
      if (!userId || !message) {
        console.log("Validation failed: Missing userId or message");
        return res.status(400).json({ error: "User ID and message are required" });
      }
  
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        console.log("Validation failed: Invalid userId format");
        return res.status(400).json({ error: "Invalid userId format" });
      }
  
      if (adminId && !mongoose.Types.ObjectId.isValid(adminId)) {
        console.log("Validation failed: Invalid adminId format");
        return res.status(400).json({ error: "Invalid adminId format" });
      }
  
      const newMessage = new Message({
        userId: new mongoose.Types.ObjectId(userId),
        adminId: adminId ? new mongoose.Types.ObjectId(adminId) : null,
        message,
      });
  
      await newMessage.save();
  
      console.log("Message saved successfully:", newMessage); // Debugging
  
      res.status(201).json({ success: true, message: "Message notification sent", notification: newMessage });
    } catch (error) {
      console.error("Error saving message:", error);
      res.status(500).json({ error: error.message });
    }
  };
  

// 📌 GET All Messages for a User
export const getUserMessageNotifications = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Validate ObjectId format
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ error: "Invalid userId format" });
      }
  
      const messages = await Message.find({ userId }).sort({ createdAt: -1 });
  
      if (!messages.length) {
        return res.status(404).json({ success: false, message: "No messages found" });
      }
  
      res.status(200).json({ success: true, notifications: messages });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// 📌 Mark Message as Read
export const markMessageAsRead = async (req, res) => {
  try {
    const { messageId } = req.params;
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    message.isRead = true;
    await message.save();

    res.status(200).json({ success: true, message: "Message marked as read", notification: message });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 📌 DELETE a Message Notification
export const deleteMessageNotification = async (req, res) => {
  try {
    const { messageId } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(messageId);

    if (!deletedMessage) {
      return res.status(404).json({ error: "Message not found or already deleted" });
    }

    res.status(200).json({ success: true, message: "Message notification deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"; // Include ".js" for ES modules

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// 404 Route
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

// Server Listen
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




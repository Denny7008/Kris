import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';  
import payRoutes from "./routes/payoutRoutes.js";
import payoutRoutes from './routes/payoutRoutes.js';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();


// app.use('/uploads', express.static('uploads'));

// Middleware
app.use(cors());
app.use(bodyParser.json());
// app.use(express.json());
app.use(express.json({ limit: "50mb" })); // Allow JSON payloads up to 50MB
app.use(express.urlencoded({ limit: "50mb", extended: true })); 

// Use the authentication routes (register, login, etc.)
app.use(authRoutes);    
app.use(payRoutes);     
app.use('/api', payoutRoutes);

// 404 Route
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not founds" });
});


// Server Listen
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));











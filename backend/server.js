import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Routes
app.use("/api/quizzes", quizRoutes); // Use quiz routes
app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
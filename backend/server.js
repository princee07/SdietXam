import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import quizRoutes from "./routes/quizRoutes.js";
import connectDB from "./config/db.js";

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// Routes
console.log("Quiz routes loaded");
app.use("/api/quizzes", quizRoutes); // Ensure this is correctly set up

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
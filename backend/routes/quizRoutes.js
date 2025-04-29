import express from "express";
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
  submitQuiz,
} from "../controllers/quizController.js";

const router = express.Router();

// Create a new quiz
router.post("/", createQuiz);

// Get all quizzes
router.get("/", getAllQuizzes); // Changed to GET for fetching quizzes

// Get a specific quiz by ID
router.get("/:id", getQuizById);

// Submit quiz answers
router.post("/submit/:id", submitQuiz);

export default router;
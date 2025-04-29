import Quiz from "../models/Quiz.js";

// Create a new quiz
export const createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (err) {
    res.status(500).json({ error: "Failed to create quiz" });
  }
};

// Get all quizzes
export const getAllQuizzes = async (req, res) => {
  const { semester, subject } = req.query; // Optional filters
  try {
    const query = {};
    if (semester) query.semester = semester;
    if (subject) query.subject = subject;

    const quizzes = await Quiz.find(query);
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quizzes" });
  }
};

// Get a specific quiz by ID
export const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch quiz" });
  }
};

// Submit quiz answers
export const submitQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { answers } = req.body;

    // Logic to evaluate answers can go here
    res.json({ message: "Quiz submitted successfully", answers });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit quiz" });
  }
};
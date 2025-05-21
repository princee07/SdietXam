import Quiz from "../models/Quiz.js";
import QuizResult from "../models/QuizResult.js"; // Add this import

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

// Update this function to handle quiz submissions with scoring
export const submitQuiz = async (req, res) => {
  try {
    const { id } = req.params;
    const { answers } = req.body;
    
    const quiz = await Quiz.findById(id);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }
    
    // Calculate score based on answers
    let correctAnswers = 0;
    const answerDetails = [];
    
    quiz.questions.forEach((question, index) => {
      const userAnswer = answers[index];
      const isCorrect = userAnswer === question.correctAnswer;
      if (isCorrect) correctAnswers++;
      
      answerDetails.push({
        question: question.question,
        userAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect
      });
    });
    
    const totalQuestions = quiz.questions.length;
    const scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    const result = {
      quizId: id,
      score: scorePercentage,
      correctAnswers,
      wrongAnswers: totalQuestions - correctAnswers,
      totalQuestions,
      answerDetails
    };
    
    res.json({
      message: "Quiz submitted successfully",
      result
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit quiz" });
  }
};

// Add a new function to save quiz results to the leaderboard
export const saveQuizResult = async (req, res) => {
  try {
    console.log("Received quiz result data:", req.body); // Add logging
    
    const {
      name,
      course,
      score,
      correctAnswers,
      wrongAnswers,
      quizTitle,
      subject,
      semester,
      timeSpent,
      badges,
      streak,
      year,
      specialization
    } = req.body;
    
    // Create a new quiz result
    const quizResult = new QuizResult({
      name,
      // Make sure course is lowercase and matches one of your enum values
      course: course.toLowerCase(),
      score,
      correctAnswers,
      wrongAnswers, 
      quizTitle,
      subject,
      semester,
      timeSpent,
      badges: badges || Math.floor(score / 10),
      streak: streak || 1,
      // Add year if provided
      ...(year && { year }),
      // Add specialization if provided
      ...(specialization && { specialization })
    });
    
    const savedResult = await quizResult.save();
    console.log("Saved result:", savedResult); // Add logging
    
    res.status(201).json({
      success: true,
      data: savedResult,
      message: "Quiz result saved to leaderboard successfully"
    });
  } catch (err) {
    console.error("Error saving quiz result:", err);
    res.status(500).json({ error: "Failed to save quiz result", details: err.message });
  }
};
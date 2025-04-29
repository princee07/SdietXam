const validateQuiz = (req, res, next) => {
    const { title, description, questions } = req.body;
  
    if (!title || !description || !Array.isArray(questions) || questions.length === 0) {
      return res.status(400).json({ error: "Invalid quiz data. Title, description, and questions are required." });
    }
  
    for (const question of questions) {
      if (!question.question || !Array.isArray(question.options) || question.options.length < 2 || !question.correctAnswer) {
        return res.status(400).json({ error: "Each question must have a question text, at least two options, and a correct answer." });
      }
    }
  
    next(); // Proceed to the next middleware or route handler
  };
  
  export default validateQuiz;
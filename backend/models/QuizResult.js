import mongoose from 'mongoose';

const QuizResultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  course: {
    type: String,
    required: true,
    lowercase: true,
    enum: ['btech', 'bca', 'bba', 'computer science'] // Add "computer science" to allowed values
  },
  score: {
    type: Number,
    required: true
  },
  correctAnswers: {
    type: Number,
    required: true
  },
  wrongAnswers: {
    type: Number,
    required: true
  },
  quizTitle: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  semester: {
    type: String,
    required: true
  },
  timeSpent: {
    type: Number,
    default: 0
  },
  badges: {
    type: Number,
    default: 0
  },
  streak: {
    type: Number,
    default: 1
  },
  // Fields specific to course
  // For B.Tech
  year: String,
  // For BCA and BBA
  specialization: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('QuizResult', QuizResultSchema);
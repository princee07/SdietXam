import express from 'express';
import { createQuiz, getAllQuizzes, getQuizById, submitQuiz, saveQuizResult } from '../controllers/quizController.js';

const router = express.Router();

router.post('/', createQuiz);
router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/:id/submit', submitQuiz);
router.post('/results', saveQuizResult);

export default router;
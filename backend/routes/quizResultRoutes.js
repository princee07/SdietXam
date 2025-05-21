import express from 'express';
import { saveQuizResult } from '../controllers/quizController.js';

const router = express.Router();

// Endpoint to save quiz results
router.post('/', saveQuizResult);

export default router;
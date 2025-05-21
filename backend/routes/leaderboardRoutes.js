import express from 'express';
import { getLeaderboard } from '../controllers/leaderboardController.js';
import { saveQuizResult } from '../controllers/quizController.js';

const router = express.Router();

router.get('/', getLeaderboard);
router.post('/', saveQuizResult);

export default router;
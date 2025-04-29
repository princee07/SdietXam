import express from 'express';

import {
    createQuiz,
    getAllQuizzes,
    getQuizById,
    submitQuiz,
}from "../controllers/quizController.js"

const router = express.Router();


//cretae a new quiz
router.post('/',createQuiz)


//get all quizzes

router.post('/',getAllQuizzes)

//get a specific quiz by id
router.get('/:id',getQuizById)

//submit quiz ans
router.post('/submit/:id',submitQuiz)

router.post("/", (req, res) => {
  console.log("POST /api/quizzes hit");
  res.send("Route is working");
});

export default router;
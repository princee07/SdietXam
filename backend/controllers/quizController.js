import Quiz from "../models/Quiz.js";

// creatae a new Quiz

export const createQuiz  = async (req,res)=>{
    try{
         const quiz = new Quiz(req.body);
         await quiz.save();
         res.status(201).json(quiz);
    }catch(err){
         res.status(500).json({error: err.message});
    }
};

// get all quizzes

export const getAllQuizzes = async (req,res)=>{
    try{
        const quizzes =await Quiz.find();
         res.status(200).json({message:"Quizzes fetched Successfully",quizzes});
    }catch(err){
        res.status(500).json({message:"Internal server error",err})
    }
}


// get a specific quix by id 

export const getQuizById = async (req,res)=>{
   try{
    const quiz = await Quiz.findById(req.params.id);
    if(!quiz) return res.status(400).json({message:"Quiz not found"})
        res.staus(200).json({messaage:"Quiz fetched Successfully",quiz})
   }catch(err){
       res.staus(500).json({message:"Internal server error",err})
   }
}


// Submit Quiz Ans

export const submitQuiz = async(req,res)=>{
    try{
        const quiz = await Quiz.findById(req.params.id);
        if(!quiz)  return res.status(400).json({message:"Quiz not found"})
            const {answer}= req.body;
           let score = 0;
           
           quiz.question.forEach((question,index)=>{
            if(question.correctAnswer ===answer[index]){
                score++;
            }
           })

           res.status(200).json({score,total: quiz.questions.length})
     }catch(err){
        res.status(500).json({error:err.message})
     }
}
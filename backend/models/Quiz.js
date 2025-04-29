import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    
    description : {
        type:String,
        required:true
    },
    questions:[
        {
            question :{type:String, required:true},
            options:[String],
            correctAnswer: {type:String, required:true},
        },
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    }
    
    
});


const Quiz = mongoose.model("Quiz",quizSchema)

export default Quiz
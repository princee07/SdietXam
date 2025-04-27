import express from 'express';
import cors from 'cors';


import connectDB from './config/db.js';
connectDB(); // Connect to MongoDB

import dotenv from 'dotenv';
dotenv.config(); 

const app = express();
app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('API is runing...')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`server is runing on the port http://localhost:${PORT}`)
})

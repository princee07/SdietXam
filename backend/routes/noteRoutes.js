import express from "express";
import multer from "multer";
import { createNote, getAllNotes } from "../controllers/noteController.js";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  },
});
const upload = multer({ storage });

// Route to create a new note
router.post("/", upload.single("file"), createNote);

// Route to get all notes
router.get("/", getAllNotes);

export default router;
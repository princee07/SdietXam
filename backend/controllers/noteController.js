import Note from "../models/Note.js";

// Create a new note
export const createNote = async (req, res) => {
  try {
    console.log("Request body:", req.body);
    console.log("Uploaded file:", req.file);

    const { title, description, semester, subject, senderName, date } = req.body;

    // Validate required fields
    if (!title || !description || !semester || !subject || !senderName || !date) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const fileName = req.file ? req.file.filename : null;

    const note = new Note({
      title,
      description,
      semester,
      subject,
      senderName,
      date,
      fileName,
    });

    await note.save();
    res.status(201).json({ message: "Note created successfully", note });
  } catch (err) {
    console.error("Error creating note:", err);
    res.status(500).json({ error: "Failed to create note" });
  }
};

// Get all notes
export const getAllNotes = async (req, res) => {
  const { semester, subject } = req.query; // Optional filters
  try {
    const query = {};
    if (semester) query.semester = semester;
    if (subject) query.subject = subject;

    const notes = await Note.find(query);
    res.json(notes);
  } catch (err) {
    console.error("Error fetching notes:", err);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};
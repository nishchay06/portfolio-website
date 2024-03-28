const Note = require("../models/note")

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find()
    res.status(200).json(notes)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }
}

const createNote = async (req, res) => {
  try {
    const { name, position, message } = req.body
    const newNote = new Note({
      name,
      position,
      message,
    })
    const savedNote = await newNote.save()
    console.log("Note created successfully")

    return res.status(201).json(savedNote)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = {
  getAllNotes: getAllNotes,
  createNote: createNote,
}

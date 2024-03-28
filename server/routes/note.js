const express = require("express")
const router = express.Router()
const note = require("../controllers/note")

router.get("/notes", note.getAllNotes)
router.post("/createNotes", note.createNote)

module.exports = router

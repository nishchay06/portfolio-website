const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NoteSchema = new Schema({
  name: {
    type: String,
  },
  position: {
    type: String,
  },
  message: {
    type: String,
  },
})

module.exports = mongoose.model("Note", NoteSchema)

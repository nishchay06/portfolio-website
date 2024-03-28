const express = require("express")
const app = express()
const noteRoutes = require("./routes/note")
const bodyParser = require("body-parser")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGO_CONNECTION, {})

const db = mongoose.connection
db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.once("open", () => {
  console.log("Connected to MongoDB")
})

app.use(bodyParser.json())
app.use(cors())
app.use("/api", noteRoutes)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server Port: ${PORT}`))

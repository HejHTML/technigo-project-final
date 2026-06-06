import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import scoreRoutes from "./routes/scores.js"

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/final-project"

mongoose.connect(mongoUrl)
mongoose.Promise = Promise

mongoose.connection.on("connected", () => {
  console.log("MongoDB connected")
})

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err)
})

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API is running 🚀")
})

app.use("/scores", scoreRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
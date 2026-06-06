import express from "express"
import { Score } from "../models/Score.js"

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const { name, score } = req.body

        if (!name || score === undefined) {
            return res.status(400).json({ error: "Missing name or score" })
        }

        const newScore = await Score.create({ name, score })
        res.json(newScore)
    } catch (err) {
        res.status(500).json({ error: "Server error" })
    }
})

router.get("/", async (req, res) => {
    const scores = await Score.find().sort({ score: -1 })
    res.json(scores)
})

export default router
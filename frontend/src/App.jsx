import { useState, useEffect } from "react"
import { questions } from "./data/questions"
import axios from "axios"

export const App = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const [name, setName] = useState("")
  const [saved, setSaved] = useState(false)

  const [leaderboard, setLeaderboard] = useState([])

  const handleAnswer = (option) => {
    const correct = questions[current].answer

    if (option === correct) {
      setScore((prev) => prev + 1)
    }

    const next = current + 1

    if (next < questions.length) {
      setCurrent(next)
    } else {
      setFinished(true)
    }
  }

  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/scores")
      setLeaderboard(res.data)
    } catch (error) {
      console.log("Error fetching leaderboard:", error)
    }
  }

  const saveScoreToBackend = async () => {
    try {
      await axios.post("http://localhost:8080/scores", {
        name,
        score
      })

      await fetchLeaderboard()
      setSaved(true)
    } catch (error) {
      console.log("Error saving score:", error)
    }
  }

  useEffect(() => {
    if (finished && saved) {
      fetchLeaderboard()
    }
  }, [finished, saved])

  if (finished && !saved) {
    return (
      <div>
        <h1>Quiz finished 🎉</h1>
        <h2>Your score: {score} / {questions.length}</h2>

        <input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={saveScoreToBackend}
          disabled={!name}
        >
          Save score
        </button>
      </div>
    )
  }

  if (finished && saved) {
    return (
      <div>
        <h1>Leaderboard 🏆</h1>

        <h2>Thanks {name}!</h2>
        <p>Your score: {score}</p>

        <h3>Top scores:</h3>

        {leaderboard.map((item, index) => (
          <div key={index}>
            {item.name} — {item.score}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div>
      <h1>{questions[current].question}</h1>

      {questions[current].options.map((option) => (
        <button key={option} onClick={() => handleAnswer(option)}>
          {option}
        </button>
      ))}

      <p>Score: {score}</p>
    </div>
  )
}
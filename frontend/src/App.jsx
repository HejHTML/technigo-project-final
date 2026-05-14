import { useState, useEffect } from "react"
import axios from "axios"
import { questions } from "./data/questions"

export const App = () => {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const [name, setName] = useState("")
  const [saved, setSaved] = useState(false)

  const [leaderboard, setLeaderboard] = useState([])

  // 🏆 Hämta leaderboard
  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/scores")
      setLeaderboard(res.data)
    } catch (error) {
      console.log("Error fetching leaderboard:", error)
    }
  }

  useEffect(() => {
    fetchLeaderboard()
  }, [saved])

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

  const saveScoreToBackend = async () => {
    try {
      await axios.post("http://localhost:8080/scores", {
        name,
        score
      })

      setSaved(true)
    } catch (error) {
      console.log("Error saving score:", error)
    }
  }

  // 🏁 RESULT PAGE
  if (finished) {
    return (
      <div>
        <h1>Quiz finished 🎉</h1>

        <h2>
          Your score: {score} / {questions.length}
        </h2>

        {!saved ? (
          <>
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
          </>
        ) : (
          <p>Score saved ✅</p>
        )}

        {/* 🏆 Leaderboard */}
        <div className="leaderboard">
          <h2>🏆 Leaderboard</h2>

          {leaderboard.map((item, index) => (
            <div
              className="leaderboard-card"
              key={item._id}
            >
              <span className="rank">
                #{index + 1}
              </span>

              <span className="player-name">
                {item.name}
              </span>

              <span className="player-score">
                {item.score} pts
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // 🎮 QUIZ PAGE
  return (
    <div>
      <h1>{questions[current].question}</h1>

      {questions[current].options.map((option) => (
        <button
          key={option}
          onClick={() => handleAnswer(option)}
        >
          {option}
        </button>
      ))}

      <p>Score: {score}</p>
    </div>
  )
}
import { useQuiz } from "./context/QuizContext"
import { useState, useEffect } from "react"
import axios from "axios"
import { questions } from "./data/questions"

export const App = () => {
  const {
    score,
    setScore,
    name,
    setName,
    saved,
    setSaved
  } = useQuiz()

  const [current, setCurrent] = useState(0)
  const [finished, setFinished] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const [leaderboard, setLeaderboard] = useState([])
  const [tickerRunning, setTickerRunning] = useState(true)

  // 🏆 Fetch leaderboard
  const fetchLeaderboard = async () => {
    try {
      const res = await axios.get("http://localhost:8080/scores")
      setLeaderboard(res.data)
    } catch (error) {
      console.log("Error fetching leaderboard:", error)
    }
  }

  // 🎬 ticker auto stop
  useEffect(() => {
    const timer = setTimeout(() => {
      setTickerRunning(false)
    }, 15000)

    return () => clearTimeout(timer)
  }, [])

  // 🏆 reload leaderboard when saved changes
  useEffect(() => {
    fetchLeaderboard()
  }, [saved])

  // 🎯 handle answer
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

  // 💾 save score
  const saveScoreToBackend = async () => {
    const trimmedName = name.trim()

    if (trimmedName.length < 4) {
      setErrorMessage("Name must be at least 4 characters")
      return
    }

    try {
      await axios.post("http://localhost:8080/scores", {
        name: trimmedName,
        score
      })

      setSaved(true)
      setErrorMessage("")

    } catch (error) {
      console.log("Error saving score:", error)
      setErrorMessage("Could not save score. Please try again.")
    }
  }

  // 🏁 RESULT PAGE
  if (finished) {
    return (
      <div className="app">
        <div className="result-screen">

          <h1>Quiz finished 🎉</h1>

          <h2>
            Your score: {score} / {questions.length}
          </h2>

          {!saved ? (
            <>
              <input
                placeholder="Enter your name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  setErrorMessage("")
                }}
              />

              <button
                onClick={saveScoreToBackend}
                disabled={!name.trim()}
              >
                Save score
              </button>

              {errorMessage && (
                <p className="error-message">{errorMessage}</p>
              )}
            </>
          ) : (
            <p>Score saved ✅</p>
          )}

          {/* 🏆 Leaderboard */}
          <div className="leaderboard">
            <h2>🏆 Leaderboard</h2>

            {leaderboard.map((item, index) => (
              <div className="leaderboard-card" key={item._id}>
                <span className="rank">#{index + 1}</span>
                <span className="player-name">{item.name}</span>
                <span className="player-score">{item.score} pts</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    )
  }

  // 🎮 QUIZ PAGE
  return (
    <>
      {/* 🔥 TICKER */}
      <div className={`ticker ${tickerRunning ? "" : "fade"}`}>
        <div className="ticker-track">
          <span>• IS YOUR PASSWORD GOOD ENOUGH? •</span>
          <span>⚡ TEST YOUR KNOWLEDGE IN CYBERSECURITY ⚡</span>
          <span>• BECOME WISER WITH CYBERWISE •</span>
          <span>⚡ BEGINNER LEVEL ⚡</span>
          <span>⚡ TEST YOUR KNOWLEDGE IN CYBERSECURITY ⚡</span>
          <span>• BECOME WISER WITH CYBERWISE •</span>
          <span>⚡ LET'S GO! ⚡</span>
        </div>
      </div>

      <div className="app">
        <div className="quiz-card">

          <p className="question-count">
            Question {current + 1} / {questions.length}
          </p>

          <h1 className="question">
            {questions[current].question}
          </h1>

          <div className="answers">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="answer-button"
              >
                {option}
              </button>
            ))}
          </div>

          <p className="score">
            Score: {score}
          </p>

        </div>
      </div>
    </>
  )
}
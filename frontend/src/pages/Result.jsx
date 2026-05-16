import { useQuiz } from "../context/QuizContext"
import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Result = () => {
    const {
        score,
        name,
        setName,
        saved,
        setSaved,
        setScore
    } = useQuiz()

    const navigate = useNavigate()

    const [leaderboard, setLeaderboard] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    // 🏆 fetch leaderboard
    const fetchLeaderboard = async () => {
        try {
            const res = await axios.get("http://localhost:8080/scores")
            setLeaderboard(res.data)
        } catch (error) {
            setErrorMessage("Could not load leaderboard")
        }
    }

    useEffect(() => {
        fetchLeaderboard()
    }, [])

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
            fetchLeaderboard()
        } catch (error) {
            setErrorMessage("Could not save score. Please try again.")
        }
    }

    // 🔄 play again
    const handlePlayAgain = () => {
        setScore(0)
        setName("")
        setSaved(false)
        setErrorMessage("")
        navigate("/")
    }

    return (
        <div className="app">
            <div className="result-screen">

                <h1>Quiz finished 🎉</h1>

                <h2>Your score: {score}</h2>

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
                    <>
                        <p>Score saved ✅</p>

                        <button
                            onClick={handlePlayAgain}
                            className="play-again-btn"
                        >
                            Improve your skills? 🔄
                        </button>
                    </>
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
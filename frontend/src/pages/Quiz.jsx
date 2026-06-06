import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { questions } from "../data/questions"

export const Quiz = () => {
    const { score, setScore } = useQuiz()

    const [current, setCurrent] = useState(0)
    const [tickerRunning, setTickerRunning] = useState(true)

    // 🟢 NEW: answer feedback states
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)

    const navigate = useNavigate()

    // 🔥 ticker auto stop
    useEffect(() => {
        const timer = setTimeout(() => {
            setTickerRunning(false)
        }, 15000)

        return () => clearTimeout(timer)
    }, [])

    // 🧠 answer logic (UPDATED)
    const handleAnswer = (option) => {
        const correct = questions[current].answer

        setSelected(option)
        setShowResult(true)

        const isCorrect = option === correct

        if (isCorrect) {
            setScore((prev) => prev + 1)
        }

        setTimeout(() => {
            const next = current + 1

            setSelected(null)
            setShowResult(false)

            if (next < questions.length) {
                setCurrent(next)
            } else {
                navigate("/result")
            }
        }, 1000)
    }

    // 🟢 progress bar
    const progress = ((current + 1) / questions.length) * 100

    return (
        <>
            {/* 🔥 TICKER */}
            <div className={`ticker ${tickerRunning ? "" : "fade"}`}>
                <div className="ticker-track">
                    <span>• IS YOUR PASSWORD GOOD ENOUGH? •</span>
                    <span>⚡ TEST YOUR KNOWLEDGE IN CYBERSECURITY ⚡</span>
                    <span>• BECOME WISER WITH CYBERWISE •</span>
                    <span>⚡ BEGINNER LEVEL ⚡</span>
                    <span>⚡ STAY SAFE ONLINE ⚡</span>
                </div>
            </div>

            <div className="app">
                <div className="quiz-card">

                    {/* 🟢 PROGRESS BAR */}
                    <div className="progress-container">
                        <div
                            className="progress-bar"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

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
                                disabled={showResult}
                                className={`answer-button
  ${showResult && option === questions[current].answer ? "correct" : ""}
  ${showResult && option === selected && option !== questions[current].answer ? "wrong" : ""}
  ${!showResult && option === selected ? "selected" : ""}
`}
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
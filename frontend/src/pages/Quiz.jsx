import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { questions } from "../data/questions"

export const Quiz = () => {
    const {
        score,
        setScore
    } = useQuiz()

    const [current, setCurrent] = useState(0)
    const [tickerRunning, setTickerRunning] = useState(true)

    const navigate = useNavigate()

    // 🔥 ticker auto stop
    useEffect(() => {
        const timer = setTimeout(() => {
            setTickerRunning(false)
        }, 15000)

        return () => clearTimeout(timer)
    }, [])

    // 🎯 answer logic
    const handleAnswer = (option) => {
        const correct = questions[current].answer

        if (option === correct) {
            setScore((prev) => prev + 1)
        }

        const next = current + 1

        if (next < questions.length) {
            setCurrent(next)
        } else {
            navigate("/result")
        }
    }

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
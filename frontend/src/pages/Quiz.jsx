import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { questions } from "../data/questions"

export const Quiz = () => {
    const [showCard, setShowCard] = useState(true)
    const { score, setScore } = useQuiz()
    const [current, setCurrent] = useState(0)
    const [tickerRunning, setTickerRunning] = useState(true)


    // 🟢 NEW: answer feedback states
    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [animating, setAnimating] = useState(false)

    const navigate = useNavigate()


    // 🔥 ticker auto stop
    useEffect(() => {
        const timer = setTimeout(() => {
            setTickerRunning(false)
        }, 7000) // exakt match med animation

        return () => clearTimeout(timer)
    }, [])
    const handleAnswer = (option) => {
        const correct = questions[current].answer

        // markera svar direkt
        setSelected(option)
        setShowResult(true)

        if (option === correct) {
            setScore((prev) => prev + 1)
        }

        // ge tid att visa rätt/fel
        setTimeout(() => {
            setAnimating(true)

            // start slide-out
            setTimeout(() => {
                const next = current + 1

                if (next < questions.length) {
                    setCurrent(next)
                } else {
                    navigate("/result")
                }

                // reset ALL UI state direkt efter byte
                setSelected(null)
                setShowResult(false)
                setAnimating(false)

            }, 600) // slide duration
        }, 1200) // show feedback time
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
                {showCard && (
                    <div
                        key={current}
                        className={`quiz-card ${animating ? "slide-out" : "slide-in"}`}
                    >

                        {/* 🟢 PROGRESS BAR */}
                        <div className="progress-container">
                            <div
                                className="progress-bar"
                                style={{ width: `${progress}%` }}
                            />
                        </div>

                        <p className="question-count">
                            Fråga {current + 1} / {questions.length}
                        </p>

                        <h1 className="question">
                            {questions[current].question}
                        </h1>

                        <div className="answers">
                            {questions[current].options.map((option) => {
                                const correct = questions[current].answer
                                const isCorrect = showResult && option === correct
                                const isWrong = showResult && option === selected && option !== correct
                                const isSelected = !showResult && option === selected

                                return (
                                    <button
                                        key={option}
                                        onClick={() => handleAnswer(option)}
                                        disabled={showResult}
                                        className={`answer-button
                    ${isCorrect ? "correct" : ""}
                    ${isWrong ? "wrong" : ""}
                    ${isSelected ? "selected" : ""}
                `}
                                    >
                                        {option}
                                    </button>
                                )
                            })}
                        </div>

                        <p className="score">
                            Poäng: {score}
                        </p>

                    </div>
                )}
            </div>
        </>
    )
}
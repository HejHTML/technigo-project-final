import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuiz } from "../context/QuizContext"
import { questions } from "../data/questions"

export const Quiz = () => {
    const { score, setScore } = useQuiz()
    const [current, setCurrent] = useState(0)
    const [tickerRunning, setTickerRunning] = useState(true)

    const [selected, setSelected] = useState(null)
    const [showResult, setShowResult] = useState(false)
    const [animating, setAnimating] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const timer = setTimeout(() => {
            setTickerRunning(false)
        }, 7000)

        return () => clearTimeout(timer)
    }, [])
    const handleAnswer = (option) => {
        const correct = questions[current].answer
        const isCorrect = option === correct

        setSelected(option)
        setShowResult(true)

        if (isCorrect) {
            setScore((prev) => prev + 1)
        }

        // kortare om rätt, längre om fel
        const feedbackTime = isCorrect ? 800 : 3000

        setTimeout(() => {
            setAnimating(true)

            setTimeout(() => {
                const next = current + 1

                if (next < questions.length) {
                    setCurrent(next)
                } else {
                    navigate("/result")
                }

                setSelected(null)
                setShowResult(false)
                setAnimating(false)

            }, 600)
        }, feedbackTime)
    }

    const progress = ((current + 1) / questions.length) * 100
    const correct = questions[current].answer

    return (
        <>
            <div className={`ticker ${tickerRunning ? "" : "fade"}`}>
                <div className="ticker-track">
                    <span>• IS YOUR PASSWORD GOOD ENOUGH? •</span>
                    <span>⚡ TEST YOUR KNOWLEDGE IN CYBERSECURITY ⚡</span>
                    <span>• BECOME WISER WITH CYBERWISE •</span>
                </div>
            </div>

            <div className="app">
                <div key={current} className={`quiz-card ${animating ? "slide-out" : "slide-in"}`}>

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

                            const isCorrectAnswer = option === correct
                            const isWrongChoice = showResult && selected === option && option !== correct

                            // 🔥 VIKTIG LOGIK
                            const showCorrectPulse =
                                showResult &&
                                selected !== correct &&
                                isCorrectAnswer

                            const showCorrectGreen =
                                showResult && isCorrectAnswer

                            return (
                                <button
                                    key={option}
                                    onClick={() => handleAnswer(option)}
                                    disabled={showResult}
                                    className={`answer-button
                                        ${isWrongChoice ? "wrong" : ""}
                                        ${showCorrectPulse ? "correct-pulse" : ""}
                                        ${showCorrectGreen ? "correct" : ""}
                                    `}
                                >
                                    {option}
                                </button>
                            )
                        })}
                    </div>

                    <p className="score">Poäng: {score}</p>

                </div>
            </div>
        </>
    )
}
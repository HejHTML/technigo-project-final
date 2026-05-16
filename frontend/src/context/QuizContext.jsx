import { createContext, useContext, useState } from "react"

const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const [score, setScore] = useState(0)
    const [name, setName] = useState("")
    const [saved, setSaved] = useState(false)

    return (
        <QuizContext.Provider value={{
            score,
            setScore,
            name,
            setName,
            saved,
            setSaved
        }}>
            {children}
        </QuizContext.Provider>
    )
}

export const useQuiz = () => useContext(QuizContext)